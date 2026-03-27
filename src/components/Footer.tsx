import { Facebook, Twitter, Instagram, Youtube, Mail, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">

        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2026 Dainik Nirman. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
  Privacy Policy
</Link>

<Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">
  Terms of Service
</Link>

<Link to="/return-refund-policy" className="hover:text-foreground transition-colors">
  Return and refund Policy
</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}