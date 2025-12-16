import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Post } from "@/types/index";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <Link to={`/blog/${post.slug}`} className="block">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <img
            src={post.image || "https://via.placeholder.com/800x450?text=Imagem+em+carregamento"}
            alt={post.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </AspectRatio>
      </Link>
      <CardHeader className="flex-1">
        <div className="flex items-center justify-between mb-3">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            {post.category}
          </Badge>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <CardTitle className="text-xl line-clamp-2 text-heading group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground mt-auto">
        Por {post.author}
      </CardFooter>
      <CardFooter className="flex justify-between items-center mt-auto">
  
  <Link to={`/blog/${post.slug}`} className="text-sm text-primary hover:underline">
    Deixe um comentário →
  </Link>
</CardFooter>
    </Card>
  );
}