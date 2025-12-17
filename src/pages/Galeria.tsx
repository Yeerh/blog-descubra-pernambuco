import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const photos = [
  {
    src: "https://turismo.recife.pe.gov.br/sites/default/files/styles/destaque/public/imagens/praia_boa_viagem.jpg?itok=example",
    title: "Praia de Boa Viagem - Recife",
  },
  {
    src: "https://www.portodegalinhas.org.br/wp-content/uploads/2024/01/porto-de-galinhas.jpg",
    title: "Porto de Galinhas - Ipojuca",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Olinda_Pernambuco_Brazil.jpg/1200px-Olinda_Pernambuco_Brazil.jpg",
    title: "Centro Histórico de Olinda",
  },
  {
    src: "https://www.noronha.pe.gov.br/wp-content/uploads/2024/01/baia-do-sancho.jpg",
    title: "Baía do Sancho - Fernando de Noronha",
  },
  {
    src: "https://viajantecomum.com.br/wp-content/uploads/2023/01/carnaval-olinda.jpg",
    title: "Carnaval de Olinda",
  },
  {
    src: "https://www.recife.pe.gov.br/sites/default/files/imagens/marco_zero_recife.jpg",
    title: "Marco Zero - Recife Antigo",
  },
];

export function Galeria() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-heading mb-4 text-center font-['Noto_Serif']">
          Galeria Pernambuco
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          As belezas de Pernambuco em imagens
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <p className="p-4 text-center text-lg font-medium bg-white/90">
                {photo.title}
              </p>
            </button>
          ))}
        </div>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={photos}
          plugins={[Thumbnails, Zoom]}
          thumbnails={{ position: "bottom" }}
          zoom={{ maxZoomPixelRatio: 3 }}
        />
      </div>
    </div>
  );
}