export function Mapa() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-heading mb-4 text-center font-['Noto_Serif']">
          Mapa de Destinos em Pernambuco
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Explore os principais pontos turísticos do nosso estado
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl h-150">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.113678!2d-34.9309!3d-8.0585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f8a6a7b0b4b%3A0x4d4b7f0a3b1a2c3d!2sRecife%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1734370000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa interativo de Pernambuco"
          ></iframe>
        </div>
      </div>
    </div>
  );
}