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
import { Menu } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-28 items-center justify-between px-4">
        {/* Logo grande e centralizada */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            <img
              src="/logo.png" // Coloque sua logo em public/logo.png
              alt="Descubra Pernambuco"
              className="h-20 w-auto md:h-24 lg:h-28 object-contain drop-shadow-md transition-transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Menu Desktop (à direita) */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Início
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/blog"
                  className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Todos os Posts
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-125 lg:w-150 grid-cols-2 bg-white shadow-lg rounded-lg">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <NavigationMenuLink asChild>
                        <a
                          href={cat.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
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
          </NavigationMenuList>
        </NavigationMenu>

        {/* Navegação lateral mobile (hamburger à direita) */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="z-10">
              <Menu className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-8 mt-12">
              <Link to="/" className="text-2xl font-bold text-primary text-center">
                Descubra Pernambuco
              </Link>
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                  Início
                </Link>
                <Link to="/blog" className="text-lg font-medium hover:text-primary transition-colors">
                  Todos os Posts
                </Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                  Contato
                </Link>
                <div className="space-y-3 pt-6 border-t">
                  <p className="text-sm font-semibold uppercase text-muted-foreground">Categorias</p>
                  {categories.map((cat) => (
                    <a
                      key={cat.name}
                      href={cat.href}
                      className="block text-base hover:text-primary transition-colors"
                    >
                      {cat.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}