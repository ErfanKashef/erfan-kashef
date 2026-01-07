"use client";
import AnimatedCursor from "react-animated-cursor";

const AnimatedCursorAny = AnimatedCursor as any;

export default function AnimatedCursorClient() {
  return (
    <AnimatedCursorAny
      hasBlendMode={true}
      color="205, 218, 234"
      innerSize={8}
      outerSize={5}
    />
  );
}
