"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                const playPromise = audioRef.current.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            console.log("✅ Audio is playing");
                        })
                        .catch((err) => {
                            console.warn("❌ Autoplay blocked:", err.message);
                        });
                }
            }
        };

        // Some browsers require interaction before playing audio
        window.addEventListener("click", playAudio);

        return () => window.removeEventListener("click", playAudio);
    }, []);

    return (
        <audio ref={audioRef} loop>
            <source src="/sounds/m3%20(1).mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
}
