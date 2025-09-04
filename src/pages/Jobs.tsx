import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Bookmark, ExternalLink, Filter } from 'lucide-react';

const Jobs: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const jobs = [
    {
      id: 1,
      title: 'Ilustrador Senior para Campaña Digital',
      company: 'Agencia Creativa Premium',
      location: 'Madrid, España',
      type: 'Freelance',
      salary: '€3,000 - €5,000',
      posted: '2 días',
      description: 'Buscamos un ilustrador experimentado para crear una serie de ilustraciones digitales para una campaña publicitaria internacional.',
      skills: ['Illustrator', 'Photoshop', 'Concept Art'],
      urgent: false
    },
    {
      id: 2,
      title: 'Artista Concept para Videojuego AAA',
      company: 'GameStudio Internacional',
      location: 'Barcelona, España',
      type: 'Tiempo Completo',
      salary: '€45,000 - €65,000/año',
      posted: '1 semana',
      description: 'Únete a nuestro equipo para crear arte conceptual para un próximo videojuego de aventuras.',
      skills: ['Concept Art', 'Digital Painting', 'Character Design'],
      urgent: true
    },
    {
      id: 3,
      title: 'Fotógrafo de Producto',
      company: 'E-commerce Fashion',
      location: 'Remoto',
      type: 'Por Proyecto',
      salary: '€2,500',
      posted: '3 días',
      description: 'Necesitamos un fotógrafo especializado en producto para sesión de moda sostenible.',
      skills: ['Fotografía de Producto', 'Iluminación', 'Retoque'],
      urgent: false
    },
    {
      id: 4,
      title: 'Muralista para Proyecto Público',
      company: 'Ayuntamiento de Valencia',
      location: 'Valencia, España',
      type: 'Encargo',
      salary: '€15,000',
      posted: '5 días',
      description: 'Arte público para revitalización urbana. Mural de gran formato en zona céntrica.',
      skills: ['Arte Mural', 'Spray', 'Arte Público'],
      urgent: false
    },
    {
      id: 5,
      title: 'Director de Arte - Startup Tech',
      company: 'TechVision AI',
      location: 'Bilbao, España',
      type: 'Tiempo Completo',
      salary: '€50,000 - €70,000/año',
      posted: '1 día',
      description: 'Liderar la dirección visual de una startup innovadora en inteligencia artificial.',
      skills: ['Dirección de Arte', 'Branding', 'UI/UX'],
      urgent: true
    },
    {
      id: 6,
      title: 'Ilustrador Infantil',
      company: 'Editorial Sueños',
      location: 'Sevilla, España',
      type: 'Freelance',
      salary: '€4,000 - €8,000',
      posted: '4 días',
      description: 'Ilustraciones para serie de libros infantiles. Estilo colorido y amigable.',
      skills: ['Ilustración Infantil', 'Acuarela', 'Storytelling'],
      urgent: false
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos los Trabajos' },
    { key: 'freelance', label: 'Freelance' },
    { key: 'tiempo-completo', label: 'Tiempo Completo' },
    { key: 'proyecto', label: 'Por Proyecto' },
    { key: 'urgente', label: 'Urgente' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Oportunidades Creativas</h1>
          <p className="text-gray-600">Encuentra trabajos perfectos para tu talento artístico</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar trabajos por título, empresa o habilidades..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-5 w-5 mr-2 text-gray-400" />
              Filtros Avanzados
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors cursor-pointer">
                          {job.title}
                        </h3>
                        {job.urgent && (
                          <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                            Urgente
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-purple-600 font-medium">{job.company}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <span className="text-gray-500">Publicado hace {job.posted}</span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-6">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center">
                    Aplicar Ahora
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Más Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Cargar Más Trabajos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;