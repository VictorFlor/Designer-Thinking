import { CheckCircle2, Activity, List, LayoutGrid, Download, RefreshCw, Power, RotateCcw, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResolvedDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 md:p-8">
      
      {/* Header Focado e Limpo */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 md:p-6 rounded-2xl shadow-sm mb-6 md:mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Painel de Controle v10.0</h1>
          <p className="text-slate-500 text-sm md:text-base">Interface redesenhada com foco no operador</p>
        </div>
        <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 w-full md:w-auto">
          <CheckCircle2 className="text-emerald-500" size={24} />
          <div>
            <p className="text-emerald-900 font-bold text-sm md:text-base">Sistema Operacional</p>
            <p className="text-emerald-700 text-xs">Memória: 42% | Temp: 45°C</p>
          </div>
        </div>
      </header>

      {/* Grid de Informações Claras - Mesmas funções, novo design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Painel 1 - Monitoramento (Antigo Fluxo de Dados) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-700 border-b pb-2">
            <Activity className="text-blue-500" /> Monitoramento
          </h2>
          <div className="flex-1 flex flex-col justify-center gap-6 py-4">
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Tráfego de Rede (RX/TX)</span>
                <span className="text-blue-600">Normal</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full w-[45%] transition-all"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Processamento (CPU)</span>
                <span className="text-emerald-600">Estável</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-emerald-500 h-3 rounded-full w-[30%] transition-all"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Painel 2 - Ações (Antigo Controle de Matriz) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-700 border-b pb-2">
            <LayoutGrid className="text-purple-500" /> Ações Rápidas
          </h2>
          {/* Botões grandes, com ícones claros e fáceis de tocar no mobile */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="flex items-center justify-center md:justify-start gap-3 w-full p-4 bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold rounded-xl border border-purple-200 transition-colors active:scale-95">
              <RefreshCw size={20} /> Sincronizar Dados
            </button>
            <button className="flex items-center justify-center md:justify-start gap-3 w-full p-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors active:scale-95">
              <Download size={20} /> Baixar Relatório
            </button>
            <button className="flex items-center justify-center md:justify-start gap-3 w-full p-4 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded-xl border border-red-200 transition-colors active:scale-95">
              <Power size={20} /> Parada de Emergência
            </button>
          </div>
        </div>

        {/* Painel 3 - Logs (Antigo Logs Infinitos) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-700 border-b pb-2">
            <List className="text-amber-500" /> Últimos Eventos
          </h2>
          <div className="flex-1 space-y-4 mt-2">
            {/* Logs legíveis, agrupados por cor, limitados para não gerar scroll infinito */}
            <div className="flex gap-3 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-800">Sincronização concluída</p>
                <p className="text-xs text-slate-500">Hoje, 14:32</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-800">Backup diário automático gerado</p>
                <p className="text-xs text-slate-500">Hoje, 12:00</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-800">Login do Administrador aprovado</p>
                <p className="text-xs text-slate-500">Hoje, 09:15</p>
              </div>
            </div>
          </div>
          <button className="mt-4 text-sm text-blue-600 font-medium text-center hover:underline p-2">
            Ver histórico completo
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link 
          to="/presentation"
          className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-medium text-base md:text-lg rounded-full shadow-lg hover:bg-slate-700 transition-colors active:scale-95"
        >
          <RotateCcw size={20} /> Voltar para Apresentação
        </Link>

        <a 
          href="https://gemini.google.com/u/1/app/a05752e1fc3035dc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-blue-50 text-blue-700 font-medium text-base md:text-lg rounded-full border border-blue-200 hover:bg-blue-100 transition-colors active:scale-95 shadow-sm"
        >
          <MessageSquare size={20} /> Ver Prompts da IA
        </a>
      </div>


    </div>
  );
}