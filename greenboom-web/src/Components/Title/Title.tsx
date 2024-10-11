import React from "react";
type fontSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type colors = "gold" | "white" | "gray" | "black" | "indigo";
type spacing = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
type weights =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";
type heights =
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "none"
  | "tight"
  | "normal"
  | "relaxed"
  | "loose";
type fonts = "poppins" | "montserrat";

interface TitleProps {
  fontSize?: fontSizes;
  color?: colors;
  fontFamily?: fonts;
  children: React.ReactNode;
  weight?: weights;
  height?: heights;
  marginBottom?: string;
  marginTop?: string;
  letterSpace?: spacing;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  fontSize = "md",
  color = "gold",
  fontFamily = "montserrat",
  weight = "normal",
  height = "none",
  marginBottom = "mb-0",
  marginTop,
  letterSpace,
  children,
  className,
}) => {
  const customSizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };
  const customWeight = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };
  const customHeight = {
    "3": "leading-3",
    "4": "leading-4",
    "5": "leading-5",
    "6": "leading-6",
    "7": "leading-7",
    "8": "leading-8",
    "9": "leading-9",
    "10": "leading-10",
    none: "leading-none",
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };
  const customFonts = {
    montserrat: "font-montserrat",
    poppins: "font-poppins",
  };
  const customColors = {
    gray: "text-gray-900",
    gold: "text-primary-gold",
    white: "text-white",
    black: "text-black",
    indigo: "text-indigo-500",
  };
  const customSpacing = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest",
  };

  return (
    <div
      className={`${customSizes[fontSize]} ${className} ${customHeight[height]} ${marginTop} ${customWeight[weight]} ${marginBottom} ${customFonts[fontFamily]} ${customColors[color]} ${customSpacing[letterSpace]} `}
    >
      {children}
    </div>
  );
};

export default Title;
