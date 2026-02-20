"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

interface WorldGlobeProps {
    showLabel?: boolean;
}

export function WorldGlobe({ showLabel = true }: WorldGlobeProps = {}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let width = 0;

        if (!canvasRef.current) return;

        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };

        window.addEventListener('resize', onResize);
        onResize(); // Initial measurement

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 0,
            diffuse: 2.5,
            mapSamples: 8000,
            mapBrightness: 8,
            scale: 1.05, // Slightly gentler scale to avoid edge clipping on mobile
            baseColor: [0.4, 0.4, 0.45],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [22.5431, 114.0579], size: 0.1 }, // Shenzhen
                { location: [34.0522, -118.2437], size: 0.05 }, // LA
                { location: [40.7128, -74.006], size: 0.05 }, // NY
                { location: [51.5074, -0.1278], size: 0.05 }, // London
                { location: [51.9244, 4.4777], size: 0.06 }, // Rotterdam
                { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
                { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
                { location: [-23.5505, -46.6333], size: 0.05 }, // Sao Paulo
                { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
                { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
                { location: [50.1109, 8.6821], size: 0.06 }, // Frankfurt
            ],
            onRender: (state) => {
                // Ensure internal resolution constantly matches the DOM width
                state.width = width * 2;
                state.height = width * 2;
                state.phi = phi;
                phi += 0.003;
            },
        });

        return () => {
            window.removeEventListener('resize', onResize);
            globe.destroy();
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full max-w-2xl mx-auto pb-12 overflow-hidden sm:overflow-visible">
            {/* Decorative Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full border border-slate-300/40 animate-[spin_20s_linear_infinite] border-dashed pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] rounded-full border border-slate-200/50 animate-[spin_30s_linear_reverse_infinite] border-dotted pointer-events-none" />

            {/* Glowing background behind globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-ctr-blue/10 blur-[80px] rounded-full" />

            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 600,
                    aspectRatio: 1,
                    position: "relative",
                    zIndex: 10
                }}
            />

            {/* Live Indicator Pill */}
            {showLabel && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 z-20 flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ctr-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ctr-blue"></span>
                    </span>
                    <p className="text-xs text-slate-600 font-bold tracking-widest uppercase">Live Logistics Network</p>
                </div>
            )}
        </div>
    );
}
