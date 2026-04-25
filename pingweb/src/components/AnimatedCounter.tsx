import CountUp from 'react-countup'
import { counterItems } from '../constants/index.ts'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from "react";
import { getMyActivities } from "../Api.ts";


const TextSlider = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (texts.length <= 1) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [texts]);
    const currentText = texts[index] || "Nothing";
    const fontSizeClass = currentText.length > 13 //set text size if too long
        ? "text-4xl"
        : "text-5xl";
    return (
        <div className="overflow-hidden h-[1.2em] relative">
            <div
                className={`transition-all duration-500 ease-in-out truncate w-full ${fontSizeClass} animate-slide-up `}
                key={index} // detect content change for css
            >
                {texts[index] || "Nothing"}
            </div>
        </div>
    );
};
//follower-total
//raid-recent (top 5)
//subscriber-recent (top 5)
//判斷是不是號碼
const AnimatedCounter = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // 這裡我們管理整個 counter 的動態資料
    const [dynamicItems, setDynamicItems] = useState(counterItems);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMyActivities();
                if (data) {
                    const follower = data.data['follower-total'].count;
                    const recentRaids = data.data['raid-recent'].slice(0, 5).map((r: any) => r.name);
                    const recentSubs = data.data['subscriber-recent'].slice(0, 5).map((r: any) => r.name);

                    // 更新 State
                    setDynamicItems(prev => prev.map(item => {
                        if (item.id === "followers") return { ...item, value: follower };
                        if (item.id === "raids") return { ...item, value: recentRaids };
                        if (item.id === "subs") return { ...item, value: recentSubs };
                        return item;
                    }));
                }
            } catch (error) {
                // console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div ref={ref} id="counter" className="padding-x-lg xl:mt-0 ">
            <div className="mx-auto grid-4-cols gap-4">
                {dynamicItems.map((item, idx) => (
                    <div key={idx} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center min-h-50'>
                        <div className='counter-number text-white text-5xl font-bold mb-2'>
                            {inView ? (
                                // 判斷號碼
                                typeof item.value === 'number' ? (
                                    <CountUp suffix={item.suffix} end={item.value} />
                                ) : Array.isArray(item.value) ? (
                                    <TextSlider texts={item.value} />
                                ) : (
                                    item.value
                                )
                            ) : (
                                0
                            )}
                        </div>
                        <div className='text-white/50 text-lg'>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter;

