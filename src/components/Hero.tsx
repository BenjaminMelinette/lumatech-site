import { ChevronDown, Lightbulb, Wifi, Home } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                Innovation • Simplicité • Design
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Illuminez votre
              <span className="block text-orange-600 mt-2">quotidien connecté</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              LumaTech transforme votre maison en un espace intelligent et harmonieux. 
              Contrôlez vos objets connectés en toute simplicité depuis une seule application.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#about"
                onClick={scrollToAbout}
                className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                En savoir plus
              </a>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-all duration-300 text-center"
              >
                Découvrir nos produits
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Foyers équipés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Produits connectés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support client</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in-delay">
            {/* Central Hub Illustration */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Hub */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <Home size={32} />
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Hub LumaTech</h3>
                  <p className="text-blue-200 text-sm">Centre de contrôle intelligent</p>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between bg-blue-700/50 rounded-lg p-3">
                      <span className="text-sm">Lumières</span>
                      <span className="text-sm font-semibold">4 actives</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-700/50 rounded-lg p-3">
                      <span className="text-sm">Capteurs</span>
                      <span className="text-sm font-semibold">6 connectés</span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-700/50 rounded-lg p-3">
                      <span className="text-sm">Prises</span>
                      <span className="text-sm font-semibold">8 disponibles</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Lightbulb size={32} className="text-white" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-float-delay">
                <Wifi size={32} className="text-white" />
              </div>

              {/* Decorative circles */}
              <div className="absolute top-1/2 -right-12 w-24 h-24 border-4 border-orange-200 rounded-full"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 border-4 border-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-400 hover:text-orange-600 transition-colors"
          >
            <span className="text-sm mb-2">Découvrir</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}