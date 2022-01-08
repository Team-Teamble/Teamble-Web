export const teambleColors = {
  purple: "#916DFD",
  deepPurple: "#905DE3",
  darkPurple: "#5F25BE",
  lightGray: "#F6F6F6",
  gray: "#E1E1E1",
  deepGray: "#9D9D9D",
  darkGray: "#8E8E8E",
  white: "#ffffff",
  black: "#000000",
};

export type ColorName = keyof typeof teambleColors;
export function getColor(name: ColorName): string {
  return teambleColors[name];
}
