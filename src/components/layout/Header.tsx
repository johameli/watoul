import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, MessageCircle, Home, Users, Briefcase, User, LogOut, Palette } from 'lucide-react';
/*import { LogoWatoul } from './img/Mejorado.svg';*/

interface HeaderProps {
  isLoggedIn: boolean;
  user?: any;
  onLogin: () => void;
  onLogout: () => void;     
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, onLogin, onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Watoul
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          {isLoggedIn && (
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar artistas, obras, oportunidades..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <nav className="hidden md:flex space-x-6">
                  <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors">
                    <Home className="h-5 w-5" />
                    <span className="text-xs mt-1">Inicio</span>
                  </Link>
                  <Link to="/network" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors">
                    <Users className="h-5 w-5" />
                    <span className="text-xs mt-1">Red</span>
                  </Link>
                  <Link to="/jobs" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors">
                    <Briefcase className="h-5 w-5" />
                    <span className="text-xs mt-1">Trabajos</span>
                  </Link>
                  <Link to="/messages" className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-xs mt-1">Mensajes</span>
                  </Link>
                </nav>

                <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>

                <div className="flex items-center space-x-3 pl-4 border-l border-gray-300">
                  <img 
                    src={user?.avatar} 
                    alt={user?.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="hidden sm:block">
                    <Link to="/profile" className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors">
                      {user?.name}
                    </Link>
                  </div>
                  <button 
                    onClick={onLogout}
                    className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={onLogin}
                  className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
                >
                  Iniciar Sesión
                </button>
                <button 
                  onClick={onLogin}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                >
                  Únete Gratis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;