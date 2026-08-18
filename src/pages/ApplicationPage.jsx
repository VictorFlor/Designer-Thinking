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
    <div className="min-h-screen bg-sky-200 text-slate-800 font-sans pb-10">
      {/* Header Limpo */}
      <header className="bg-blue-400 shadow-sm shadow-[0_8px_6px_-6px_rgba(0,0,0,0.2)] py-10 px-4 md:py-16 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Design Thinking
        </h1>
        <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto">
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

        {/* Por que Designer Thinking */}
        <section className="pb-6 px-4 flex flex-col justify-center items-center">
          <div className="text-center mb-6 md:mb-8 max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold border-b text-slate-900 mb-3 md:mb-4">
              Por que surgiu o Design Thinking?
            </h2>
            <p className="text-slate-600 text-base md:text-lg px-2">
              O mundo mudou e a forma de resolver problemas precisou evoluir junto.
            </p>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-slate-200 max-w-3xl w-full">
            <ul className="space-y-5 md:space-y-6 text-slate-700 text-base md:text-lg">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl leading-none mt-0.5 md:mt-0">🤷‍♂️</span>
                <span>Empresas muitas vezes criam soluções <strong>sem entender o usuário real</strong>.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl leading-none mt-0.5 md:mt-0">🧩</span>
                <span>Problemas complexos e modernos não possuem uma <strong>resposta óbvia</strong>.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl leading-none mt-0.5 md:mt-0">🚀</span>
                <span>Existe a necessidade latente de inovar, mas com <strong>menor risco</strong> financeiro.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-xl md:text-2xl leading-none mt-0.5 md:mt-0">🤝</span>
                <span>É preciso uma metodologia que aproxime <strong>negócio, tecnologia e pessoas</strong>.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tabela comparação */}
        <section className="bg-white text-slate-800 py-12 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto rounded-2xl shadow-lg my-8 border border-slate-200">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 pb-2">
              Design Thinking x métodos tradicionais
            </h2>
          </div>

          <div className="w-full">
            <table className="block md:table w-full text-left border-collapse">
              <thead className="hidden md:table-header-group">
                <tr className="border-b-2 border-slate-200 text-slate-800">
                  <th className="py-4 px-4 font-bold w-1/2">Abordagem tradicional</th>
                  <th className="py-4 px-4 font-bold w-1/2 text-blue-600">Design Thinking</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group divide-y divide-slate-100 text-sm md:text-base">
                <tr className="block md:table-row py-4 md:py-0">
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600">
                    <span className="md:hidden font-bold text-slate-900 block mb-1">Abordagem tradicional:</span>
                    Problema geralmente definido previamente
                  </td>
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600 pb-4 md:pb-0">
                    <span className="md:hidden font-bold text-blue-600 block mb-1">Design Thinking:</span>
                    Problema é investigado
                  </td>
                </tr>
                <tr className="block md:table-row py-4 md:py-0">
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600">
                    <span className="md:hidden font-bold text-slate-900 block mb-1">Abordagem tradicional:</span>
                    Solução pode ser definida antecipadamente
                  </td>
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600 pb-4 md:pb-0">
                    <span className="md:hidden font-bold text-blue-600 block mb-1">Design Thinking:</span>
                    Diversas soluções são exploradas
                  </td>
                </tr>
                <tr className="block md:table-row py-4 md:py-0">
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600">
                    <span className="md:hidden font-bold text-slate-900 block mb-1">Abordagem tradicional:</span>
                    Processo mais linear
                  </td>
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600 pb-4 md:pb-0">
                    <span className="md:hidden font-bold text-blue-600 block mb-1">Design Thinking:</span>
                    Processo iterativo
                  </td>
                </tr>
                <tr className="block md:table-row py-4 md:py-0">
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600">
                    <span className="md:hidden font-bold text-slate-900 block mb-1">Abordagem tradicional:</span>
                    Feedback geralmente ocorre mais tarde
                  </td>
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600 pb-4 md:pb-0">
                    <span className="md:hidden font-bold text-blue-600 block mb-1">Design Thinking:</span>
                    Feedback ocorre desde o início
                  </td>
                </tr>
                <tr className="block md:table-row py-4 md:py-0">
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600">
                    <span className="md:hidden font-bold text-slate-900 block mb-1">Abordagem tradicional:</span>
                    Maior foco em execução
                  </td>
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600 pb-4 md:pb-0">
                    <span className="md:hidden font-bold text-blue-600 block mb-1">Design Thinking:</span>
                    Maior foco em descoberta + execução
                  </td>
                </tr>
                <tr className="block md:table-row py-4 md:py-0">
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600">
                    <span className="md:hidden font-bold text-slate-900 block mb-1">Abordagem tradicional:</span>
                    Erros podem aparecer mais tarde
                  </td>
                  <td className="block md:table-cell px-4 py-2 md:py-4 text-slate-600 pb-4 md:pb-0">
                    <span className="md:hidden font-bold text-blue-600 block mb-1">Design Thinking:</span>
                    Busca descobrir erros rapidamente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Etapas */}
        <section>
          <h2 className="text-2xl text-center md:text-4xl font-bold border-b text-slate-900 mb-3 md:mb-4">As 5 Etapas</h2>
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

        {/* Ferramentas */}
        <section className="bg-white text-slate-800 py-12 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto rounded-2xl shadow-lg my-8 border border-slate-200">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Ferramentas por Etapa do Processo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  01
                </span>
                <h3 className="font-bold text-slate-900 text-lg">Entender o Usuário</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 ml-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Mapa de Empatia
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Persona
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Jornada do Usuário
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  02
                </span>
                <h3 className="font-bold text-slate-900 text-lg">Definir o Problema</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 ml-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  5 Porquês
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  How Might We?
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Problem Statement
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  03
                </span>
                <h3 className="font-bold text-slate-900 text-lg">Gerar Ideias</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 ml-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Brainstorming
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Crazy 8s
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  SCAMPER
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  04
                </span>
                <h3 className="font-bold text-slate-900 text-lg">Prototipar</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 ml-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Protótipo de Papel
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Wireframe
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  MVP
                </li>
              </ul>
            </div>

            <div className="order-first md:order-none rounded-xl overflow-hidden shadow-sm border border-slate-200 h-full min-h-[200px] flex items-center justify-center md:col-span-2 lg:col-span-1 bg-slate-100 mb-2 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe trabalhando com Design Thinking e post-its" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold">
                  05
                </span>
                <h3 className="font-bold text-slate-900 text-lg">Validar</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 ml-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Testes com Usuários
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Testes A/B
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Coleta de Feedback
                </li>
              </ul>
            </div>

          </div>
        </section>

        <section className="px-4 max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Uma visão realista da metodologia
            </h2>
            <p className="text-slate-600 text-base md:text-lg px-2">
              Mostrar as limitações do Design Thinking diferencia o seu trabalho, provando que você entende que nenhuma metodologia é uma "bala de prata" para todos os problemas.
            </p>
          </div>

          {/* PARTE 1: Limitações e Críticas (Grid de 4 itens) */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="text-amber-500">⚠️</span> Principais Limitações
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-amber-50/50 p-5 md:p-6 rounded-xl border border-amber-100">
                <h4 className="font-bold text-slate-900 mb-2">Exige tempo e recursos</h4>
                <p className="text-slate-600 text-sm md:text-base">
                  O processo não é imediato. Ele pode consumir bastante tempo e depende inteiramente da participação ativa e disponibilidade dos usuários.
                </p>
              </div>
              <div className="bg-amber-50/50 p-5 md:p-6 rounded-xl border border-amber-100">
                <h4 className="font-bold text-slate-900 mb-2">Risco de dispersão</h4>
                <p className="text-slate-600 text-sm md:text-base">
                  É fácil gerar um excesso de ideias geniais, mas falhar na hora de tomar decisões ou de transformar essas ideias em algo tecnicamente viável.
                </p>
              </div>
              <div className="bg-amber-50/50 p-5 md:p-6 rounded-xl border border-amber-100">
                <h4 className="font-bold text-slate-900 mb-2">Resultados subjetivos</h4>
                <p className="text-slate-600 text-sm md:text-base">
                  Como lida muito com empatia e comportamento, os dados nem sempre são exatos, o que pode gerar resistência em culturas corporativas tradicionais.
                </p>
              </div>
              <div className="bg-amber-50/50 p-5 md:p-6 rounded-xl border border-amber-100">
                <h4 className="font-bold text-slate-900 mb-2">Não substitui o essencial</h4>
                <p className="text-slate-600 text-sm md:text-base">
                  Design Thinking é para inovação e descoberta. Ele não substitui o planejamento rígido, a gestão financeira e a análise técnica do projeto.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Equipe reunida analisando estratégias e planejamento" 
              className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* PARTE 2: Quando usar x Quando NÃO usar (Comparativo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Quando Usar */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-t-4 border-t-emerald-500 border-x border-b border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Quando USAR</h3>
              </div>
              <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>O problema é <strong>complexo</strong> e não possui resposta óbvia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>As reais necessidades dos usuários <strong>não estão claras</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>Existe uma grande necessidade de <strong>inovação</strong> e quebra de padrões.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>O <strong>custo de errar</strong> na solução final é alto demais.</span>
                </li>
              </ul>
            </div>

            {/* Quando NÃO Usar */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-t-4 border-t-rose-500 border-x border-b border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-lg">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-slate-900">Quando NÃO usar</h3>
              </div>
              <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>O problema é simples, comum e <strong>já está claramente definido</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>Já existe uma <strong>solução técnica conhecida</strong> e validada pelo mercado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>O projeto possui escopo e <strong>requisitos extremamente rígidos</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>Não há tempo ou viabilidade para <strong>interagir com usuários</strong>.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Exemplos e Links */}
        <section className="bg-blue-50 p-6 md:p-8 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-900">Referências</h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <a href="https://www.youtube.com/watch?v=0M9G70OpT6U" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 bg-white sm:bg-transparent px-4 py-2 sm:p-0 rounded border border-blue-200 sm:border-none text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Tim Brown - Designers [youtube] <ArrowRight size={16} />
              </a>
              <a href="https://www.youtube.com/watch?v=5xRSOltxXnU" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 bg-white sm:bg-transparent px-4 py-2 sm:p-0 rounded border border-blue-200 sm:border-none text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Design Thinking: O que é... [youtube] <ArrowRight size={16} />
              </a>
              <a href="https://www.ibm.com/br-pt/think/topics/design-thinking" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 bg-white sm:bg-transparent px-4 py-2 sm:p-0 rounded border border-blue-200 sm:border-none text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Artigo IBM <ArrowRight size={16} />
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