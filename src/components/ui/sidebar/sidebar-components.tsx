
import { cn } from "@/lib/utils";
import { Link, LinkProps } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSidebar } from "./sidebar-context";

// Sidebar component
export const Sidebar = ({
  children,
  open,
  setOpen,
  animate = true,
  className,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
  className?: string;
}) => {
  const [openState, setOpenState] = useState(true); // Default to open
  const actualOpen = open !== undefined ? open : openState;
  const actualSetOpen = setOpen !== undefined ? setOpen : setOpenState;
  
  return (
    <SidebarProvider open={actualOpen} setOpen={actualSetOpen} animate={animate}>
      <motion.div 
        className={cn(className, "overflow-hidden")}
        animate={{
          width: animate ? (actualOpen ? "100%" : "60px") : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onMouseEnter={() => actualSetOpen(true)}
        onMouseLeave={() => actualSetOpen(false)}
      >
        {children}
      </motion.div>
    </SidebarProvider>
  );
};

// SidebarBody component
export const SidebarBody = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <DesktopSidebar className={className}>
        {children}
      </DesktopSidebar>
      <MobileSidebar className={className}>
        {children}
      </MobileSidebar>
    </>
  );
};

// DesktopSidebar component
export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
}) => {
  const { open, animate } = useSidebar();
  return (
    <div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col w-full flex-shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// SidebarLink component
export const SidebarLink = ({
  link,
  className,
  isActive,
  completed,
  ...props
}: {
  link: {
    label: string;
    href: string;
    icon: React.JSX.Element | React.ReactNode;
  };
  className?: string;
  isActive?: boolean;
  completed?: boolean;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      to={link.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2 relative",
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
          width: animate ? (open ? "auto" : 0) : "auto",
        }}
        className="text-neutral-100 dark:text-white text-base font-medium group-hover/sidebar:translate-x-1 transition-all duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
