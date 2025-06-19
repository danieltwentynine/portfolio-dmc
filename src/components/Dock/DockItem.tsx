// src/components/dock/DockItem.tsx
import React, { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { StyledDockItem, DockItemContainer } from "./DockItem.styles";
import { DockItemProps } from "./types";

const DockItem: React.FC<DockItemProps> = ({
  children,
  onClick,
  title,
  className,
  disabled = false,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      distance.set(e.clientX - centerX);
    }
  };

  const handleMouseLeave = () => {
    distance.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <DockItemContainer>
      <StyledDockItem
        ref={ref}
        style={{ width }}
        whileHover={disabled ? {} : { scale: 1.1 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        title={title}
        className={className}
        $disabled={disabled}
        {...props}
      >
        {children}
      </StyledDockItem>
    </DockItemContainer>
  );
};

export default DockItem;
