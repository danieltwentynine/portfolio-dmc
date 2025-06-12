import React, { useEffect } from "react";
import {
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "framer-motion";

import { CircularTextContainer } from "./styles";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers" | "reverse";
  className?: string;
  size?: number;
  fontSize?: number;
  color?: string;
  direction?: "clockwise" | "counterclockwise";
}

const getRotationTransition = (
  duration: number,
  from: number,
  direction: "clockwise" | "counterclockwise" = "clockwise",
  loop: boolean = true
) => ({
  from,
  to: direction === "clockwise" ? from + 360 : from - 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (
  duration: number, 
  from: number, 
  direction: "clockwise" | "counterclockwise" = "clockwise"
) => ({
  rotate: getRotationTransition(duration, from, direction),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  size = 200,
  fontSize = 24,
  color = "#fff",
  direction = "clockwise",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: 1,
      transition: getTransition(spinDuration, start, direction),
    });
  }, [spinDuration, text, onHover, controls, direction]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;
    let newDirection = direction;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start, direction);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start, direction);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start, direction);
        scaleVal = 0.8;
        break;
      case "reverse":
        newDirection = direction === "clockwise" ? "counterclockwise" : "clockwise";
        transitionConfig = getTransition(spinDuration, start, newDirection);
        break;
      default:
        transitionConfig = getTransition(spinDuration, start, direction);
    }

    controls.start({
      rotate: newDirection === "clockwise" ? start + 360 : start - 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: direction === "clockwise" ? start + 360 : start - 360,
      scale: 1,
      transition: getTransition(spinDuration, start, direction),
    });
  };

  return (
    <CircularTextContainer
      className={`circular-text ${className}`}
      style={{ 
        rotate: rotation,
        width: size,
        height: size,
      }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      $fontSize={fontSize}
      $color={color}
    >
      {letters.map((letter, i) => {
        // Improved positioning calculation for a perfect circle
        const angle = (360 / letters.length) * i;
        const radius = size / 2;
        
        // Position each letter on the circle's perimeter
        const transform = `rotateZ(${angle}deg) translateY(-${radius - fontSize/2}px)`;

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </CircularTextContainer>
  );
};

export default CircularText;