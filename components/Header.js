import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header>
    <div className="container">
      <Image src="/img/conrad.png" alt="Conrad Editora" width={30} height={30} />
      <nav className="menu">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre a HQ</Link>
        <Link href="/conrad">Sobre a Conrad</Link>
      </nav>
    </div>
  </header>
);

export default Header;