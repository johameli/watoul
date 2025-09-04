import React, { useState } from 'react';
import { MapPin, Calendar, Share2, FileText, Award, Users, Eye, ExternalLink, Star, Building } from 'lucide-react';

interface ProfileProps {
  user: any;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('destacadas');

  // Datos del perfil del artista
  const artistProfile = {
    photo: user?.avatar || 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800',
    firstName: 'María',
    fullName: 'María García Rodríguez',
    signature: 'https://images.pexels.com/photos/6368899/pexels-photo-6368899.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Barcelona, España',
    rscRating: 4.8,
    categories: ['Ilustración Digital', 'Arte Conceptual', 'Pintura Tradicional', 'Diseño de Personajes'],
    mainWork: {
      title: 'Metamorfosis Urbana',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Serie que explora la transformación de los espacios urbanos a través del arte digital'
    }
  };

  const featuredWorks = [
    {
      id: 1,
      title: 'Metamorfosis Urbana',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Ilustración Digital',
      year: '2024',
      recognition: 'Premio Nacional de Arte Digital'
    },
    {
      id: 2,
      title: 'Retratos del Alma',
      image: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Pintura Tradicional',
      year: '2023',
      recognition: 'Exposición Individual - Galería Moderna'
    },
    {
      id: 3,
      title: 'Personajes Fantásticos',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Diseño de Personajes',
      year: '2024',
      recognition: 'Colaboración con Netflix'
    }
  ];

  const recentEvents = [
    {
      id: 1,
      title: 'Exposición Colectiva "Nuevas Voces"',
      type: 'Participación',
      date: '15-30 Marzo 2024',
      location: 'Museo de Arte Contemporáneo, Madrid',
      role: 'Artista Participante'
    },
    {
      id: 2,
      title: 'Workshop "Arte Digital Avanzado"',
      type: 'Creación',
      date: '5 Febrero 2024',
      location: 'Centro Cultural Barcelona',
      role: 'Instructora Principal'
    },
    {
      id: 3,
      title: 'Feria Internacional de Arte',
      type: 'Participación',
      date: '20-25 Enero 2024',
      location: 'ARCO Madrid',
      role: 'Artista Expositora'
    }
  ];

  const institutions = [
    {
      name: 'Asociación de Artistas Digitales de España',
      role: 'Miembro Activo',
      since: '2020',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Colegio Profesional de Bellas Artes',
      role: 'Colegiada',
      since: '2018',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Fundación Arte y Tecnología',
      role: 'Colaboradora',
      since: '2022',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Perfil de ${artistProfile.fullName} - ArtistLink`,
        text: `Conoce el trabajo de ${artistProfile.firstName}, artista especializada en ${artistProfile.categories[0]}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header del Perfil */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="h-48 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative">
            <button 
              onClick={handleShare}
              className="absolute top-4 right-4 bg-black bg-opacity-20 text-white p-2 rounded-lg hover:bg-opacity-30 transition-all flex items-center space-x-2"
            >
              <Share2 className="h-5 w-5" />
              <span className="hidden sm:inline">Compartir</span>
            </button>
          </div>
          
          <div className="px-8 pb-8 relative">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col lg:flex-row lg:items-end">
                {/* Fotografía del Artista */}
                <img 
                  src={artistProfile.photo} 
                  alt={artistProfile.fullName}
                  className="w-32 h-32 rounded-full border-6 border-white absolute -top-16 lg:relative lg:top-0 lg:-mt-16 object-cover shadow-lg"
                />
                
                <div className="pt-20 lg:pt-0 lg:ml-8">
                  {/* Nombre de pila destacado */}
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{artistProfile.firstName}</h1>
                  <p className="text-xl text-gray-600 mb-3">{artistProfile.fullName}</p>
                  
                  {/* Ubicación */}
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{artistProfile.location}</span>
                  </div>

                  {/* Ponderación RSC */}
                  <div className="flex items-center mb-4">
                    <span className="text-sm font-medium text-gray-600 mr-2">Ponderación RSC:</span>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-gray-900 ml-1">{artistProfile.rscRating}</span>
                      <span className="text-gray-500 ml-1">/5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col space-y-3 mt-6 lg:mt-0">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Leer Hoja de Vida
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Users className="h-5 w-5 mr-2" />
                  Conectar
                </button>
              </div>
            </div>

            {/* Firma del Artista */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Firma del Artista:</h3>
              <img 
                src={artistProfile.signature} 
                alt="Firma"
                className="h-16 object-contain bg-gray-50 rounded-lg p-2"
              />
            </div>
          </div>
        </div>

        {/* Obra Principal Destacada */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Obra Principal de Referencia</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={artistProfile.mainWork.image} 
                alt={artistProfile.mainWork.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{artistProfile.mainWork.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {artistProfile.mainWork.description}
              </p>
              <button className="flex items-center text-purple-600 hover:text-purple-800 font-medium">
                <Eye className="h-5 w-5 mr-2" />
                Ver Obra Completa
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-2">
            {/* Tabs de Navegación */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('destacadas')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'destacadas' 
                        ? 'border-purple-600 text-purple-600' 
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Obras Destacadas
                  </button>
                  <button
                    onClick={() => setActiveTab('eventos')}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'eventos' 
                        ? 'border-purple-600 text-purple-600' 
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Eventos Recientes
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'destacadas' && (
                  <div className="space-y-6">
                    {featuredWorks.map((work) => (
                      <div key={work.id} className="flex space-x-6 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                        <img 
                          src={work.image} 
                          alt={work.title}
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{work.title}</h4>
                          <p className="text-purple-600 font-medium mb-1">{work.category}</p>
                          <p className="text-gray-500 text-sm mb-2">{work.year}</p>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-2" />
                            <span className="text-sm text-gray-600">{work.recognition}</span>
                          </div>
                        </div>
                        <button className="text-purple-600 hover:text-purple-800">
                          <ExternalLink className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'eventos' && (
                  <div className="space-y-6">
                    {recentEvents.map((event) => (
                      <div key={event.id} className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.type === 'Creación' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categorías del Artista */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías del Artista</h3>
              <div className="flex flex-wrap gap-2">
                {artistProfile.categories.map((category) => (
                  <span 
                    key={category}
                    className="px-3 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* Instituciones y Organizaciones */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Instituciones y Organizaciones</h3>
              <div className="space-y-4">
                {institutions.map((institution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{institution.name}</h4>
                      <p className="text-sm text-purple-600">{institution.role}</p>
                      <p className="text-xs text-gray-500">Desde {institution.since}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;