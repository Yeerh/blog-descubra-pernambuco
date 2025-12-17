import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#b2b2b2] py-12 mt-20">
      <div className="container mx-auto px-4">
        {/* Logo centralizada */}
        <div className="text-center mb-10">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Descubra Pernambuco"
              className="h-28 w-auto object-contain mx-auto drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Links rápidos centralizados com linha abaixo */}
        <div className="text-center">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg">
              Home
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg">
              Contato
            </Link>
            <Link to="/colunistas" className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg">
              Colunistas
            </Link>
            <Link to="/blog?categoria=" className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg">
              Categorias
            </Link>
            <Link to="/blog" className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg">
              Todos os Posts
            </Link>
          </nav>

          {/* Linha fina abaixo dos links — azul sutil */}
          <div className="w-full max-w-md mx-auto border-t border-blue-600/30"></div>
        </div>

        {/* Copyright discreto — azul suave */}
        <div className="text-center mt-10">
          <p className="text-blue-600/70 text-sm">
            &copy; {new Date().getFullYear()} Descubra Pernambuco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}