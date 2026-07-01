import BrasaoImg from '../../public/simbolo.png'
import Sepultura from '../../public/sepultura.jpg'
import Image from 'next/image'


export function Hero() {
    return (
        <section className="bg-blue-400 text-white relative overflow-hidden">

            <div className='absolute inset-0 z-0'>
                <Image
                    src={BrasaoImg}
                    alt='Foto do brasao'
                    fill
                    sizes='20vw'    
                    priority
                    className='object-cover opacity-20 lg:hidden'
                    quality={100}
                />
            </div>

            <div>
                <Image
                    src={Sepultura}
                    alt='Vista' 
                    fill
                    priority
                    quality={100}
                    className='object-cover opacity-40 hidden lg:block'
                />
            </div>

        <div className="container mx-auto lg:mx-30 pt-16 pb-16 md:pb-10 px-4 relative">

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            
                <div className="space-y-10">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-15">
                        Nossas praias merecem um cuidado especial.  
                    </h1>
                    <p className="lg:text-lg">
                        Monitore a qualidade das praias de Bombinhas de forma simples e visual.
                    </p>        
                </div>

                <div className="hidden md:block h-full relative">
                    <Image 
                       src={BrasaoImg} 
                       alt='Foto do brasao'
                       className='objec-contain'
                       sizes="(max-width: 768px) 0vw, 50vw"
                       quality={100}
                       priority
                       />
                </div>
            </article>

        </div>


        </section>
    )
}