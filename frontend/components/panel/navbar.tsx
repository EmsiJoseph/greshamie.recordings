import { ModeToggle } from "@/components/common/mode-toggle";
import { UserNav } from "@/components/panel/user-nav";
import Logo from "@/public/logo.png";
import DarkLogo from "@/public/darklogo.png";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useState } from "react";

export function Navbar() {
  const { setIsOpen } = useSidebarToggle();
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center justify-between">
        
        {/* Left side - Sidebar Toggle (Only for Mobile) and Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Sidebar Toggle Button */}
          <button 
            className="lg:hidden p-2 rounded-md"
            onClick={setIsOpen}
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
          
            {/* Logo - Only show when search is not open */}
            {!isSearchOpen && (
            <Image src={Logo} alt="Wizard Logo" className="dark:hidden" />
            )}
            {!isSearchOpen && (
            <Image src={DarkLogo} alt="Wizard Logo" className="hidden dark:block" />
            )}
        </div>

        {/* Right side - Move Company Name Inside UserNav */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          {/* Gresham House Recording inside UserNav section */}
            <span className="font-bold whitespace-nowrap hidden sm:block">
            GRESHAM HOUSE RECORDINGS
            </span>
          <UserNav />
        </div>
      </div>

      <div className="border-t border-white dark:border-white" />
    </header>
  );
}
