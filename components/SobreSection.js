import Image from 'next/image';

const SobreSection = () => (
  <section className="sobre">
    <Image src="/img/Goji.webp" alt="HQ" width={600} height={400} />
    <h1>Um pouco sobre a publicação original</h1>
    <div className="story">
      <p>Em Godzilla – A Guerra de Meio Século, o tenente Ota Murakami está a postos quando Godzilla pisa no Japão pela primeira vez, em 1954. Junto com seu amigo Kentaro, Ota assume grandes riscos para salvar vidas… e assim começa uma obsessão pelo Rei dos Monstros que dura quase 50 anos, passando por Gana, Vietnã, Mumbai e talvez o fim do mundo!</p>
      <p>A obra de Stokoe é uma grandiosa homenagem ao personagem e consegue transmitir o verdadeiro horror da destruição causada por monstros gigantes no mundo real, além de contar com referências à jornada cinematográfica de Godzilla, com a participação de outros kaijus e easter eggs que os fãs da franquia não deixarão passar.</p>
    </div>
  </section>
);

export default SobreSection;