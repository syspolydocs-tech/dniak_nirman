import { Search, ShoppingCart, User, Menu, BookOpen, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "../log/logo.png";

interface HeaderProps {
  cartItemsCount?: number;
  onMenuToggle?: () => void;
}

export function Header({ cartItemsCount = 0, onMenuToggle }: HeaderProps) {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b">

  {/* 🔹 TOP ROW → Logo + Name */}
  <div className="flex justify-center items-center py-3 border-b">
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
      <span className="font-bold text-xl">Dainik Nirman</span>
    </Link>
  </div>

  {/* 🔹 BOTTOM ROW → Navbar */}
  <div className="container mx-auto px-4 h-14 flex items-center justify-between">

    {/* Left - Menu + Nav */}
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={onMenuToggle}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <nav className="hidden md:flex items-center gap-6">
        <Link 
          to="/" 
          className="rounded-xl px-3 py-1 hover:text-primary hover:bg-gray-100 transition"
        >
          Home
        </Link>
        <Link 
          to="/books" 
          className="rounded-xl px-3 py-1 hover:text-primary hover:bg-gray-100 transition"
        >
          Book
        </Link>
       
      </nav>
    </div>

    {/* Center - Search */}
    <div className="hidden sm:flex relative max-w-sm flex-1 mx-4">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search books..." className="pl-10" />
    </div>

    {/* Right - Actions */}
    <div className="flex items-center gap-2">

      <Link to="/cart">
        <Button variant="ghost" size="sm" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItemsCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {cartItemsCount}
            </Badge>
          )}
        </Button>
      </Link>

      {/* User */}
      {isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              {user?.name || "My Account"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Orders</DropdownMenuItem>
            <DropdownMenuItem>Wishlist</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
        </Link>
      )}

    </div>
  </div>
</header>
  );
}