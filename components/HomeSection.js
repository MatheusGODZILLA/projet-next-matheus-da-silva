// components/HomeSection.js
import Image from 'next/image';

const HomeSection = () => (
  <section className="iniciante">
    <h1>Lançamento inédito</h1>
    <Image src="/img/godzilla-a-guerra-de-meio-seculo.jpg" alt="capa" width={600} height={400} />
    <p className="p2">Após o lançamento do filme Godzilla de 1954 da Toho, o personagem se tornou um tremendo sucesso e logo estabeleceu uma franquia longeva que já dura 70 anos.</p>
    <p className="p2">O monstro acumula dezenas de produções para o audiovisual e outras mídias, como os quadrinhos. Nesse contexto surge a HQ Godzilla – A Guerra de Meio Século, de James Stokoe, publicada originalmente pela IDW e que chega ao mercado brasileiro pela Conrad Editora com tradução de Diogo Prado.</p>
  </section>
);

export default HomeSection;
