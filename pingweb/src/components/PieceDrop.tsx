import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { dropImg } from "../constants";

const PieceDrop: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const { Engine, Render, World, Bodies, Runner } = Matter;
        const engine = Engine.create();
        const world = engine.world;

        const width = window.innerWidth;
        const height = window.innerHeight;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
            },
        });

        const runner = Runner.create();
        let isRunning = false;

        const startEngine = () => {
            if (!isRunning) {
                Render.run(render);
                Runner.run(runner, engine);
                isRunning = true;
            }
        };

        const stopEngine = () => {
            if (isRunning) {
                Render.stop(render);
                Runner.stop(runner);
                isRunning = false;
            }
        };

        const ground = Bodies.rectangle(width / 2, height + 10, width, 40, {
            isStatic: true,
            render: {
                visible: false // hide
            }
        });
        World.add(world, [ground]);

        // 核心邏輯：將點擊事件綁定在 document 上
        const handleClick = (e: MouseEvent) => {
            // 這裡不需要額外的檢查，因為 div 是 pointer-events-none
            // 所以點擊會先穿透到下方的按鈕，若沒點到按鈕，就會觸發這裡

            const randomPhoto = dropImg[Math.floor(Math.random() * dropImg.length)];
            const size = 10;

            const box = Bodies.rectangle(e.clientX, e.clientY, size, size, {
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: randomPhoto.path as string,
                        xScale: size / 512,
                        yScale: size / 512,
                    },
                },
            });

            World.add(world, box);
            startEngine();

            setTimeout(() => {
                // remove firtst
                World.remove(world, box);

                if (world.bodies.length <= 1) {
                    // delay a bit before disabling runner
                    setTimeout(() => {
                        if (world.bodies.length <= 1) {
                            stopEngine();
                        }
                    }, 100);
                }
            }, 4500);
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
            stopEngine();
            World.clear(world, false);
            Engine.clear(engine);
            render.canvas.remove();
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            // 關鍵修改：改為 pointer-events-none，讓滑鼠點擊穿透它
            className="fixed top-0 left-0 w-full h-full z-9999 pointer-events-none"
        />
    );
};

export default PieceDrop;