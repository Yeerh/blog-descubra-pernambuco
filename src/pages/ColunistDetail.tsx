import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { PostCard } from "@/components/PostCards";
import { ArrowLeft } from "lucide-react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Post } from "@/types";

// Informações dos colunistas (foto e bio)
const colunistasInfo: Record<string, { bio: string; image: string; facebook?: string; instagram?: string; whatsapp?: string }> = {
  "JPCOBIROSCA": {
    bio: "Jornalista apaixonado por Pernambuco, fundador do Pernambuco em Foco e Café com Birosca. Atua em notícias locais, cultura e ações sociais.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDN5FABc83FgINuda_SP6bCrhvE-_tpzA_Q&s",
    facebook: "https://facebook.com/jpcobiroscando",
    instagram: "https://instagram.com/jpcbirosca_pe",
    whatsapp: "https://wa.me/5581999999999"
  },
  "Thiago Barbosa": {
    bio: "Especialista em turismo, apaixonado por cultura pernambucana e experiências autênticas.",
    image: "https://pbs.twimg.com/profile_images/1951645410121969664/s8426mgp_400x400.jpg",
  },
  "Luciana Morosini": {
    bio: "Jornalista e exploradora, compartilha dicas e roteiros para descobrir o melhor de Pernambuco.",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFf-eoiRTA5Rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1564693136190?e=1767830400&v=beta&t=qaeQtLU_Eurt9iAl2ClKPlEiabTYZnvelBMF_ItYssM",
  },
};

export function ColunistDetail() {
  const { slug } = useParams<{ slug: string }>();
  let authorName = "";
  if (slug) {
    if (slug.toLowerCase() === "jpcobirosca") {
      authorName = "JPCOBIROSCA";
    } else {
      authorName = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    }
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const colunista = colunistasInfo[authorName];

  useEffect(() => {
    const fetchPosts = async () => {
      if (!authorName) return;

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("author", authorName)
        .order("date", { ascending: false });

      if (error) {
        console.error("Erro ao carregar notícias:", error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [authorName]);

  if (!colunista) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-heading">Colunista não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Botão voltar */}
        <Link to="/colunistas" className="inline-flex items-center text-primary hover:underline mb-12 text-lg font-medium">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para colunistas
        </Link>

        {/* Perfil do colunista */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="flex flex-col items-center">
            <img
              src={colunista.image}
              alt={authorName}
              className="w-72 h-72 rounded-full object-cover border-8 border-primary/20 shadow-2xl mb-4"
            />
            {/* Ícones sociais abaixo da foto */}
            {authorName === "JPCOBIROSCA" && (
              <div className="flex gap-6 bg-background/80 px-6 py-2 rounded-full shadow-lg mt-2">
                <a href={colunista.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Facebook className="h-7 w-7" />
                </a>
                <a href={colunista.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                  <Instagram className="h-7 w-7" />
                </a>
                <a href={colunista.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                  <MessageCircle className="h-7 w-7" />
                </a>
              </div>
            )}
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl font-bold text-heading mb-6 font-['Noto_Serif']">{authorName}</h1>
            <div className="bg-primary/10 border-l-4 border-primary px-6 py-5 rounded-xl shadow mb-6">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-serif">
                {colunista.bio}
              </p>
            </div>
            <p className="text-lg text-primary font-semibold">
              {posts.length} {posts.length === 1 ? "publicação" : "publicações"}
            </p>
          </div>
        </div>

        {/* Notícias do colunista */}
        <h2 className="text-4xl font-bold text-heading mb-12 text-center">
          Publicações de {authorName}
        </h2>

        {loading ? (
          <p className="text-center text-lg text-muted-foreground">Carregando notícias...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-xl text-muted-foreground">
            Ainda não há publicações de {authorName}.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}