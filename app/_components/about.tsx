import Image from "next/image";
import PassarelaImg from '../../public/passarela.jpg';
import PordoSol from '../../public/PordoSol.jpeg';
import { Check } from "lucide-react";

export function About() {
    return(
        <section className="bg-blue-200 py-16">
            <div className="container px-4 mx-auto">
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">

                    <div className="relative w-full h-[400x] rounded-3xl overflow-hidden">
                        <Image
                            src={PassarelaImg}
                            alt="Foto da passarela"
                            quality={100}
                            priority
                            className="object-cover hover:scale-110 duration-300"
                            />
                    </div>

                    <div className="absolute w-40 h-40 right-4 -bottom-10 border-4 rounded-lg
                    overflow-hidden border-white">
                        <Image
                            src={PordoSol}
                            alt="Foto do porSol"
                            quality={100}
                            priority                       
                            />
                    </div>
                    </div>

                    <div className="space-y-6 mt-10">
                    <h2 className="text-5xl font-mozilla">SOBRE</h2>

                    <p>
                        Bombinhas abriga algumas das paisagens mais impressionantes do litoral catarinense. Nosso propósito é garantir que moradores e turistas possam desfrutar dessas águas com total segurança e consciência ambiental. Através deste monitoramento, trazemos a transparência que você precisa para planejar o seu dia perfeito na praia.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/> Dados em Tempo Real: Informações atualizadas sobre a balneabilidade.
                        </li>

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/> Turismo Sustentável: Ajude a preservar o único município que é uma península no topo do sul do país.
                        </li>

                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/> Consciência Coletiva: Cuidado especial com a fauna marinha e a vegetação local.
                        </li>
                    </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}