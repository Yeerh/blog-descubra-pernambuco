import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-heading mb-8">Post não encontrado</h1>
        <Link to="/" className="text-primary hover:underline text-lg">
          ← Voltar para a home
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Botão voltar no topo */}
      <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8 text-sm">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para a home
      </Link>

      {/* Imagem principal grande */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 md:h-[600px] object-cover"
        />
      </div>

      {/* Metadados */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
          <span className="font-medium">Por {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {post.category}
          </Badge>
        </div>

        {/* Título grande */}
        <h1 className="text-4xl md:text-5xl font-bold text-heading leading-tight">
          {post.title}
        </h1>
      </div>

      {/* Excerpt como introdução */}
      <p className="text-xl text-muted-foreground leading-relaxed mb-12">
        {post.excerpt}
      </p>

      {/* Conteúdo completo do post */}
      <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
        <p>
          {post.content || (
            <>
              <strong>Em breve:</strong> conteúdo completo do post com dicas detalhadas, roteiro dia a dia, onde ficar, melhores restaurantes, como chegar, época ideal para visitar e muito mais!
              <br /><br />
              Quando o cliente fornecer os textos reais, substituímos aqui. Por enquanto, imagine um artigo rico com fotos e informações exclusivas sobre esse destino pernambucano incrível.
            </>
          )}
        </p>
        {/* Aqui você pode adicionar mais parágrafos, listas, imagens internas, etc. */}
      </div>

{/* Área de comentários (simulada) */}
<section className="mt-16 pt-12 border-t">
  <h2 className="text-3xl font-bold text-heading mb-8">Comentários</h2>
  <p className="text-muted-foreground mb-8">
    Seja o primeiro a comentar esta notícia!
  </p>
  <form className="space-y-6">
    <textarea
      placeholder="Escreva seu comentário..."
      className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-primary"
      rows={5}
    />
    <Button type="submit" className="bg-primary text-white">
      Enviar comentário
    </Button>
  </form>
</section>
      {/* Botão voltar no final */}
      <div className="mt-16 pt-12 border-t text-center">
        <Button asChild size="lg">
          <Link to="/">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Ver mais destinos em Pernambuco
          </Link>
        </Button>

        
      </div>
    </article>
  );
}