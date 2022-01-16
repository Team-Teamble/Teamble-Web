import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useUser } from "../../../utils/hook/auth";

export interface AppLayoutProps {
  children?: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const user = useUser();

  return (
    <StyledAppLayout>
      <Header user={user} isSelected={false} />
      <ChildrenSlot>{children}</ChildrenSlot>
      <Footer />
    </StyledAppLayout>
  );
}

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ChildrenSlot = styled.div`
  flex-grow: 1;
`;
