import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Turismo Blog
        </Link>

        {/* Menu simples desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Categorias
          </Link>
        </nav>

        {/* Ícone menu mobile (por enquanto só visual) */}
        <div className="md:hidden text-2xl font-bold">☰</div>
      </div>
    </header>
  );
}