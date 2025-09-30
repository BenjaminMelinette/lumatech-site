import { useState } from 'react';
import { Lightbulb, Thermometer, Plug, Home, Smartphone, Shield, Zap, ArrowRight } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Hub central LumaTech",
      category: "hub",
      icon: Home,
      description: "Le cœur de votre maison connectée. Connectez et contrôlez tous vos appareils LumaTech depuis une seule interface élégante.",
      features: ["Interface unifiée", "Sans abonnement", "Mises à jour auto", "Connexion sécurisée"],
      price: "129€",
      link: "#",
      featured: true
    },
    {
      id: 2,
      name: "Lumières connectées",
      category: "lighting",
      icon: Lightbulb,
      description: "Contrôlez l'ambiance de votre maison avec des lumières intelligentes. Personnalisez les couleurs, l'intensité et programmez des scénarios.",
      features: ["16 millions de couleurs", "Contrôle vocal", "Programmation horaire", "Synchronisation musicale"],
      price: "À partir de 49€",
      link: "#"
    },
    {
      id: 3,
      name: "Capteurs connectés",
      category: "sensors",
      icon: Thermometer,
      description: "Surveillez en temps réel la température, l'humidité et la qualité de l'air. Recevez des alertes intelligentes sur votre smartphone.",
      features: ["Détection précise", "Alertes instantanées", "Historique données", "Batterie longue durée"],
      price: "À partir de 39€",
      link: "#"
    },
    {
      id: 4,
      name: "Prises intelligentes",
      category: "control",
      icon: Plug,
      description: "Transformez n'importe quel appareil en objet connecté. Contrôlez vos appareils à distance et suivez votre consommation énergétique.",
      features: ["Contrôle à distance", "Suivi consommation", "Timer intégré", "Compatible assistants"],
      price: "À partir de 29€",
      link: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits', count: products.length },
    { id: 'lighting', name: 'Éclairage', count: products.filter(p => p.category === 'lighting').length },
    { id: 'sensors', name: 'Capteurs', count: products.filter(p => p.category === 'sensors').length },
    { id: 'control', name: 'Contrôle', count: products.filter(p => p.category === 'control').length },
    { id: 'hub', name: 'Hub', count: products.filter(p => p.category === 'hub').length }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
              Notre gamme
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des produits pensés pour vous
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une collection complète d'objets connectés qui transforment votre quotidien 
            en expérience fluide et intelligente.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 text-sm ${
                activeCategory === category.id ? 'text-orange-200' : 'text-gray-400'
              }`}>
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                product.featured ? 'ring-2 ring-orange-600 lg:col-span-2' : 'shadow-lg'
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {product.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Produit phare
                  </span>
                </div>
              )}

              <div className={`p-8 ${product.featured ? 'lg:flex lg:gap-12 lg:items-center' : ''}`}>
                
                {/* Icon & Title */}
                <div className={product.featured ? 'lg:flex-1' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className={`flex items-center justify-between pt-6 border-t border-gray-100 ${
                  product.featured ? 'lg:flex-col lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0 lg:items-start' : ''
                }`}>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Prix</p>
                    <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={product.link}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                    >
                      Acheter maintenant
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={product.link}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                <Smartphone size={32} />
              </div>
              <h4 className="text-xl font-bold">Application unique</h4>
              <p className="text-blue-100 text-sm">
                Contrôlez tous vos appareils depuis une seule interface intuitive
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                <Shield size={32} />
              </div>
              <h4 className="text-xl font-bold">Sécurité garantie</h4>
              <p className="text-blue-100 text-sm">
                Vos données sont cryptées et protégées avec les dernières technologies
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-bold">Installation rapide</h4>
              <p className="text-blue-100 text-sm">
                Configurez vos appareils en quelques minutes, sans compétences techniques
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Une question sur nos produits ?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contactez notre équipe
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}