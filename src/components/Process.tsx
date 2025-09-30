import { Lightbulb, Palette, TestTube, Truck, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Idéation & Recherche",
      description: "Nous écoutons les besoins réels des utilisateurs pour identifier les problématiques de la maison connectée.",
      details: [
        "Interviews utilisateurs",
        "Analyse du marché",
        "Identification des pain points",
        "Définition des objectifs"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      icon: Palette,
      title: "Design & Prototypage",
      description: "Notre équipe design crée des interfaces intuitives et des produits élégants qui s'intègrent naturellement.",
      details: [
        "Design thinking workshops",
        "Maquettes UX/UI",
        "Prototypes interactifs",
        "Tests d'ergonomie"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "03",
      icon: TestTube,
      title: "Test & Validation",
      description: "Chaque produit est rigoureusement testé pour garantir fiabilité, sécurité et facilité d'utilisation.",
      details: [
        "Tests en conditions réelles",
        "Validation technique",
        "Tests de sécurité",
        "Feedback utilisateurs"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      number: "04",
      icon: Truck,
      title: "Livraison & Support",
      description: "Nous accompagnons nos clients de l'installation à l'utilisation quotidienne avec un support dédié.",
      details: [
        "Installation simplifiée",
        "Guides détaillés",
        "Support client 24/7",
        "Mises à jour continues"
      ],
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Notre méthode
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            De l'idée au produit fini
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une approche centrée sur l'humain, où chaque étape est pensée 
            pour créer des produits qui améliorent vraiment votre quotidien.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-orange-200 to-blue-200"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <step.icon size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-bold text-gray-400">{step.number}</span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle - Desktop */}
                <div className="hidden lg:flex flex-shrink-0 w-6 h-6 bg-white border-4 border-orange-600 rounded-full shadow-lg z-10"></div>

                {/* Empty Space for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Une approche Design Thinking
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Chez LumaTech, nous croyons que la technologie doit s'adapter à l'humain, 
              et non l'inverse. Notre processus de conception place l'utilisateur au centre 
              de chaque décision, de la première idée jusqu'au support après-vente.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-300">Testé en conditions réelles</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-300">Itérations de design</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-orange-500">98%</div>
                <div className="text-sm text-gray-300">Satisfaction client</div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Discutons de votre projet
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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