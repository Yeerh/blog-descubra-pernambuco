import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LogIn, Home, Newspaper, Mail, Users, FolderOpen } from "lucide-react";

export function Header() {
  const categories = [
    { name: "Praias", href: "/blog?categoria=praias" },
    { name: "Recife", href: "/blog?categoria=recife" },
    { name: "Olinda", href: "/blog?categoria=olinda" },
    { name: "Fernando de Noronha", href: "/blog?categoria=noronha" },
    { name: "Carnaval & Cultura", href: "/blog?categoria=carnaval-cultura" },
    { name: "Interior", href: "/blog?categoria=interior" },
    { name: "Gastronomia", href: "/blog?categoria=gastronomia" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md text-gray-900 shadow-md border-b border-gray-200 lg:bg-background/70 lg:text-gray-900">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Pernambuco em Foco"
              className="h-20 w-auto object-contain drop-shadow-md transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Menu desktop */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 text-sm font-medium hover:text-[#856851] transition-colors">
                  Início
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className="px-4 py-2 text-sm font-medium hover:text-[#856851] transition-colors">
                  Todos os Posts
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/colunistas" className="px-4 py-2 text-sm font-medium hover:text-[#856851] transition-colors">
                  Colunistas
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="px-4 py-2 text-sm font-medium hover:text-[#856851] transition-colors">
                  Contato
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-900 hover:text-[#856851]">
                Categorias
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-125 lg:w-150 grid-cols-2 bg-white text-gray-900 shadow-lg rounded-lg">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <NavigationMenuLink asChild>
                        <a
                          href={cat.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#856851]/10 hover:text-[#856851]"
                        >
                          <div className="text-sm font-medium">{cat.name}</div>
                          <p className="text-sm text-muted-foreground">
                            Explore {cat.name.toLowerCase()} em Pernambuco
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/login">
                  <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-[#856851] hover:text-white">
                    <LogIn className="h-4 w-4 mr-2" />
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
            <Button variant="ghost" size="icon" className="text-gray-900 hover:bg-gray-200/50">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-[#856851] text-white">
            <div className="flex flex-col h-full pt-8 px-6">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold">Pernambuco em Foco</h2>
              </div>

              <nav className="flex-1 space-y-6">
                <Link to="/" className="flex items-center gap-4 text-lg font-medium hover:text-white/80 transition-colors">
                  <Home className="h-5 w-5" />
                  Início
                </Link>
                <Link to="/blog" className="flex items-center gap-4 text-lg font-medium hover:text-white/80 transition-colors">
                  <Newspaper className="h-5 w-5" />
                  Todos os Posts
                </Link>
                <Link to="/colunistas" className="flex items-center gap-4 text-lg font-medium hover:text-white/80 transition-colors">
                  <Users className="h-5 w-5" />
                  Colunistas
                </Link>
                <Link to="/contact" className="flex items-center gap-4 text-lg font-medium hover:text-white/80 transition-colors">
                  <Mail className="h-5 w-5" />
                  Contato
                </Link>

                <div className="pt-6">
                  <Link to="/login" className="block">
                    <Button className="w-full flex items-center justify-center gap-3 bg-white text-[#856851] hover:bg-white/90 text-lg py-6">
                      <LogIn className="h-5 w-5" />
                      Login Admin
                    </Button>
                  </Link>
                </div>

                <div className="pt-8 border-t border-white/30">
                  <p className="text-sm font-semibold uppercase mb-4 flex items-center gap-2">
                    <FolderOpen className="h-4 w-4" />
                    Categorias
                  </p>
                  <div className="space-y-4">
                    {categories.map((cat) => (
                      <a
                        key={cat.name}
                        href={cat.href}
                        className="flex items-center gap-3 text-base hover:text-white/80 transition-colors"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                        {cat.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}