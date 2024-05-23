"use client"

import { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { NeatGradient } from "@firecms/neat";


const NeatBackground = () => {

    const { theme } = useTheme();
    const canvasRef = useRef(null);

    useEffect(() => {
        const configDark = {
            "colors": [
                {
                    "color": "#040404",
                    "enabled": true
                },
                {
                    "color": "#070718",
                    "enabled": true
                },
                {
                    "color": "#051414",
                    "enabled": true
                },
                {
                    "color": "#080F1E",
                    "enabled": true
                },
                {
                    "color": "#f5e1e5",
                    "enabled": false
                }
            ],
            "speed": 2,
            "horizontalPressure": 4,
            "verticalPressure": 5,
            "waveFrequencyX": 2,
            "waveFrequencyY": 3,
            "waveAmplitude": 5,
            "shadows": 0,
            "highlights": 2,
            "colorBrightness": 1,
            "colorSaturation": 7,
            "wireframe": false,
            "colorBlending": 6,
            "backgroundColor": "#003FFF",
            "backgroundAlpha": 1,
            "resolution": 1
        }

        const configLight = {
            "colors": [
                {
                    "color": "#FFEEF0",
                    "enabled": true
                },
                {
                    "color": "#F9F3F6",
                    "enabled": true
                },
                {
                    "color": "#EFFFF9",
                    "enabled": true
                },
                {
                    "color": "#FBF0E7",
                    "enabled": true
                },
                {
                    "color": "#f5e1e5",
                    "enabled": false
                }
            ],
            "speed": 1,
            "horizontalPressure": 4,
            "verticalPressure": 5,
            "waveFrequencyX": 2,
            "waveFrequencyY": 3,
            "waveAmplitude": 5,
            "shadows": 0,
            "highlights": 2,
            "colorBrightness": 1,
            "colorSaturation": 7,
            "wireframe": false,
            "colorBlending": 6,
            "backgroundColor": "#003FFF",
            "backgroundAlpha": 1,
            "resolution": 1
        }

        if (!canvasRef.current) return;
        const neat = new NeatGradient({
            ref: canvasRef.current,
            ...(theme === 'dark' ? configDark : configLight)
        });

        return () => neat.destroy();
    }, [theme]);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }} />;
};
export default NeatBackground;