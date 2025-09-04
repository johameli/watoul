import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Plus, TrendingUp } from 'lucide-react';

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Carlos Ruiz',
        title: 'Pintor Contemporáneo',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      content: 'Acabando mi nueva serie "Fragmentos Urbanos". Después de 6 meses de trabajo, finalmente veo la luz al final del túnel. ¿Qué opinan del uso del color en esta pieza?',
      image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 127,
      comments: 23,
      timeAgo: '2h'
    },
    {
      id: 2,
      author: {
        name: 'Ana Martínez',
        title: 'Escultora & Artista 3D',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      content: '🎉 ¡Increíble noticia! Mi escultura "Metamorfosis" ha sido seleccionada para la Bienal de Venecia 2025. Gracias a todos por el apoyo constante. Este es solo el comienzo.',
      likes: 245,
      comments: 56,
      timeAgo: '4h'
    },
    {
      id: 3,
      author: {
        name: 'Diego Fernández',
        title: 'Fotógrafo de Moda',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      content: 'Sesión increíble con @MarcaX para su nueva campaña. El equipo fue fantástico y los resultados hablan por sí mismos. ¿Colaboraciones futuras? 📸',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 189,
      comments: 31,
      timeAgo: '6h'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="h-20 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="px-6 pb-6 relative">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 left-6 object-cover"
                />
                <div className="pt-12">
                  <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600 mb-2">{user.title}</p>
                  <p className="text-sm text-gray-500 mb-4">{user.location}</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-purple-600">{user.connections}</span> conexiones
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tu Actividad</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Vistas del perfil</span>
                  <span className="font-semibold text-teal-600">+23%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nuevas conexiones</span>
                  <span className="font-semibold text-purple-600">+12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interacciones</span>
                  <span className="font-semibold text-orange-600">+45%</span>
                </div>
              </div>
              <button className="w-full mt-4 text-purple-600 hover:text-purple-800 font-medium transition-colors flex items-center justify-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Ver Analíticas Completas
              </button>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Create Post */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <button className="flex-1 text-left px-4 py-3 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                  ¿Qué quieres compartir con la comunidad?
                </button>
                <button className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all">
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  {/* Post Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{post.author.name}</h4>
                          <p className="text-sm text-gray-600">{post.author.title}</p>
                          <p className="text-xs text-gray-500">{post.timeAgo}</p>
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="px-6 pb-4">
                    <p className="text-gray-800 leading-relaxed">{post.content}</p>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="px-6 pb-4">
                      <img 
                        src={post.image} 
                        alt="Post content"
                        className="w-full h-80 object-cover rounded-xl"
                      />
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="px-6 py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="h-5 w-5" />
                          <span className="text-sm font-medium">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                          <MessageCircle className="h-5 w-5" />
                          <span className="text-sm font-medium">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                          <Share2 className="h-5 w-5" />
                          <span className="text-sm font-medium">Compartir</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;