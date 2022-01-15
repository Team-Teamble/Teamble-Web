import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export interface AppLayoutProps {
  children?: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const mockUser = { id: 1, name: "김팀블", photo: "photourl", projectId: 2 };
  function handleClick() {
    console.log("test");
  }
  return (
    <StyledAppLayout>
      <Header isLogin={false} user={mockUser} isSelected={false} onClick={() => handleClick()} />
      {children}
      <Footer />
    </StyledAppLayout>
  );
}

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
