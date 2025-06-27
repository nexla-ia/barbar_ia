import React, { useState } from 'react';
import { Calendar, Clock, User, Scissors, History, Star, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function ClientDashboard() {
  const { user } = useAuth();
  const [showBooking, setShowBooking] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative bg-[#222] text-white rounded-xl border border-[#333] p-6 max-w-md w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-black mb-2">Bem-vindo, {user?.name}!</h1>
        <p className="text-gray-700">Gerencie seus agendamentos e acompanhe seu histórico de serviços.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setShowBooking(true)}
        >
          <div className="flex items-center space-x-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-black">Agendar</h3>
              <p className="text-sm text-gray-700">Marque um novo horário</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setShowAppointments(true)}
        >
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-black">Meus Agendamentos</h3>
              <p className="text-sm text-gray-700">Visualize ou cancele</p>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setShowProfile(true)}
        >
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-black">Meu Perfil</h3>
              <p className="text-sm text-gray-700">Atualize suas informações</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-black mb-4">Próximos Agendamentos</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Scissors className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-black">Corte + Barba</h3>
                <p className="text-sm text-gray-700">Hoje, 15:30 • João Silva</p>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Confirmado
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Scissors className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-black">Barba</h3>
                <p className="text-sm text-gray-700">15/07, 14:00 • Pedro Santos</p>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Pendente
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service History */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-black">Histórico de Serviços</h2>
          <button onClick={() => setShowHistory(true)} className="text-sm text-amber-600 hover:text-amber-700">
            Ver todos
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-200 p-3 rounded-full">
                <History className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h3 className="font-medium text-black">Corte de Cabelo</h3>
                <p className="text-sm text-gray-700">01/07/2024 • João Silva</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">5.0</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-200 p-3 rounded-full">
                <History className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h3 className="font-medium text-black">Corte + Barba</h3>
                <p className="text-sm text-gray-700">15/06/2024 • Pedro Santos</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">4.8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-black mb-4">Programa de Fidelidade</h2>

        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-black">Nível Bronze</h3>
              <p className="text-sm text-gray-700">150 pontos acumulados</p>
            </div>
            <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">150 pts</div>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4">
            <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
          </div>

          <p className="text-sm text-gray-700 mb-4">Faltam 350 pontos para o próximo nível (Prata)</p>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-black mb-2">Benefícios Disponíveis</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                <span>5% de desconto em todos os serviços</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                <span>Presente de aniversário</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {showBooking && (
        <Modal onClose={() => setShowBooking(false)}>
          <h3 className="text-xl font-bold mb-4">Agendar Horário</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Serviço</label>
              <select className="w-full px-3 py-2 bg-[#333] border border-[#444] rounded text-white">
                <option>Corte de Cabelo</option>
                <option>Barba</option>
                <option>Corte + Barba</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Data</label>
                <input type="date" className="w-full px-3 py-2 bg-[#333] border border-[#444] rounded text-white" />
              </div>
              <div>
                <label className="block text-sm mb-1">Horário</label>
                <input type="time" className="w-full px-3 py-2 bg-[#333] border border-[#444] rounded text-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Observações</label>
              <textarea rows={3} className="w-full px-3 py-2 bg-[#333] border border-[#444] rounded text-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-500 text-black py-2 rounded font-bold">Confirmar</button>
          </form>
        </Modal>
      )}

      {showAppointments && (
        <Modal onClose={() => setShowAppointments(false)}>
          <h3 className="text-xl font-bold mb-4">Meus Agendamentos</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-[#333] p-3 rounded">
              <p>Corte de Cabelo - 20/07/2024 às 15:00</p>
              <p className="text-green-400">Confirmado</p>
            </div>
            <div className="bg-[#333] p-3 rounded">
              <p>Barba - 25/07/2024 às 14:00</p>
              <p className="text-yellow-400">Pendente</p>
            </div>
            <div className="bg-[#333] p-3 rounded">
              <p>Corte + Barba - 30/07/2024 às 16:00</p>
              <p className="text-green-400">Confirmado</p>
            </div>
          </div>
        </Modal>
      )}

      {showProfile && (
        <Modal onClose={() => { setShowProfile(false); setEditProfile(false); }}>
          <h3 className="text-xl font-bold mb-4">Meu Perfil</h3>
          {editProfile ? (
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Nome</label>
                <input defaultValue="Cliente Exemplo" className="w-full px-3 py-2 bg-[#333] border border-[#444] rounded text-white" />
              </div>
              <div>
                <label className="block text-sm mb-1">Telefone</label>
                <input defaultValue="(11) 99999-9999" className="w-full px-3 py-2 bg-[#333] border border-[#444] rounded text-white" />
              </div>
              <div>
                <label className="block text-sm mb-1">E-mail</label>
                <input defaultValue="cliente@example.com" className="w-full px-3 py-2 bg-[#333] border border-[#444] rounded text-white" />
              </div>
              <button type="button" onClick={() => setEditProfile(false)} className="w-full bg-amber-500 text-black py-2 rounded font-bold">
                Salvar
              </button>
            </form>
          ) : (
            <div className="space-y-2 text-sm">
              <p><strong>Nome:</strong> Cliente Exemplo</p>
              <p><strong>Telefone:</strong> (11) 99999-9999</p>
              <p><strong>E-mail:</strong> cliente@example.com</p>
              <button type="button" onClick={() => setEditProfile(true)} className="w-full mt-4 bg-amber-500 text-black py-2 rounded font-bold">
                Editar
              </button>
            </div>
          )}
        </Modal>
      )}

      {showHistory && (
        <Modal onClose={() => setShowHistory(false)}>
          <h3 className="text-xl font-bold mb-4">Histórico de Serviços</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-[#333] p-3 rounded">Corte de Cabelo - 01/07/2024 - João Silva</div>
            <div className="bg-[#333] p-3 rounded">Corte + Barba - 15/06/2024 - Pedro Santos</div>
            <div className="bg-[#333] p-3 rounded">Barba - 20/05/2024 - João Silva</div>
          </div>
        </Modal>
      )}
    </div>
  );
}
