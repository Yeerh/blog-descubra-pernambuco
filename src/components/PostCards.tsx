import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Post } from "@/types"; // ← Import correto (src/types/index.ts)

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {/* Imagem com link para o detalhe */}
      <Link to={`/blog/${post.slug}`} className="block">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <img
            src={post.image || "https://via.placeholder.com/800x450?text=Imagem+em+carregamento"}
            alt={post.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
      </Link>

      {/* Cabeçalho do card */}
      <CardHeader className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            {post.category}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <CardTitle className="text-xl line-clamp-2 text-heading group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>

      {/* Resumo */}
      <CardContent>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>

      {/* Rodapé com autor e link de comentário */}
      <CardFooter className="flex flex-col items-start gap-4 mt-auto">
        <span className="text-sm text-muted-foreground">Por {post.author}</span>

        <Link
          to={`/blog/${post.slug}`}
          className="text-sm text-primary hover:underline font-medium flex items-center gap-1"
        >
          Deixe um comentário →
        </Link>
      </CardFooter>
    </Card>
  );
}