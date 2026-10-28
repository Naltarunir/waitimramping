"use client";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { DURATION, EASE } from "@components/Theme/motion";

interface RevealProps {
    children: React.ReactNode;
    // stagger offset in ms
    delay?: number;
    sx?: SxProps<Theme>;
}

// heavy fade up as an element enters the viewport (translate 64px, blur 12px, 800ms)
// uses IntersectionObserver, never a scroll listener
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, sx }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if (typeof IntersectionObserver === "undefined") {
            setShown(true);
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Box
            ref={ref}
            className="reveal"
            sx={[
                {
                    opacity: shown ? 1 : 0,
                    transform: shown ? "translateY(0)" : "translateY(64px)",
                    filter: shown ? "blur(0)" : "blur(12px)",
                    transition: `opacity ${DURATION.reveal} ${EASE} ${delay}ms, transform ${DURATION.reveal} ${EASE} ${delay}ms, filter ${DURATION.reveal} ${EASE} ${delay}ms`,
                    willChange: shown ? "auto" : "opacity, transform, filter",
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </Box>
    );
};

export default Reveal;
