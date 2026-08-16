import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Activity, Database, Cpu } from 'lucide-react';

export default function IntroPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [inputSequence, setInputSequence] = useState('');
  const [tapCount, setTapCount] = useState(0); // Gatilho para mobile
  const navigate = useNavigate();

  // Gatilho Desktop: Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      setInputSequence((prev) => {
        const newSeq = (prev + key).slice(-5);
        if (newSeq === 'start') setUnlocked(true);
        return newSeq;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Gatilho Mobile: 5 toques no ícone de alerta
  const handleSecretTap = () => {
    setTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 5) setUnlocked(true);
      return newCount;
    });
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-2 md:p-4 relative">
      
      {/* Top Bar Caótica */}
      <header className="flex flex-col md:flex-row justify-between border-b border-green-800 pb-2 mb-4 gap-2">
        <div className="flex gap-4 items-center">
          {/* O ÍCONE ABAIXO É O BOTÃO SECRETO NO MOBILE */}
          <AlertTriangle 
            className="animate-pulse text-red-500 cursor-pointer" 
            onClick={handleSecretTap}
          />
          <h1 className="text-lg md:text-xl tracking-widest truncate">SYS.CORE.V9.8.4</h1>
        </div>
        <div className="text-[10px] md:text-xs flex justify-between md:text-right gap-4">
          <p>MEM: 104% OVERLOAD</p>
          <p className="text-red-500">TEMP: 94°C [CRIT]</p>
        </div>
      </header>

      {/* Grid de Informações Confusas - Ajustado para mobile */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:h-[80vh]">
        
        {/* Painel 1 - Gráficos */}
        <div className="border border-green-800 p-2 md:p-4 flex flex-col gap-2 h-48 md:h-auto">
          <h2 className="border-b border-green-800 pb-1 flex items-center gap-2 text-sm md:text-base">
            <Activity size={16}/> FLUXO DE DADOS
          </h2>
          <div className="flex-1 bg-green-900/20 relative overflow-hidden flex items-end">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="w-full bg-green-500 mx-[1px] animate-pulse" 
                style={{ height: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 2}s` }}
              />
            ))}
          </div>
          <p className="text-[8px] md:text-[10px] break-all opacity-50">
            0x00F8A 0x11B2C 0x99F0E 0xAAA12 0x00F8A
          </p>
        </div>

        {/* Painel 2 - Botões inúteis */}
        <div className="border border-green-800 p-2 md:p-4">
          <h2 className="border-b border-green-800 pb-1 flex items-center gap-2 text-sm md:text-base">
            <Cpu size={16}/> CONTROLE DE MATRIZ
          </h2>
          <div className="grid grid-cols-4 gap-1 md:gap-2 mt-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <button 
                key={i} 
                className="p-1 md:p-2 border border-green-700 hover:bg-green-800 text-[10px] md:text-xs transition-colors"
                onClick={() => alert('ERRO: PERMISSÃO NEGADA')}
              >
                {Math.random().toString(36).substring(2, 5).toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Painel 3 - Logs infinitos */}
        <div className="border border-green-800 p-2 md:p-4 flex flex-col gap-2 h-48 md:h-auto">
          <h2 className="border-b border-green-800 pb-1 flex items-center gap-2 text-sm md:text-base">
            <Database size={16}/> LOGS DO SISTEMA
          </h2>
          <div className="flex-1 overflow-hidden text-[8px] md:text-[10px] leading-tight space-y-1">
             {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className={i % 3 === 0 ? 'text-red-500' : 'text-green-600'}>
                [{new Date().toISOString()}] {i % 3 === 0 ? 'FATAL ERROR' : 'SYNC OK'}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Botão de Avançar Secreto - Usando 'fixed' para cobrir a tela toda no mobile */}
      {unlocked && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center backdrop-blur-sm z-50 p-4">
          <div className="text-center space-y-6 max-w-sm">
            <p className="text-xl md:text-2xl text-white font-sans">Sistema muito confuso, não é?</p>
            <button 
              onClick={() => navigate('/presentation')}
              className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-sans text-lg md:text-xl rounded shadow-lg hover:bg-blue-500 transition-all active:scale-95"
            >
              Como resolver isso
            </button>
          </div>
        </div>
      )}
    </div>
  );
}