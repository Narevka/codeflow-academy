import { cn } from "@/lib/utils";
import { Link, LinkProps } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSidebar } from "./sidebar-context";
import { SidebarProvider } from "./sidebar-provider";
import { MobileSidebar } from "./mobile-sidebar";

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
          width: animate ? (actualOpen ? "280px" : "60px") : "280px",
        }}
        transition={{ 
          duration: 0.25, 
          ease: [0.25, 0.1, 0.25, 1], 
          staggerChildren: 0.05 
        }}
        style={{ willChange: "width" }}
        onMouseEnter={() => actualSetOpen(true)}
        onMouseLeave={() => actualSetOpen(false)}
      >
        <style>
          {`
            /* Neutral base styles for both active and inactive lessons */
            .inactive-lesson, .active-lesson {
              position: relative;
              padding-left: 10px;
              transition: all 0.2s ease;
            }
            
            /* Basic inactive lesson style */
            .inactive-lesson {
              background-color: transparent;
            }
            
            /* Active lesson styling for both states */
            .active-lesson {
              background-color: rgba(207, 14, 129, 0.1);
              position: relative;
            }
            
            /* Add magenta indicator for active lesson */
            .active-lesson::after {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              width: 4px;
              background-color: #cf0e81;
            }
            
            /* Expanded view - magenta indicator on left */
            [data-sidebar-collapsed="false"] .active-lesson::after {
              left: 0;
            }
            
            /* Collapsed view - magenta indicator on right */
            [data-sidebar-collapsed="true"] .active-lesson::after {
              right: 0;
            }
            
            /* Give numbers more space in expanded view */
            [data-sidebar-collapsed="false"] .active-lesson > div:first-child,
            [data-sidebar-collapsed="false"] .inactive-lesson > div:first-child {
              margin-left: 8px;
            }
            
            /* Position text with more space to avoid overlapping number in expanded view */
            [data-sidebar-collapsed="false"] .sidebar-link-text {
              margin-left: 16px !important;
            }
          `}
        </style>
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
      data-sidebar-collapsed={!open}
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
          opacity: animate ? (open ? 1 : 0) : 1,
          visibility: animate ? (open ? "visible" : "hidden") : "visible",
        }}
        transition={{ 
          duration: 0.2,
          ease: "easeOut" 
        }}
        style={{ 
          transformOrigin: "left center",
          willChange: "transform, opacity",
          pointerEvents: !open && animate ? "none" : "auto"
        }}
        className="text-gray-800 dark:text-white text-base font-medium group-hover/sidebar:translate-x-1 transition-all duration-150 whitespace-nowrap overflow-hidden !p-0 !m-0 sidebar-link-text"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
