const colors = {
  primaryLight: "#916DFD",
  primary: "#905DE3",
  primaryDark: "#5F25BE",
  white: "#ffffff",
  black: "#000000",
};

export type ColorName = keyof typeof colors;
export function getColor(name: ColorName): string {
  return colors[name];
}
