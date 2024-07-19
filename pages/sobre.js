import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SobreSection from '../components/SobreSection';

export default function Sobre() {
  const [metadata, setMetadata] = useState({ title: '', description: '' });

  useEffect(() => {
    fetch('/api/page-metadata?page=sobre')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  
        setMetadata(data);
      });
  }, []);
  return (
    <>
      <Header />
      <SobreSection />
      <Footer />
    </>
  );
}