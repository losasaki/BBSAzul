"use client";

  import dynamic from "next/dynamic";

// Isto diz ao Next.js para só carregar o mapa quando a página já estiver aberta no navegador
const InteractiveMap = dynamic(
  () => import("../mapa/components/InteractiveMap"),
  { ssr: false }
);
import { MapPin } from "lucide-react"; 
import { useState } from "react";
import Image from "next/image";

const dadosDasPraias: Record<string, { 
  titulo: string; 
  descricao: string; 
  foto: string;
  estrelas: number;
  statusAgua: string;
  historicoBalneabilidade: string;
  coletaSeletiva: string;
  bandeiraAzul: string;
}> = {
  mariscal: {
    titulo: "Praia de Mariscal",
    descricao: "Conhecida por sua extensa faixa de areia branca e águas limpas e cristalinas.",
    foto: "/mariscal.jpg",
    estrelas: 5,
    statusAgua: "Excelente! Água própria para banho em todos os pontos monitorados.",
    historicoBalneabilidade: "Histórico altamente positivo, mantendo o índice de própria durante quase todo o ano.",
    coletaSeletiva: "Disponível ao longo de toda a orla da praia com lixeiras identificadas para recicláveis.",
    bandeiraAzul: "Certificada com o selo internacional Bandeira Azul, garantindo acessibilidade, segurança e preservação."
  },
  sepultura: {
    titulo: "Praia da Sepultura",
    descricao: "Famosa para mergulho livre devido às águas calmas e cheias de peixinhos.",
    foto: "/sepultura.jpg",
    estrelas: 5,
    statusAgua: "Própria para banho. Mar extremamente calmo, parecendo uma piscina natural.",
    historicoBalneabilidade: "Geralmente própria, mas requer atenção em períodos de altíssima temporada devido ao grande fluxo de pessoas.",
    coletaSeletiva: "Coleta diária e lixeiras instaladas logo na entrada e na trilha de acesso à praia.",
    bandeiraAzul: "Não possui a certificação Bandeira Azul, mas é uma área de preservação ambiental monitorada."
  },
  cantograndedentro: {
    titulo: "Canto Grande (Dentro)",
    descricao: "Ideal para relaxar em família, praticar esportes náuticos e assistir ao pôr do sol.",
    foto: "/CGDentro.jpg",
    estrelas: 4,
    statusAgua: "Própria para banho. Águas calmas e mornas, ideais para crianças.",
    historicoBalneabilidade: "Histórico estável como própria, monitorada regularmente pelos órgãos ambientais.",
    coletaSeletiva: "Pontos de coleta distribuídos próximos aos acessos e trapiches dos pescadores.",
    bandeiraAzul: "Não possui o selo Bandeira Azul."
  },
  cantograndefora: {
    titulo: "Canto Grande (Fora)",
    descricao: "O lado com o mar aberto, ondas imponentes e perfeito para os amantes do surfe.",
    foto: "/CGFora.jpg",
    estrelas: 4,
    statusAgua: "Própria para banho. Mar aberto com forte renovação natural da água através das correntes.",
    historicoBalneabilidade: "Excelente histórico de balneabilidade, raramente apresentando pontos impróprios.",
    coletaSeletiva: "Containers de lixo e coleta seletiva presentes nas principais passarelas de acesso à areia.",
    bandeiraAzul: "Não possui o selo Bandeira Azul, mas mantém padrão excelente de limpeza de orla."
  },
  quatroilhas: {
    titulo: "Quatro Ilhas",
    descricao: "Ondas propícias para o surf e uma vista linda para as ilhas da reserva biológica.",
    foto: "/quatroilhas.jpg",
    estrelas: 5,
    statusAgua: "Excelente! Água própria para banho em toda a sua extensão.",
    historicoBalneabilidade: "Histórico exemplar, figurando sempre entre as praias mais limpas da região.",
    coletaSeletiva: "Sistema de coleta seletiva rigoroso em toda a extensão da praia, integrado ao programa ecológico local.",
    bandeiraAzul: "Certificada com o selo internacional Bandeira Azul, cumprindo exigentes critérios ambientais."
  },
  retiro: {
    titulo: "Retiro dos Padres",
    descricao: "Mata nativa e costões de pedra ideais para quem busca tranquilidade e natureza pura.",
    foto: "/retirodospadres.jpg",
    estrelas: 4,
    statusAgua: "Própria para banho. Águas límpidas cercadas por costões rochosos.",
    historicoBalneabilidade: "Mantém-se própria de forma consistente devido ao menor adensamento urbano ao redor.",
    coletaSeletiva: "Lixeiras para recicláveis instaladas próximas ao estacionamento e ao restaurante local.",
    bandeiraAzul: "Não possui o selo Bandeira Azul."
  },
  lagoinha: {
    titulo: "Praia da Lagoinha",
    descricao: "Excelente para crianças verem os peixes bem de perto nas piscinas entre as pedras.",
    foto: "/lagoinha.jpg",
    estrelas: 4,
    statusAgua: "Própria para banho. Mar calmo e propício para flutuação (snorkeling).",
    historicoBalneabilidade: "Monitorada constantemente. Mantém-se própria, exigindo cuidados apenas após chuvas muito intensas.",
    coletaSeletiva: "Lixeiras seletivas bem sinalizadas no início do acesso compartilhado com o trapiche.",
    bandeiraAzul: "Não possui o selo Bandeira Azul."
  },
  bombinhas: {
    titulo: "Praia de Bombinhas (Centro)",
    descricao: "O coração da cidade. Perfeita para relaxar, passear no calçadão e praticar stand-up paddle.",
    foto: "/bombinhas(centro).jpg",
    estrelas: 5,
    statusAgua: "Própria para banho. Águas calmas e transparentes na maior parte do tempo.",
    historicoBalneabilidade: "Geralmente própria. Por ser a praia central, na alta temporada tende a ficar mais suja e menos banhável.",
    coletaSeletiva: "Lixeiras de coleta seletiva a cada poucos metros ao longo de todo o calçadão de madeira.",
    bandeiraAzul: "Não possui o selo Bandeira Azul, mas conta com infraestrutura completa de limpeza urbana diária."
  },
  bombas: {
    titulo: "Praia de Bombas",
    descricao: "Ideal para caminhadas em família no calçadão e possui um mar muito agradável.",
    foto: "/bombas.jpeg",
    estrelas: 4,
    statusAgua: "Própria para banho em quase toda a extensão da sua longa praia. Alta temporada tende a ficar imprópria para banho",
    historicoBalneabilidade: "Apresenta ótimos índices de balneabilidade em seus múltiplos pontos de coleta.",
    coletaSeletiva  : "Calçadão totalmente equipado com lixeiras duplas (orgânico e reciclável) com coleta frequente.",
    bandeiraAzul: "Não possui o selo Bandeira Azul."
  }
};

export function Info() {
    const [itemAberto, setItemAberto] = useState<string | null>(null);
    const [praiaSelecionada, setPraiaSelecionada] = useState("mariscal");

    const alternarItem = (id: string) => {  
        setItemAberto(itemAberto === id ? null : id);
    };

    return (
        <section className="bg-blue-300 py-16">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 flex flex-col gap-6">

                {/* GRID PAI: Controla as duas colunas principais */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                    
                    {/* FILHO 1: COLUNA DA ESQUERDA (Título + Mapa) */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extra-bold flex items-center gap-2">
                            <MapPin className="w-10 h-10 text-black"/> MAPA INTERATIVO
                        </h2>

                        <div className="w-full h-87.5 md:h-125 overflow-hidden rounded-3xl shadow-md border-4 border-blue-900 mt-10 relative">
                            <InteractiveMap onSelecionarPraia={setPraiaSelecionada} />
                        </div>
                    </div>

                    {/* FILHO 2: COLUNA DA DIREITA (Aba lateral) */}
                    <div className="w-full h-auto rounded-3xl overflow-hidden p-6 flex flex-col justify-between lg:pt-2">
                      <div>
                          <h3 className="text-4xl font-extra-bold text-blue-950 uppercase">   
                            {dadosDasPraias[praiaSelecionada]?.titulo || "Praia Não Encontrada"}
                          </h3>
                          
                          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            {dadosDasPraias[praiaSelecionada]?.descricao || "Nenhuma informação disponível."}
                          </p>
                          
                          <div className="w-full h-0.5 bg-black rounded-full opacity-20 mt-5"></div>

                          {/* Container da foto */}
                          <div className="w-full h-70 overflow-hidden rounded-2xl shadow-inner relative mt-10">
                              <Image 
                                src={dadosDasPraias[praiaSelecionada]?.foto || "/sepultura.jpg"} 
                                alt={`Foto da ${dadosDasPraias[praiaSelecionada]?.titulo || "Praia"}`}
                                fill
                                sizes="(max-width: 766px) 100vw, 50vw"
                                className="object-cover transition-all duration-500 ease-in-out"
                              />
                          </div>
                          
                          {/* CONTAINER DAS CAIXINHAS DINÂMICAS */}
                          <div className="mt-6 flex flex-col gap-3">
                            
                            {/* 1. Status da Água */}
                            <div className="border border-black/10 rounded-xl overflow-hidden">
                              <button
                                onClick={() => alternarItem("status")}
                                className="w-full text-left p-4 font-extra-bold text-gray-600 flex justify-between bg-white/50"
                              >
                                <span>Status da Água</span>
                                <span>{itemAberto === "status" ? "-" : "+"}</span>
                              </button>

                              {itemAberto === "status" && (
                                <div className="p-4 pt-0 text-gray-600 bg-white/80">
                                  {dadosDasPraias[praiaSelecionada]?.statusAgua || "Informação indisponível."}
                                </div>
                              )} 
                            </div>

                            {/* 2. Histórico de Balneabilidade */}
                            <div className="border border-black/10 rounded-xl overflow-hidden">
                              <button
                                onClick={() => alternarItem("historico")}
                                className="w-full text-left p-4 font-extra-bold text-gray-600 flex justify-between bg-white/50"
                              >
                                <span>Histórico de Balneabilidade</span>
                                <span>{itemAberto === "historico" ? "-" : "+"}</span>
                              </button>

                              {itemAberto === "historico" && (
                                <div className="p-4 pt-0 text-gray-600 bg-white/80">
                                  {dadosDasPraias[praiaSelecionada]?.historicoBalneabilidade || "Informação indisponível."}
                                </div>
                              )} 
                            </div>

                            {/* 3. Coleta Seletiva */}
                            <div className="border border-black/10 rounded-xl overflow-hidden">
                              <button
                                onClick={() => alternarItem("coleta")}
                                className="w-full text-left p-4 font-extra-bold text-gray-600 flex justify-between bg-white/50"
                              >
                                <span>Coleta Seletiva</span>
                                <span>{itemAberto === "coleta" ? "-" : "+"}</span>
                              </button>

                              {itemAberto === "coleta" && (
                                <div className="p-4 pt-0 text-gray-600 bg-white/80">
                                  {dadosDasPraias[praiaSelecionada]?.coletaSeletiva || "Informação indisponível."}
                                </div>
                              )} 
                            </div>

                            {/* 4. Bandeira Azul */}
                            <div className="border border-black/10 rounded-xl overflow-hidden">
                              <button
                                onClick={() => alternarItem("bandeira")}
                                className="w-full text-left p-4 font-extra-bold text-gray-600 flex justify-between bg-white/50"
                              >
                                <span>Bandeira Azul</span>
                                <span>{itemAberto === "bandeira" ? "-" : "+"}</span>
                              </button>

                              {itemAberto === "bandeira" && (
                                <div className="p-4 pt-0 text-gray-600 bg-white/80">
                                  {dadosDasPraias[praiaSelecionada]?.bandeiraAzul || "Informação indisponível."}
                                </div>
                              )} 
                            </div>

                          </div> {/* Fim do container das caixinhas */}
                      </div> 
                    </div> {/* FIM DO FILHO 2 */}
                    
                </div> {/* FIM DO GRID PAI */}

            </div>
        </section>
    );
}