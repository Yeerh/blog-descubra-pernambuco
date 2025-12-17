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
    <Card className="group overflow-hidden bg-card border-border hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 h-full flex flex-col rounded-2xl">
      {/* Imagem com espaço interno e arredondada no topo */}
      <Link to={`/blog/${post.slug}`} className="block p-4 pt-4">
        <div className="relative overflow-hidden rounded-t-2xl">
          <AspectRatio ratio={16 / 9}>
            <img
              src={post.image || "https://via.placeholder.com/800x450?text=Imagem+em+carregamento"}
              alt={post.title}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 rounded-t-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#856851]/0 group-hover:bg-[#856851]/20 transition-colors duration-500 pointer-events-none rounded-t-2xl" />
          </AspectRatio>
        </div>
      </Link>

      <CardHeader className="flex-1 px-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-black/30 px-3 py-1 rounded-full">
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

        <CardTitle className="text-xl line-clamp-2 text-heading group-hover:text-[#856851] transition-colors duration-300">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6">
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-3 mt-auto px-6 pb-6">
        {/* Nome do autor em itálico */}
        <span className="text-sm text-muted-foreground italic">
          Por {post.author}
        </span>

        {/* Botão "Deixe um comentário" ainda menor */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 px-3 py-1.5 border border-gray-800 text-gray-800 rounded-full text-xs font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
        >
          Deixe um comentário
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}