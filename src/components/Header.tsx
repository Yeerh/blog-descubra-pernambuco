import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LogIn, Home, Newspaper, Mail, Users } from "lucide-react";

export function Header() {
  // Removida a variável categories, pois não está mais sendo usada

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logotipo.png"
              alt="Descubra Pernambuco"
              className="h-20 w-auto object-contain drop-shadow-md transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Menu desktop à direita */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Início
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Todos os Posts
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/colunistas" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Colunistas
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Contato
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/login">
                  <Button variant="outline" className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Login Admin
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger mobile */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-white">
            <div className="flex flex-col h-full pt-8 px-6">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-heading">Descubra Pernambuco</h2>
              </div>

              <nav className="flex-1 space-y-6">
                <Link to="/" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors">
                  <Home className="h-5 w-5" />
                  Início
                </Link>
                <Link to="/blog" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors">
                  <Newspaper className="h-5 w-5" />
                  Todos os Posts
                </Link>
                <Link to="/colunistas" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors">
                  <Users className="h-5 w-5" />
                  Colunistas
                </Link>
                <Link to="/contact" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  Contato
                </Link>

                <div className="pt-6">
                  <Link to="/login" className="block">
                    <Button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-lg py-6">
                      <LogIn className="h-5 w-5" />
                      Login Admin
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}