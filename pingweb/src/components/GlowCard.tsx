import { useRef } from "react";

type CardType = {
    desc: string;
    imgPath: string;
    title: string;
    date: string;
}

type Props = {
    card: CardType;
    children: React.ReactNode;
    // index is technically optional 
    index: number;
};

const GlowCard = ({ children }: Props) => {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        // Calculate mouse position 
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        // Calculateangle
        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        // Set the CSS
        containerRef.current.style.setProperty('--start', (angle + 60).toString());
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="card card-border rounded-xl p-5 max-w-lg wrap-break-word whitespace-normal relative overflow-hidden"
        >
            <div className="glow" />
            {/* <div className="mb-5">
                <p className="text-white-50 text-lg">{card.desc}</p>
            </div> */}
            {children}
        </div>
    );
};

export default GlowCard;