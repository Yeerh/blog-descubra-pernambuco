import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Colunists() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-heading mb-16 text-center font-['Noto_Serif']">
  Nossos Colunistas
</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Conheça as vozes que trazem as melhores histórias, dicas e notícias de Pernambuco
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* JPCOBIROSCA - Colunista ativo */}
          <Link to="/colunistas/jpcobirosca" className="block">
            <Card className="hover:shadow-2xl transition-all duration-300 h-full flex flex-col cursor-pointer">
              <CardHeader className="text-center">
                <img
                  src="https://scontent.frec15-1.fna.fbcdn.net/v/t39.30808-6/598731983_1200438608857883_4958011312354793659_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=018SQd6ar-UQ7kNvwGyNvpJ&_nc_oc=AdkXonpTqTupZkllc2jM8wFzvW2V52TzzZu1j8ccef92gI8FLzroGZ9r9p_N08jUx3U&_nc_zt=23&_nc_ht=scontent.frec15-1.fna&_nc_gid=hu1bfRYVdoCdvAYZ5wPYvA&oh=00_Afnkpq559Gx0MMEdmo7SHfmPAwyF9T24EEHvbS4O_kRFlw&oe=6947ADD6" // Substitua pela foto real do JPCOBIROSCA
                  alt="JPCOBIROSCA"
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
                />
                <CardTitle className="text-2xl">JPCOBIROSCA</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-center">
                <CardDescription className="text-base mb-6 line-clamp-3">
                  Jornalista apaixonado por Pernambuco, especialista em notícias locais, cultura e ações sociais. 
                  Fundador do Pernambuco em Foco.
                </CardDescription>
                <div className="flex justify-center gap-6 mb-6">
                  <a href="https://facebook.com/jpcobiroscando" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://instagram.com/jpcbirosca_pe" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://wa.me/5581999999999" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-primary font-medium hover:underline">
                  Ver publicações →
                </p>
              </CardContent>
            </Card>
          </Link>

          {/* Mariana Oliveira - Vaga disponível */}
          <Card className="h-full flex flex-col border-dashed border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors cursor-not-allowed">
            <CardHeader className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-6 bg-primary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">+</span>
              </div>
              <CardTitle className="text-2xl text-primary"></CardTitle>
            </CardHeader>
            <CardContent className="flex-1 text-center flex flex-col justify-center">
              <p className="text-2xl font-bold text-heading mb-4">
                Se torne um Colunista
              </p>
              <p className="text-lg text-muted-foreground">
                Vaga disponível
              </p>
            </CardContent>
          </Card>

          {/* João Santos - Vaga disponível */}
          <Card className="h-full flex flex-col border-dashed border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors cursor-not-allowed">
            <CardHeader className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-6 bg-primary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">+</span>
              </div>
              <CardTitle className="text-2xl text-primary"></CardTitle>
            </CardHeader>
            <CardContent className="flex-1 text-center flex flex-col justify-center">
              <p className="text-2xl font-bold text-heading mb-4">
                Se torne um Colunista
              </p>
              <p className="text-lg text-muted-foreground">
                Vaga disponível
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}