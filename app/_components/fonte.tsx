export function Fonte() {
    return (
        <footer className="bg-blue-900 py-15 text-white">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
                    <div>
                        <h4 className="text-sm font-extra-bold mb-4 uppercase text-gray-400">
                            Fonte das Informações:
                        </h4>
                        <p className="text-gray-400 text-xs uppercase font-extra-bold ">Dados de Balneabilidade obtidos via <a href="https://balneabilidade.ima.sc.gov.br/" className="text-blue-400 hover:underline">Site oficial do IMA</a></p>
                    </div>
                    <div>
                        <h4 className="text-sm font-extra-bold uppercase mb-4 text-gray-300">
                            Navegação:
                        </h4>
                        <ul className="space-y-2 text-xs text-gray-400">
                            <li><a href="#mapa" className="hover:underline transition uppercase">Mapa Interativo</a></li>
                            <li><a href="#info" className="hover:underline transition uppercase">Informações da Praia</a></li>
                        </ul>
                        <h4 className="text-sm font-extra-bold uppercase text-gray-300 mt-3">
                            Sobre o Projeto:
                        </h4>
                        <p className="text-xs text-gray-400 uppercase font-exra-bold mt-2">Plataforma desenvolvida para conscientização ecológica e monitoramento informativo das praias de Bombinhas - SC.</p>
                    </div>
                    <div>
                        <h4 className="">
                            <p>© {new Date().getFullYear()} EcoBombinhas. Todos os direitos reservados.</p>
                            <p className="mt-2 text-gray-500 uppercase text-xs">
                                Este site possui fins puramente informativos e educacionais.
                            </p>
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}