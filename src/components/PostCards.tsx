import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 h-full flex flex-col">
      {/* Imagem com zoom e overlay verde sutil no hover */}
      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={post.image || "https://via.placeholder.com/800x450?text=Imagem+em+carregamento"}
            alt={post.title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          {/* Overlay verde (#856851) sutil no hover */}
          <div className="absolute inset-0 bg-[#856851]/0 group-hover:bg-[#856851]/20 transition-colors duration-500 pointer-events-none" />
        </AspectRatio>
      </Link>

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

        {/* Título com hover verde */}
        <CardTitle className="text-xl line-clamp-2 text-heading group-hover:text-[#856851] transition-colors duration-300">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 mt-auto">
        <span className="text-sm text-muted-foreground">Por {post.author}</span>

        <Link
          to={`/blog/${post.slug}`}
          className="text-sm text-primary hover:text-[#856851] hover:underline font-medium flex items-center gap-1 transition-colors"
        >
          Deixe um comentário →
        </Link>
      </CardFooter>
    </Card>
  );
}