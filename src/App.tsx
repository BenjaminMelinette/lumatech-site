import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

export default App;