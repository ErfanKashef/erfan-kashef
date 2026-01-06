"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { useMotionValue, useSpring, motion } from "motion/react";

export default function AboutMeCard() {
  const [popupVisible, setPopupVisible] = useState(false);

  const previewText = `Hi, I’m Erfan – a front-end developer passionate about building beautiful and high-performance web interfaces using Next.js, TypeScript, and Tailwind CSS. I love working with a component-based structure and crafting clean, scalable code.`;

  const fullText = `I’m proficient in JavaScript and currently expanding my skills in React, using tools like Redux, TipTap, React Hook Form, and Zod. I enjoy bringing designs to life with smooth animations using Framer Motion and modern UI libraries like shadcn/ui.

With a strong interest in UI/UX design, I pay great attention to detail and responsiveness. I’m comfortable working with Figma and always aim to create user-friendly and visually appealing experiences across all devices.

Lately, I’ve been working on interactive projects such as restaurant menus, product pages, and shopping carts – always with a focus on clean structure, user experience, and performance.`;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 18 });
  const floatY = useSpring(y, { stiffness: 80, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX / 25); // چپ راست
    y.set(-offsetY / 25); // بالا پایین
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  // Shadow styles
  const baseShadow = "0 8px 20px rgba(0,0,0,0.18)";
  const hoverShadow = "0 12px 28px rgba(0,0,0,0.25)";

  return (
    <>
      <motion.div
        role="button"
        tabIndex={0}
        aria-label="Open About"
        onClick={() => setPopupVisible(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setPopupVisible(true);
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        initial={{ boxShadow: baseShadow }}
        whileHover={{
          boxShadow: hoverShadow,
          scale: 1.02,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{
          rotateX,
          rotateY,
          y: floatY,
          transformStyle: "preserve-3d",
        }}
        className="col-span-1 md:col-span-4 md:row-span-2 bg-glass-bg p-5 rounded-lg flex flex-col gap-4 cursor-pointer "
      >
        <Badge variant="outline" className="text-gray-300">
          About Me
        </Badge>

        <p className="text-gray-300 text-lg font-bold">
          {previewText}
          <span className="text-blue-400 ml-2">Read more</span>
        </p>
      </motion.div>

      {popupVisible && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setPopupVisible(false)}
        >
          <div
            className="relative bg-glass-bg text-white max-w-3xl w-full p-6 rounded-lg overflow-y-auto max-h-[90dvh]"
            onClick={(e) => e.stopPropagation()}
            style={{ WebkitOverflowScrolling: "touch" }}
            role="dialog"
            aria-modal="true"
            aria-label="About me"
          >
            <div className="whitespace-pre-wrap">{fullText}</div>
            <button
              aria-label="Close"
              className="absolute top-4 right-4 p-3 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => setPopupVisible(false)}
            >
              <IconX className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
