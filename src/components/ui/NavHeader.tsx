"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface NavHeaderProps {
  links: {
    path: string;
    label: string;
  }[];
}

function NavHeader({ links }: NavHeaderProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const location = useLocation();

  return (
    <ul
      className="relative mx-auto flex w-fit items-center rounded-full border-2 border-black bg-white p-1"
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
        setHoveredIndex(null);
      }}
    >
      {links.map((link, index) => (
        <Tab 
          key={index} 
          path={link.path} 
          setPosition={setPosition}
          isActive={location.pathname === link.path}
          index={index}
          isHovered={hoveredIndex === index}
          setHoveredIndex={setHoveredIndex}
        >
          {link.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  path,
  setPosition,
  isActive,
  index,
  isHovered,
  setHoveredIndex
}: {
  children: React.ReactNode;
  path: string;
  setPosition: any;
  isActive: boolean;
  index: number;
  isHovered: boolean;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  React.useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft,
      });
      setHoveredIndex(index);
    }
  }, [isActive, setPosition, index, setHoveredIndex]);
  
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
        setHoveredIndex(index);
      }}
      className="relative z-10"
    >
      <Link
        to={path}
        className={`block cursor-pointer px-3 py-1.5 text-xs font-medium uppercase md:px-5 md:py-3 md:text-base ${
          isHovered ? 'text-white' : 'text-black'
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    />
  );
};

export default NavHeader;
