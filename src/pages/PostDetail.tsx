import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Post } from "@/types";

export function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Erro ao carregar notícia:", error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-heading">Carregando notícia...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-heading mb-8">Notícia não encontrada</h1>
        <Link to="/" className="text-primary hover:underline text-lg">
          ← Voltar para a home
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Botão voltar no topo */}
      <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-10 text-sm font-medium">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para todas as notícias
      </Link>

      {/* Imagem principal grande */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={post.image || "https://via.placeholder.com/1200x600?text=Descubra+Pernambuco"}
          alt={post.title}
          className="w-full h-96 md:h-150 object-cover"
        />
      </div>

      {/* Metadados */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="font-medium">Por {post.author}</span>
          <span>•</span>
          <span>
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1">
            {post.category}
          </Badge>
        </div>

        {/* Título grande */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
          {post.title}
        </h1>
      </div>

      {/* Excerpt como introdução */}
      <p className="text-xl text-muted-foreground leading-relaxed mb-12 italic">
        {post.excerpt}
      </p>

      {/* Conteúdo completo do post */}
      <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-8 mb-16">
        <div className="whitespace-pre-wrap text-justify">
          {post.content}
        </div>
      </div>

      {/* Área de comentários (simulada) */}
      <section className="mt-20 pt-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-heading mb-8">Comentários</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Seja o primeiro a comentar esta notícia!
        </p>
        <form className="space-y-6 bg-gray-50 p-8 rounded-xl">
          <textarea
            placeholder="Escreva seu comentário aqui..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={6}
            required
          />
          <Button type="submit" size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90">
            Enviar comentário
          </Button>
        </form>
      </section>

      {/* Botão voltar no final */}
      <div className="mt-20 pt-12 text-center">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            Ver mais notícias
          </Link>
        </Button>
      </div>
    </article>
  );
}