"use client";

interface CoffeeBackgroundProps {
  backgroundColor?: string;
  iconColor?: string;
  opacity?: number;
  size?: number;
  spacing?: number;
}

export const CoffeeBackground = ({
  backgroundColor = "transparent",
  iconColor = "#7c6440",
  opacity = 5,
  size = 24,
  spacing = 300,
}: CoffeeBackgroundProps) => {
  const scale = size / 24;
  const iconSize = 24 * scale;

  const svgDataUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${spacing}' height='${spacing}' viewBox='0 0 ${spacing} ${spacing}'%3E%3Crect width='100%25' height='100%25' fill='${backgroundColor}'/%3E%3Cg transform='translate(${
    spacing / 2 - iconSize / 2
  }, ${
    spacing / 2 - iconSize / 2
  }) scale(${scale})' fill='none' stroke='${encodeURIComponent(
    iconColor
  )}' stroke-width='2'%3E%3Cpath d='M18 8h1a3 3 0 0 1 0 6h-1'/%3E%3Cpath d='M2 8h16v5a6 6 0 0 1-12 0V8z'/%3E%3Cline x1='6' y1='1' x2='6' y2='4'/%3E%3Cline x1='10' y1='1' x2='10' y2='4'/%3E%3Cline x1='14' y1='1' x2='14' y2='4'/%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: opacity / 100,
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundSize: `${spacing}px ${spacing}px`,
        backgroundRepeat: "repeat",
      }}
    />
  );
};
