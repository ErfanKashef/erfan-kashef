"use client";
import { Badge } from "@/components/ui/badge";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandTelegram,
  IconMail,
} from "@tabler/icons-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";

const items = [
  {
    icon: IconBrandInstagram,
    link: "https://www.instagram.com/erfan_kasheff/",
    label: "Instagram",
  },
  {
    icon: IconBrandGithub,
    link: "https://github.com/ErfanKashef",
    label: "GitHub",
  },
  {
    icon: IconBrandTelegram,
    link: "https://t.me/erfan_kashef",
    label: "Telegram",
  },
  {
    icon: IconMail,
    link: "mailto:erfankashefdev@gmail.com",
    label: "Email",
  },
];

export default function MediaCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 18 });
  const floatY = useSpring(y, { stiffness: 80, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX / 25);
    y.set(-offsetY / 25);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-3 bg-glass-bg rounded-lg p-4 flex flex-col gap-3"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        y: floatY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Badge */}
      <div style={{ transform: "translateZ(40px)" }}>
        <Badge variant="outline" className="text-gray-300">
          media
        </Badge>
      </div>

      {/* Icons */}
      <div
        className="grid grid-cols-2 flex-1 gap-1"
        style={{ transform: "translateZ(30px)" }}
      >
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center rounded-lg bg-black/30 hover:bg-black/55 transition-all duration-200 ease-out"
            >
              {/* soft glow */}
              <span className="pointer-events-none absolute inset-0 rounded-lg bg-black/55 opacity-0 group-hover:opacity-100 transition" />

              <Icon
                size={42}
                className="text-white mt-2 transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:rotate-[-3deg]"
              />

              <span className="text-xs text-white/70 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
