import React, { useState } from 'react';
import { Search, Filter, UserPlus, MessageCircle, MapPin } from 'lucide-react';

const Network: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const artists = [
    {
      id: 1,
      name: 'Elena Rodríguez',
      title: 'Ilustradora Editorial',
      location: 'Madrid, España',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 456,
      specialty: 'Ilustración',
      isConnected: false,
      mutualConnections: 12
    },
    {
      id: 2,
      name: 'Roberto Silva',
      title: 'Fotógrafo de Retrato',
      location: 'São Paulo, Brasil',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 789,
      specialty: 'Fotografía',
      isConnected: true,
      mutualConnections: 28
    },
    {
      id: 3,
      name: 'Lucia Chen',
      title: 'Artista 3D & Animadora',
      location: 'Tokio, Japón',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 1234,
      specialty: 'Arte 3D',
      isConnected: false,
      mutualConnections: 5
    },
    {
      id: 4,
      name: 'Marco Antonelli',
      title: 'Escultor Contemporáneo',
      location: 'Roma, Italia',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 567,
      specialty: 'Escultura',
      isConnected: false,
      mutualConnections: 8
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      title: 'Directora Creativa',
      location: 'Nueva York, EE.UU.',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 2341,
      specialty: 'Dirección Creativa',
      isConnected: true,
      mutualConnections: 34
    },
    {
      id: 6,
      name: 'David Kim',
      title: 'Concept Artist',
      location: 'Seúl, Corea del Sur',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      connections: 890,
      specialty: 'Concept Art',
      isConnected: false,
      mutualConnections: 19
    }
  ];

  const filters = [
    { key: 'todos', label: 'Todos' },
    { key: 'ilustracion', label: 'Ilustración' },
    { key: 'fotografia', label: 'Fotografía' },
    { key: 'arte3d', label: 'Arte 3D' },
    { key: 'escultura', label: 'Escultura' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tu Red Artística</h1>
          <p className="text-gray-600">Conecta con artistas talentosos de todo el mundo</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar artistas por nombre, especialidad o ubicación..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
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
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={artist.avatar} 
                      alt={artist.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{artist.title}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    artist.specialty === 'Ilustración' ? 'bg-purple-100 text-purple-600' :
                    artist.specialty === 'Fotografía' ? 'bg-blue-100 text-blue-600' :
                    artist.specialty === 'Arte 3D' ? 'bg-green-100 text-green-600' :
                    artist.specialty === 'Escultura' ? 'bg-orange-100 text-orange-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {artist.specialty}
                  </span>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{artist.location}</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    {artist.connections.toLocaleString()} conexiones
                  </p>
                  {artist.mutualConnections > 0 && (
                    <p className="text-xs text-purple-600 font-medium">
                      {artist.mutualConnections} conexiones mutuas
                    </p>
                  )}
                </div>

                <div className="flex space-x-3">
                  {artist.isConnected ? (
                    <>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        Conectado
                      </button>
                      <button className="flex items-center justify-center p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Conectar
                      </button>
                      <button className="flex items-center justify-center p-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Cargar Más Artistas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Network;