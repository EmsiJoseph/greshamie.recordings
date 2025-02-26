import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export function SidebarToggle() {
  const { isOpen, setIsOpen } = useSidebarToggle();

  return (
    <div className="hidden lg:block absolute top-[12px] -right-[16px] z-20">
      <Button
        onClick={setIsOpen}
        className="rounded-md w-8 h-8"
        variant="outline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
}
