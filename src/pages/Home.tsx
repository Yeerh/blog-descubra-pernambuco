import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { PostCard } from "@/components/PostCards";
import { Post } from "@/types";
import { PrefeituraCarousel } from "@/components/components/PrefeituraCarousel";
import { Link } from "react-router-dom";

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("date", { ascending: false });

      if (error) {
        console.error("Erro ao carregar notícias:", error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const featuredPosts = posts.filter((post) => post.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-heading">Carregando notícias...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero com parallax suave */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 -z-10 transform scale-110">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videio-hero.mp4" type="video/mp4" />
            <img
              src="https://turismo.b-cdn.net/wp-content/uploads/2013/01/Praia-de-Muro-Alto-em-Porto-de-Galinhas-PE.jpg"
              alt="Descubra Pernambuco"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/20" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <img
            src="/logo.png"
            alt="Descubra Pernambuco"
            className="h-40 md:h-56 lg:h-50 w-auto object-contain drop-shadow-2xl mb-8"
          />
       
        </div>
      </section>

      {/* Destaques do Momento */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-heading mb-16 text-center font-['Noto_Serif']">
          Destaques do Momento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="col-span-full text-center text-muted-foreground text-xl">
              Nenhuma notícia em destaque no momento.
            </p>
          )}
        </div>
      </section>

      {/* Carousel da Prefeitura */}
      <PrefeituraCarousel />

      {/* Destinos em Destaque */}
      <section className="my-24 bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-12 text-center font-['Noto_Serif']">
            Destinos em Destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/blog?categoria=praias" className="group block relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://viagemeturismo.abril.com.br/wp-content/uploads/2024/03/Portal-da-CopabarraME.jpg?quality=70&strip=info&w=1280&h=720&crop=1"
                alt="Boa Viagem"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold drop-shadow-2xl">Boa Viagem</h3>
                <p className="mt-2 text-lg opacity-90">A praia mais famosa do Recife</p>
              </div>
            </Link>

            <Link to="/blog?categoria=praias" className="group block relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2d/53/59/praia-do-muro-alto.jpg?w=500&h=500&s=1"
                alt="Porto de Galinhas"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold drop-shadow-2xl">Porto de Galinhas</h3>
                <p className="mt-2 text-lg opacity-90">Piscinas naturais e águas cristalinas</p>
              </div>
            </Link>

            <Link to="/blog?categoria=olinda" className="group block relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://www.viagensecaminhos.com/wp-content/uploads/2014/06/olinda-igreja-do-carmo-696x487.jpg"
                alt="Olinda"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold drop-shadow-2xl">Olinda</h3>
                <p className="mt-2 text-lg opacity-90">Patrimônio histórico e Carnaval inesquecível</p>
              </div>
            </Link>

            <Link to="/blog?categoria=noronha" className="group block relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://www.viajenaviagem.com/wp-content/uploads/2022/09/praia-do-porto-fernando-de-noronha-1920x1080-1.jpg.webp"
                alt="Fernando de Noronha"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold drop-shadow-2xl">Fernando de Noronha</h3>
                <p className="mt-2 text-lg opacity-90">Paraíso ecológico com as praias mais lindas do Brasil</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mapa Interativo */}
      <section className="my-24 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-12 text-center font-['Noto_Serif']">
            Mapa de Destinos em Pernambuco
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-120 lg:h-150">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.113678!2d-34.9309!3d-8.0585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f8a6a7b0b4b%3A0x4d4b7f0a3b1a2c3d!2sRecife%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1734370000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa interativo de Pernambuco"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}