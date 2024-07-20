import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';

export default function Home() {
  const [metadata, setMetadata] = useState({ title: '', description: '' });

  useEffect(() => {
    fetch('/api/page-metadata?page=home')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);  
        setMetadata(data);
      });
  }, []);
  
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}