import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function PrefeituraCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);

  // Carousel grande à esquerda: notícias da Prefeitura do Recife
  const noticiasCarousel = [
    {
      title: "Em seis meses, Prefeitura inicia obras de quase 2 mil unidades habitacionais com investimentos de R$ 350 milhões no Recife",
      image: "https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/habitacional_papa_francisco_edson_holanda_pcr_1.jpg?itok=xNYt3LCc",
      link: "https://www2.recife.pe.gov.br/noticias/16/12/2025/em-seis-meses-prefeitura-inicia-obras-de-quase-2-mil-unidades-habitacionais-com",
    },
    {
      title: "Prefeitura anuncia atrações para o Carnaval 2026 com Liniker, Lenine, João Gomes, Alceu Valença e mais",
      image: "https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/7faa411b-06f6-4ba9-9c17-b50f05bffe21.jpg?itok=j9i6uT4R",
      link: "https://www2.recife.pe.gov.br/noticias/04/12/2025/prefeitura-do-recife-anuncia-liniker-lenine-joao-gomes-jotape-mestrinho-elba",
    },
    {
      title: "Prefeitura conquista prêmio internacional por projeto de urbanismo social",
      image: "https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/finalizado_mais_vida_-_arca_de_noe_-_uenni-10_2.jpg?itok=JHOjBej3",
      link: "https://www2.recife.pe.gov.br/noticias/03/12/2025/prefeitura-do-recife-conquista-premio-internacional-por-projeto-de-urbanismo",
    },
  ];

  // Lista ao lado: notícias nacionais
  const noticiasLista = [
    {
      title: "PSG vence o Flamengo nos pênaltis e conquista o Intercontinental",
      subtitle: "Jogadores franceses exaltam o goleiro Safonov: 'Imenso'",
      date: "17 de dezembro de 2025",
      image: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/12/AFP__20251217__88GG6ZQ__v1__HighRes__FblFifaQatPsgFlamengo-scaled-aspect-ratio-512-320.jpg",
      link: "https://www.uol.com.br/esporte/futebol/ultimas-noticias/2025/12/17/psg-x-flamengo-copa-intercontinental-2025.htm",
      bullets: ["Flamengo embolsa R$ 21,6 milhões com vice", "veja premiações"],
    },
    {
      title: "Trump eleva o tom contra Maduro a nível estridente com ameaça de bloqueio total",
      subtitle: "Sandra Cohen: Presidente eleito intensifica pressão sobre o regime venezuelano",
      date: "17 de dezembro de 2025",
      image: "https://s2-g1.glbimg.com/UmpjbzyCFd8tqtZ7MBXsqeAah9Q=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/B/S/l1bWHbS7yxMSSSUllZ3Q/fotojet-2025-07-19t112604.247.jpg",
      link: "https://g1.globo.com/mundo/blog/sandra-cohen/noticia/2025/12/17/trump-eleva-o-tom-contra-maduro-a-nivel-estridente-com-ameaca-de-bloqueio-total.ghtm",
      bullets: [],
    },
    {
      title: "Lula anuncia saída da Sabino do governo após expulsão do União Brasil",
      subtitle: "Valdo Cruz: União pediu o cargo após ministro ser expulso do partido",
      date: "17 de dezembro de 2025",
      image: "https://conteudo.imguol.com.br/c/noticias/79/2025/09/26/18set2024---o-presidente-lula-acompanhado-de-celso-sabino-a-dir-ministro-do-turismo-durante-cerimonia-de-sancao-da-nova-lei-do-turismo-no-palacio-do-planalto-1758897354301_v2_900x506.jpg",
      link: "https://g1.globo.com/politica/blog/valdo-cruz/post/2025/12/17/lula-anuncia-saida-da-sabino-do-governo-uniao-pediu-cargo-apos-ministro-ser-expulso-de-partido.ghtml",
      bullets: [],
    },
    {
      title: "Venezuela começa a ficar sem espaço para armazenar petróleo após bloqueio de Trump",
      subtitle: "Agência Reuters: INFOGRÁFICO mostra impacto na economia venezuelana",
      date: "17 de dezembro de 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpKa0yIOerupNtPLyqDsgf_qfZNjB-xJiDg&s",
      link: "https://g1.globo.com/mundo/noticia/2025/12/17/apos-acao-e-bloqueio-de-trump-venezuela-comeca-a-ficar-sem-espaco-para-armazenar-petroleo-diz-agencia.ghtml",
      bullets: ["Entenda qual o peso do petróleo na economia venezuelana"],
    },
  ];

  return (
    <section className="my-16 md:my-24 bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-10 text-center font-['Noto_Serif']">
          Notícias em Destaque
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Carousel grande (ocupa 2 colunas no lg) */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl">
            <div ref={emblaRef} className="overflow-hidden h-full">
              <div className="flex h-full">
                {noticiasCarousel.map((noticia, index) => (
                  <div key={index} className="flex-none w-full">
                    <a href={noticia.link} target="_blank" rel="noopener noreferrer" className="block relative h-96 md:h-[500px] lg:h-full min-h-96">
                      <img
                        src={noticia.image}
                        alt={noticia.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-2xl line-clamp-4">
                          {noticia.title}
                        </h3>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lista de notícias ao lado (1 coluna no lg) */}
          <div className="space-y-6">
            {noticiasLista.map((noticia, index) => (
              <a
                key={index}
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 hover:bg-white/60 p-4 rounded-xl transition-all duration-300 group"
              >
                <img
                  src={noticia.image}
                  alt={noticia.title}
                  className="w-24 h-20 object-cover rounded-lg flex-none shadow-md group-hover:shadow-lg transition-shadow"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">{noticia.date}</p>
                  <h3 className="text-lg font-bold text-heading mb-1 line-clamp-2 group-hover:text-[#856851] transition-colors">
                    {noticia.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {noticia.subtitle}
                  </p>
                  {noticia.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {noticia.bullets.map((bullet, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span className="line-clamp-1">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}