"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "motion/react";

const friends = [
  {
    id: 1,
    name: "Mohammad Reza Badry",
    role: "Frontend Team Lead",
    avatar: "/img/agha badry.jpg",
  },
  {
    id: 2,
    name: "Ali Kashef",
    role: "UI/UX Designer",
    avatar: "/img/alikashef.jpg",
  },
  {
    id: 3,
    name: "AmirHussein Khata Bakhsh",
    role: "Full Stack Developer",
    avatar: "/img/amirhossein.jpg",
  },
  {
    id: 4,
    name: "Poriya Kazemirad",
    role: "Frontend Developer",
    avatar: "/img/poriya kazemirad.jpeg",
  },
];

const Friends = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const [width, setWidth] = useState<number | null>(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  const getOffset = () => {
    if (width !== null) {
      if (width < 640) return 60;
      if (width < 1024) return 40;
    }
    return 50;
  };

  const getScale = () => (width !== null && width < 640 ? 1.3 : 1.5);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const AVATAR_SIZE = 80;
  const groupWidth = (friends.length - 1) * getOffset() + AVATAR_SIZE;
  const isMobile = width !== null && width < 640;

  return (
    <div className="md:col-span-2 md:row-span-2 md:col-start-5 bg-glass-bg rounded-lg p-5 flex flex-col gap-4">
      <Badge variant="outline" className="text-gray-300">
        Friends
      </Badge>
      <div className="relative h-28">
        {/* Center the inner group on mobile by making it absolute and translating to 50% */}
        <div
          className="h-full"
          style={
            isMobile
              ? {
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: groupWidth,
                }
              : { position: "relative" }
          }
        >
          {friends.map((friend, index) => {
            const isHovered = friend.id === hoveredId;

            return (
              <motion.div
                key={friend.id}
                className="absolute top-0"
                style={{
                  left: index * getOffset(),
                  zIndex: isHovered ? 50 : index,
                }}
                onMouseEnter={() => setHoveredId(friend.id)}
                onMouseLeave={() => setHoveredId(null)}
                animate={{
                  scale: isHovered ? getScale() : 1,
                  x: !isHovered && hoveredId !== null ? -getOffset() / 2 : 0,
                  y: 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Avatar className="h-18 w-18 border-2 border-gray-600">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>
                    {friend.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-black/80 text-white text-xs rounded-md px-3 py-2 whitespace-nowrap"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-medium">{friend.name}</div>
                      <div className="text-[10px] opacity-80">
                        {friend.role}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Friends;
