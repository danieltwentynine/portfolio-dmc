// src/pages/DockExample.tsx
import React from "react";
import styled from "styled-components";
import { Dock, DockItem } from "../components/Dock";
import home from "../icons/home.svg";
import projects from "../icons/projects.svg";
import mail from "../icons/mail.svg";
import socials from "../icons/socials.svg";

const DockContainer = styled.div`
  position: fixed;
  bottom: max(env(safe-area-inset-bottom), 20px);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0 max(16px, env(safe-area-inset-left));
  padding-right: max(16px, env(safe-area-inset-right));

  /* Responsive width */
  & > * {
    max-width: min(100%, 90vw);
  }
`;

interface DockItemData {
  icon: string;
  label: string;
  action: () => void;
}

const DockExample: React.FC = () => {
  const dockItems: DockItemData[] = [
    { icon: home, label: "Home", action: () => console.log("Home clicked") },
    { icon: projects, label: "Projects", action: () => console.log("Projects clicked") },
    { icon: mail, label: "E-mail", action: () => console.log("Contact clicked") },
    { icon: socials, label: "Socials", action: () => console.log("More clicked") },
  ];

  const handleDockItemClick = (label: string) => {
    console.log(`${label} clicked`);
  };

  return (
    <DockContainer>
      <Dock>
        {dockItems.map((item, index) => (
          <DockItem
            key={`main-${index}`}
            onClick={item.action}
            title={item.label}
          >
            <img src={item.icon} alt={item.label} width={24} height={24} />
          </DockItem>
        ))}
      </Dock>
    </DockContainer>
  );
};

export default DockExample;
