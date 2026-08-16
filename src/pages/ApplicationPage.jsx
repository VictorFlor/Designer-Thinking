import { ArrowRight, Users, Lightbulb, PenTool, CheckCircle, Search, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PresentationPage() {
  const steps = [
    { icon: <Users />, title: "1. Empatia", desc: "Entender profundamente o usuário e o contexto do problema. Para engenheiros: não é só sobre 'funcionar', é sobre 'quem' vai usar." },
    { icon: <Search />, title: "2. Definição", desc: "Sintetizar as descobertas para definir o problema real. Qual é a dor exata que estamos resolvendo?" },
    { icon: <Lightbulb />, title: "3. Ideação", desc: "Brainstorming sem julgamentos. Gerar o máximo de soluções possíveis (pensamento divergente)." },
    { icon: <PenTool />, title: "4. Prototipação", desc: "Criar versões tangíveis e baratas. Falhar rápido e barato para aprender logo, antes de investir no código final." },
    { icon: <CheckCircle />, title: "5. Teste", desc: "Validar os protótipos com usuários reais. Voltar às fases anteriores com base no feedback colhido." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      
      {/* Header Limpo */}
      <header className="bg-white shadow-sm py-10 px-4 md:py-16 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Design Thinking
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Uma abordagem focada no ser humano. Porque construir o sistema mais otimizado do mundo não adianta nada se ninguém conseguir usá-lo.
        </p>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-5xl mx-auto py-8 px-4 md:py-12 space-y-12 md:space-y-16">
        
        {/* Imagem do Framework */}
        <section className="flex justify-center">
          <div className="bg-white p-3 md:p-4 rounded-xl shadow-md border border-slate-100 max-w-3xl w-full">
            <img 
              src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSBT1_hE27mf-6tcJzsj8Mth6_homFZ6TtBWksslfeOraiqM-mcUjkRtG_8FUA7lPCyiGZTpJJnGlZy10" 
              alt="Diagrama das 5 etapas do Design Thinking" 
              className="w-full h-auto rounded object-contain"
            />
            <p className="text-center text-xs md:text-sm text-slate-500 mt-2">O processo iterativo e não linear do Design Thinking.</p>
          </div>
        </section>

        {/* Etapas */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b pb-2">As 5 Etapas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-5 md:p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exemplos e Links */}
        <section className="bg-blue-50 p-6 md:p-8 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-900">Exemplos Práticos & Referências</h2>
          <div className="space-y-4">
            <p className="text-sm md:text-base text-blue-800">
              <strong>Caso de Estudo:</strong> Como a GE Healthcare redesenhou as máquinas de ressonância magnética (que aterrorizavam crianças) transformando-as em "Aventuras de Pirata", reduzindo drasticamente a necessidade de sedação infantil simplesmente aplicando <em>Empatia</em>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <a href="https://hbr.org/2008/06/design-thinking" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 bg-white sm:bg-transparent px-4 py-2 sm:p-0 rounded border border-blue-200 sm:border-none text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Artigo da HBR <ArrowRight size={16} />
              </a>
              <a href="https://www.nngroup.com/articles/design-thinking/" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 bg-white sm:bg-transparent px-4 py-2 sm:p-0 rounded border border-blue-200 sm:border-none text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Nielsen Norman Group <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="flex justify-center pt-8 border-t border-slate-200">
          <Link 
            to="/resolved"
            className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-sans text-lg md:text-xl rounded-full shadow-lg hover:bg-slate-800 transition-all active:scale-95"
          >
            Ver Aplicação na Prática <Play size={20} fill="currentColor" />
          </Link>
        </section>

      </main>
    </div>
  );
}