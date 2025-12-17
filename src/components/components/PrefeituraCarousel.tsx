import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function PrefeituraCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

  const [noticiasPrefeitura] = useState<any[]>([
    {
      title: "Recife se enfeita e acende mais de 4 milhões de pontos luminosos para celebrar o ciclo natalino",
      image: "https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/9d999689-056f-4f37-bfa1-85f694985e8b.jpg?itok=2WGVtRYy",
      link: "https://www2.recife.pe.gov.br/noticias/02/12/2025/recife-se-enfeita-e-acende-mais-de-4-milhoes-de-pontos-luminosos-para-celebrar-o",
    },
    {
      title: "Prefeitura anuncia atrações confirmadas para o Carnaval 2026 com Liniker, Lenine, João Gomes, Alceu Valença e mais",
      image: "https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/7faa411b-06f6-4ba9-9c17-b50f05bffe21.jpg?itok=j9i6uT4R",
      link: "https://www2.recife.pe.gov.br/noticias/04/12/2025/prefeitura-do-recife-anuncia-liniker-lenine-joao-gomes-jotape-mestrinho-elba",
    },
    {
      title: "Prefeitura do Recife conquista prêmio internacional por projeto de urbanismo social",
      image: "https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/finalizado_mais_vida_-_arca_de_noe_-_uenni-10_2.jpg?itok=JHOjBej3",
      link: "https://www2.recife.pe.gov.br/noticias/03/12/2025/prefeitura-do-recife-conquista-premio-internacional-por-projeto-de-urbanismo",
    },
  ]);

  return (
    <section className="my-16 md:my-20">
      <div className="container mx-auto px-4">
     <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8 text-center font-['Noto_Serif']">
  Notícias da Prefeitura do Recife
</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
            <div className="flex">
              {noticiasPrefeitura.map((noticia, index) => (
                <div key={index} className="flex-none w-full">
                  <a
                    href={noticia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-64 md:h-96 lg:h-[500px]" // Tamanho reduzido e responsivo
                  >
                    <img
                      src={noticia.image}
                      alt={noticia.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay suave */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Texto no rodapé */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-2xl line-clamp-3">
                        {noticia.title}
                      </h3>
                      <p className="mt-3 md:mt-4 text-base md:text-lg opacity-90 font-medium drop-shadow-lg">
                        Fonte oficial: Prefeitura do Recife →
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Pontinhos indicadores (discretos e bonitos) */}
          <div className="flex justify-center gap-2 mt-6">
            {noticiasPrefeitura.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-400 opacity-60"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}