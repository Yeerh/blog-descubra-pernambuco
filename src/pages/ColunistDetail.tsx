import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { PostCard } from "@/components/PostCards";
import { ArrowLeft } from "lucide-react";
import { Post } from "@/types";

// Informações dos colunistas (foto e bio)
const colunistasInfo: Record<string, { bio: string; image: string }> = {
  "Birosca": {
    bio: "Jornalista apaixonado por Pernambuco, especialista em notícias locais, cultura e ações sociais. Fundador do Descubra Pernambuco.",
    image: "https://scontent.frec15-1.fna.fbcdn.net/v/t39.30808-6/598731983_1200438608857883_4958011312354793659_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=018SQd6ar-UQ7kNvwGyNvpJ&_nc_oc=AdkXonpTqTupZkllc2jM8wFzvW2V52TzzZu1j8ccef92gI8FLzroGZ9r9p_N08jUx3U&_nc_zt=23&_nc_ht=scontent.frec15-1.fna&_nc_gid=hu1bfRYVdoCdvAYZ5wPYvA&oh=00_Afnkpq559Gx0MMEdmo7SHfmPAwyF9T24EEHvbS4O_kRFlw&oe=6947ADD6", // Substitua pela foto real
  },
  "Mariana Oliveira": {
    bio: "Fotógrafa e viajante, especialista em praias, turismo e gastronomia pernambucana.",
    image: "https://via.placeholder.com/300x300?text=Mariana",
  },
  "João Santos": {
    bio: "Historiador e guia turístico, conta histórias do Recife antigo e Olinda colonial.",
    image: "https://via.placeholder.com/300x300?text=João",
  },
};

export function ColunistDetail() {
  const { slug } = useParams<{ slug: string }>();
  const authorName = slug ? slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) : "";

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
          <img
            src={colunista.image}
            alt={authorName}
            className="w-72 h-72 rounded-full object-cover border-8 border-primary/20 shadow-2xl"
          />
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-heading mb-6">{authorName}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
              {colunista.bio}
            </p>
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