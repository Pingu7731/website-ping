import CountUp from 'react-countup'
import { counterItems } from '../constants/index.ts'
import {useInView} from 'react-intersection-observer'
const AnimatedCounter = () => {
    
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div ref={ref} id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>

                        <div key={item.label} className='counter-number text-white text-5xl font-bold mb-2' >
                            {inView ? <CountUp suffix={item.suffix} end={item.value} /> : 0}
                           
                        </div>
                        <div className='text-white-50 text-lg'>
                            {item.label}
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}
export default AnimatedCounter