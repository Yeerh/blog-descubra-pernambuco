import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export function Admin() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Birosca"); // Default Birosca
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  // Categorias disponíveis
  const categorias = [
    "Notícias",
    "Praias",
    "Recife",
    "Olinda",
    "Fernando de Noronha",
    "Carnaval & Cultura",
    "Interior",
    "Gastronomia",
  ];

  // Colunistas oficiais (sugestões no dropdown)
  const colunistasOficiais = ["Birosca", "Mariana Oliveira", "João Santos"];

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
    };

    fetchPosts();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!category) {
      alert("Por favor, selecione uma categoria.");
      return;
    }

    setUploading(true);

    let imageUrl = "";

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file);

      if (uploadError) {
        alert("Erro ao fazer upload da imagem: " + uploadError.message);
        setUploading(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName);

      imageUrl = urlData.publicUrl;
    }

    const today = new Date().toISOString().split('T')[0];

    const { error } = await supabase
      .from('posts')
      .insert({
        title,
        slug: title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, ""),
        excerpt,
        content,
        author: author.trim(), // Usa o nome digitado ou selecionado
        category,
        image: imageUrl,
        date: today,
        featured: true,
      });

    setUploading(false);

    if (error) {
      alert("Erro ao publicar notícia: " + error.message);
    } else {
      alert("Notícia publicada com sucesso!");
      setTitle("");
      setExcerpt("");
      setContent("");
      setAuthor("Birosca");
      setCategory("");
      setFile(null);

      const { data } = await supabase.from("posts").select("*").order("date", { ascending: false });
      setPosts(data || []);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Tem certeza que deseja REMOVER esta notícia?")) {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) {
        alert("Erro ao remover: " + error.message);
      } else {
        alert("Notícia removida com sucesso!");
        setPosts(posts.filter((p) => p.id !== id));
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLogged");
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-heading">Painel do Administrador</h1>
        <Button onClick={handleLogout} variant="outline" className="text-red-600 hover:text-red-700">
          Sair
        </Button>
      </div>

      {/* Formulário para adicionar notícia */}
      <Card className="mb-20 shadow-xl">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-3xl font-bold">Adicionar Nova Notícia</CardTitle>
          <CardDescription className="text-lg">Preencha os campos abaixo para publicar</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="title" className="text-xl font-semibold">Título da Notícia</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="text-lg" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="excerpt" className="text-xl font-semibold">Resumo</Label>
              <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required rows={3} className="text-lg" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="content" className="text-xl font-semibold">Conteúdo Completo</Label>
              <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required rows={12} className="text-lg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Autor livre (dropdown com colunistas + opção de digitar) */}
              <div className="space-y-3">
                <Label htmlFor="author" className="text-xl font-semibold">Autor</Label>
                <Select value={author} onValueChange={setAuthor}>
                  <SelectTrigger className="text-lg bg-white">
                    <SelectValue placeholder="Selecione ou digite o nome" />
                  </SelectTrigger>
                  <SelectContent>
                    {colunistasOficiais.map((col) => (
                      <SelectItem key={col} value={col}>
                        {col}
                      </SelectItem>
                    ))}
                    <SelectItem value="outro">Outro (digitar abaixo)</SelectItem>
                  </SelectContent>
                </Select>
                {author === "outro" && (
                  <Input
                    placeholder="Digite o nome do autor"
                    onChange={(e) => setAuthor(e.target.value)}
                    className="mt-3 text-lg"
                  />
                )}
              </div>

              {/* Categoria */}
              <div className="space-y-3">
                <Label htmlFor="category" className="text-xl font-semibold">Categoria</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="text-lg bg-white">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Imagem */}
              <div className="space-y-3">
                <Label htmlFor="image" className="text-xl font-semibold">Anexar Imagem</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleFileChange} className="text-lg" />
                {file && <p className="text-sm text-muted-foreground">Imagem selecionada: {file.name}</p>}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={uploading}
              className="w-full text-xl py-8 bg-primary hover:bg-primary/90 border-2 border-primary/40 hover:border-primary shadow-md hover:shadow-lg transition-all duration-300"
            >
              {uploading ? "Publicando..." : "Publicar Notícia"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Lista de notícias */}
      <div className="space-y-8">
        {posts.map((post) => (
          <Card key={post.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {post.date} - {post.author}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{post.excerpt}</p>
              <Button
                onClick={() => handleDelete(post.id)}
                variant="outline"
                className="mt-4 text-red-600 hover:text-red-700"
              >
                Remover
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}