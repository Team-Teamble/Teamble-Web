import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useUser } from "../../../utils/hook/auth";
import { useRouter } from "next/router";

export interface AppLayoutProps {
  children?: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const user = useUser();
  const router = useRouter();

  return (
    <StyledAppLayout>
      <Header user={user} currentPath={router.pathname} />
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
