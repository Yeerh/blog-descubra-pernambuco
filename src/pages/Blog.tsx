import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { PostCard } from "@/components/PostCards";
import { Post } from "@/types";  // ← ESSA LINHA RESOLVE O ERRO
export function Blog() {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-heading">Carregando notícias...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-heading mb-16 text-center">
          Todas as Notícias
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="col-span-full text-center text-muted-foreground text-xl">
              Nenhuma notícia publicada ainda.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}