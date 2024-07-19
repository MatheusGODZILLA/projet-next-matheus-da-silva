// components/ConradSection.js
import Image from 'next/image';

const ConradSection = () => (
  <section className="conrad">
    <Image src="/img/topo-a-conrad.png.jpg" alt="Conrad" width={600} height={400} />
    <h1>Um pouco sobre a Conrad Editora</h1>
    <div className="story">
      <p>A Conrad Editora foi fundada em 1993 e logo começou a ser conhecida graças ao fenômeno da Revista Herói, publicação semanal que pegou carona na febre dos Cavaleiros do Zodíaco e que pegou uma nova geração de entusiastas da cultura pop, na época muito carentes de informações sobre seus conteúdos favoritos. Inovadora desde sua fundação, logo a Conrad mergulhou no mundo dos games com a revista Nintendo World e se aprofundou também no maravilhoso mundo dos animês com a Pokémon Club, mais dois sucessos estrondosos.</p>
    </div>
  </section>
);

export default ConradSection;