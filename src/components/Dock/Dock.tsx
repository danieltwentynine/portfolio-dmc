// src/components/dock/Dock.tsx
import React from "react";
import { StyledDock, DockContainer } from "./Dock.styles";
import { DockProps } from "./types";

const Dock: React.FC<DockProps> = ({
  children,
  className,
  position = "bottom",
  backgroundColor,
  borderColor,
  ...props
}) => {

  return (
    <DockContainer>
      <StyledDock
        className={className}
        $position={position}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        {...props}
      >
        {children}
      </StyledDock>
    </DockContainer>
  );
};

export default Dock;
