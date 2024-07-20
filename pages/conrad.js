import Header from '../components/Header';
import Footer from '../components/Footer';
import ConradSection from '../components/ConradSection';

export default function Conrad() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <ConradSection />
      </main>      
      <Footer />
    </div>
  );
}