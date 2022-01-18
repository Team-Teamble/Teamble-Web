import { ReactElement, ReactNode } from "react";

interface WithLayout {
  layout?: (props: { children: ReactNode }) => ReactElement;
}

type ComponentWithChildren = (props: { children: ReactNode }) => ReactElement;

export function setLayout<T extends (...args: any[]) => ReactNode>(component: T, layout: ComponentWithChildren) {
  (component as WithLayout).layout = layout;
}

export function getLayout(component: unknown): ComponentWithChildren | null {
  return (component as WithLayout).layout ?? null;
}
