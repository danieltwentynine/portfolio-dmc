// src/components/dock/types.ts
import { ReactNode, MouseEvent } from "react";

export interface DockItemProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  title?: string;
  className?: string;
  disabled?: boolean;
}

export interface DockProps {
  children: ReactNode;
  className?: string;
  position?: "top" | "center" | "bottom";
  backgroundColor?: string;
  borderColor?: string;
}

export interface StyledDockItemProps {
  $disabled?: boolean;
}

export interface StyledDockProps {
  $position: "top" | "center" | "bottom";
  $backgroundColor?: string;
  $borderColor?: string;
}
