import { Sparkles, Target, Heart, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Sparkles,
      title: "Design minimaliste",
      description: "Des produits élégants qui s'intègrent naturellement dans votre intérieur"
    },
    {
      icon: Target,
      title: "Simplicité d'usage",
      description: "Une expérience intuitive accessible à tous, sans compétences techniques"
    },
    {
      icon: Heart,
      title: "Expérience fluide",
      description: "Un écosystème complet contrôlé depuis une seule application centralisée"
    },
    {
      icon: Leaf,
      title: "Éco-responsabilité",
      description: "Optimisez votre consommation énergétique et réduisez votre empreinte"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Notre histoire
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi LumaTech existe
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Née d'une vision simple : rendre la maison connectée accessible à tous, 
            sans compromis sur le design ou la simplicité.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Story Content */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                En 2020, nous avons constaté que la domotique était souvent 
                <span className="font-semibold text-gray-900"> complexe, fragmentée et peu accessible</span>. 
                Les objets connectés ne communiquaient pas entre eux, les applications se multipliaient, 
                et l'expérience utilisateur était frustrante.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                C'est là que LumaTech est né. Notre mission ? 
                <span className="font-semibold text-gray-900"> Créer un écosystème complet</span> où chaque produit 
                fonctionne en harmonie avec les autres, contrôlé depuis une interface unique, 
                élégante et intuitive.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Aujourd'hui, nous accompagnons plus de 100 foyers dans leur transition vers 
                une maison intelligente qui respecte leurs valeurs : 
                <span className="font-semibold text-gray-900"> design, simplicité et durabilité</span>.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white font-semibold">
                  L
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">L'équipe LumaTech</p>
                <p className="text-xs text-gray-600">Passionnés de design & tech</p>
              </div>
            </div>
          </div>

          {/* Visual Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-xl">
              {/* Timeline illustration */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">2020 - La vision</h4>
                    <p className="text-sm text-gray-600">Identification du besoin d'unification de la domotique</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">2021 - Conception</h4>
                    <p className="text-sm text-gray-600">Design thinking et prototypage des premiers produits</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">2023 - Lancement</h4>
                    <p className="text-sm text-gray-600">Première gamme complète et Hub central LumaTech</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">2025 - Expansion</h4>
                    <p className="text-sm text-gray-600">100+ foyers équipés et nouveaux produits en développement</p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-200 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nos valeurs fondamentales
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={28} className="text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir nos produits
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}