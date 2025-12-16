import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { PostCard } from "@/components/PostCards";

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
      {/* Hero com vídeo e logo centralizada no meio */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Vídeo de fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videio-hero.mp4" type="video/mp4" />
          <img
            src="https://turismo.b-cdn.net/wp-content/uploads/2013/01/Praia-de-Muro-Alto-em-Porto-de-Galinhas-PE.jpg"
            alt="Descubra Pernambuco"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Overlay gradient para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/20" />

        {/* Logo centralizada no meio do hero (grande) */}
        <div className="relative z-20 text-center">
          <img
            src="/logotipo.png"
            alt="Descubra Pernambuco"
            className="h-38 w-auto md:h-54 lg:h-70 object-contain drop-shadow-2xl mx-auto"
          />
        </div>
      </section>

      {/* Destaques do Momento */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-heading mb-16 text-center">
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
    </div>
  );
}