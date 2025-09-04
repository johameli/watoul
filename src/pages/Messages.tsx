import React, { useState } from 'react';
import { Search, Send, Paperclip, Smile, MoreVertical } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 0,
      name: 'Carlos Ruiz',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'Me encanta tu último trabajo. ¿Podríamos colaborar en un proyecto?',
      timestamp: '10:30',
      unread: 2,
      online: true
    },
    {
      id: 1,
      name: 'Ana Martínez',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'Gracias por la invitación a la exposición',
      timestamp: 'Ayer',
      unread: 0,
      online: false
    },
    {
      id: 2,
      name: 'Elena Rodríguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: '¿Tienes tiempo para revisar mi portafolio?',
      timestamp: 'Lun',
      unread: 1,
      online: true
    },
    {
      id: 3,
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'El cliente aprobó el concept art 🎉',
      timestamp: 'Dom',
      unread: 0,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Carlos Ruiz',
      content: '¡Hola María! Vi tu último proyecto en el feed y me pareció increíble.',
      timestamp: '10:25',
      isMine: false
    },
    {
      id: 2,
      sender: 'Me',
      content: '¡Muchas gracias Carlos! Me alegra que te haya gustado. Fue un proyecto muy desafiante.',
      timestamp: '10:27',
      isMine: true
    },
    {
      id: 3,
      sender: 'Carlos Ruiz',
      content: 'Me encanta tu estilo. ¿Estarías interesada en colaborar en un proyecto que tengo en mente? Es para un cliente internacional.',
      timestamp: '10:30',
      isMine: false
    },
    {
      id: 4,
      sender: 'Carlos Ruiz',
      content: 'Podríamos combinar tu técnica digital con mi experiencia en pintura tradicional.',
      timestamp: '10:30',
      isMine: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-[calc(100vh-12rem)]">
          <div className="flex h-full">
            {/* Conversations Sidebar */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Mensajes</h1>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar conversaciones..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Conversations List */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      selectedChat === conversation.id ? 'bg-purple-50 border-r-4 border-r-purple-600' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img 
                          src={conversation.avatar} 
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <div className="bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={conversations[selectedChat].avatar} 
                        alt={conversations[selectedChat].name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {conversations[selectedChat].online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{conversations[selectedChat].name}</h2>
                      <p className="text-sm text-gray-500">
                        {conversations[selectedChat].online ? 'En línea' : 'Visto hace 2h'}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
                      {!message.isMine && (
                        <img 
                          src={conversations[selectedChat].avatar} 
                          alt={message.sender}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <div className={`px-4 py-3 rounded-2xl ${
                          message.isMine 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="leading-relaxed">{message.content}</p>
                        </div>
                        <p className={`text-xs text-gray-500 mt-1 ${message.isMine ? 'text-right' : 'text-left'}`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Escribe tu mensaje..."
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Smile className="h-5 w-5" />
                    </button>
                  </div>
                  <button 
                    onClick={handleSendMessage}
                    className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;