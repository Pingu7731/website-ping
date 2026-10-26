import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { dropImg } from "../constants";

// how long a piece stays (simulation time, so it pauses when the tab is hidden)
const PIECE_LIFETIME = 4500;

const PieceDrop: React.FC = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const { Engine, Render, World, Bodies, Runner, Body, Events, Composite } = Matter;
        const engine = Engine.create();
        const world = engine.world;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio || 1, // sharp pieces on 2k / 4k / phone screens
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

        // very wide so it still cover the screen after the window get resized
        const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 10, 100000, 40, {
            isStatic: true,
            render: {
                visible: false // hide
            }
        });
        World.add(world, [ground]);

        const bornAt = new Map<Matter.Body, number>();

        // remove old pieces based on simulation time instead of setTimeout.
        // setTimeout keep running when you open a link in a new tab (but the animation doesnt),
        // so it used to stop the renderer and leave the piece frozen in the middle of falling
        Events.on(engine, "afterUpdate", () => {
            const now = engine.timing.timestamp;
            bornAt.forEach((time, body) => {
                if (now - time > PIECE_LIFETIME) {
                    World.remove(world, body);
                    bornAt.delete(body);
                }
            });

            if (bornAt.size === 0) {
                stopEngine();
                Render.world(render); // draw the empty world once so nothing stays on the canvas
            }
        });

        // 核心邏輯：將點擊事件綁定在 document 上
        const handleClick = (e: MouseEvent) => {
            // 這裡不需要額外的檢查，因為 div 是 pointer-events-none
            // 所以點擊會先穿透到下方的按鈕，若沒點到按鈕，就會觸發這裡

            const randomPhoto = dropImg[Math.floor(Math.random() * dropImg.length)];
            // follow the page scaling on 2k / 4k screens (see html font-size in index.css)
            const size = 10 * (parseFloat(getComputedStyle(document.documentElement).fontSize) / 16);

            const box = Bodies.rectangle(e.clientX, e.clientY, size, size, {
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: randomPhoto.path as string,
                        xScale: size / 128, // textures are 1/4 of the original size
                        yScale: size / 128,
                    },
                },
            });

            World.add(world, box);
            bornAt.set(box, engine.timing.timestamp);
            startEngine();
        };

        const handleResize = () => {
            Render.setSize(render, window.innerWidth, window.innerHeight);
            Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + 10 });
            if (!isRunning) Render.world(render);
        };

        window.addEventListener("click", handleClick);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("resize", handleResize);
            stopEngine();
            Events.off(engine, "afterUpdate");
            Composite.clear(world, false);
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
