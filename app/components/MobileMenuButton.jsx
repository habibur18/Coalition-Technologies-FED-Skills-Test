import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function MobileMenuButton({ toggleSidebar }) {
  return (
    <div className="flex menu-icon">
      <Button variant="ghost" onClick={toggleSidebar}>
        <Menu size={24} />
      </Button>
    </div>
  );
}
