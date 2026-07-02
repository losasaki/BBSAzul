"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(
  () => import("./components/InteractiveMap"),
  { 
    ssr: false,
    loading: () => <p className="text-center text-gray-500 p-4">Carregando o mapa...</p>
  }
);

export default function Page() {
  return (
    <div className="min-h-screen bg-gray p-6 font-sans">
      
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Mares de Bombinhas</h1>
        <p className="text-gray-600 text-lg">.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
        
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🌊 Praias</h3>
          <p className="text-gray-600">...</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-800 mb-2"> </h3>
          <p className="text-gray-600">...</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
          <h3 className="text-xl font-bold text-gray-800 mb-2">ℹ️ Dica de Viagem</h3>
          <p className="text-gray-600">...</p>
        </div>

      </div>

      <main className="max-w-6xl mx-auto bg-white p-4 rounded-2xl shadow-lg">
        <div className="overflow-hidden rounded-xl">
          <InteractiveMap onSelecionarPraia={() => {}} />
        </div>
      </main>

      <footer className="text-center mt-12 text-gray-500 text-sm">
        <p>&copy; 2026 - Guia de Bombinhas. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}