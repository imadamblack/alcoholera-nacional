import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import Faqs from '../components/faqs';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
/*Imagenes*/
import i01 from '../../public/landing/a_n_01.webp';
import i02 from '../../public/landing/a_n_02.webp';
import i03 from '../../public/landing/a_n_03.webp';
import i04 from '../../public/landing/a_n_04.webp';
import i05 from '../../public/landing/a_n_05.webp';
import i06 from '../../public/landing/a_n_06.webp';

import i17 from '../../public/landing/a_n_01.webp';
import icon01 from '../../public/Iconos/galardon.png';
import icon02 from '../../public/Iconos/mensaje.png';
import icon03 from '../../public/Iconos/caja.png';
import icon04 from '../../public/Iconos/calendario.png';
import icon05 from '../../public/Iconos/comillas.png'; //Cambiar el color a las comillas
import { color } from 'framer-motion';

export default function Home() {

  
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Escríbenos por WhatsApp',
    description: 'Ver más detalles',
  };

  return (
    <>
      {/*------------------------------------------------------------------ */}
      <section className="relative flex flex-col min-h-[60rem] md:min-h-[100vh] px-4">
        {/* Fondo con Image */}
        <Image
          src={i01}
          layout="fill"
          objectFit="cover"
          priority
          alt="Fondo"
          className="z-[-1]"
        />

        <div className="container flex-grow flex flex-col items-center justify-center ">
          <h1 className="ft-10 md:ft-11 md:w-2/3 mx-auto relative text-brand-4 text-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_20%)]">
            Todo <span>buen destilado</span><br/> necesita <span>buen alcohol</span><br />
            <span>Y ese es el nuestro.</span>
          </h1>
          <p className="ft-2 mt-12 text-center text-brand-4">
            Alcohol etílico de caña de 96°, puro y certificado
          </p>
          <div className="flex flex-col justify-center items-center mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button !bg-brand-1 mb-4 z-10">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left text-brand-4">{cta.description}</p>
            <p className="material-icons animate-bounce">
              <span className="ft-9">expand_more</span>
            </p>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section className={`w-full min-h-[50vh] md:min-h-[60vh]  grid grid-cols-1 md:grid-cols-1 gap-8 {/*my-32*/}`}
        style={{
                backgroundImage: 'radial-gradient(circle, #800000 20%, #1F1C18 100%)',
              }}>

        <div className="w-full p-16 flex items-center justify-center">
          <div>
            <p className="ft-4 text-center py-[10px] text-brand-4">
              Tú y yo sabemos que en este negocio, si algo falla, el que sufre es uno. 
            </p>
            <p className="ft-4 text-center py-[10px] text-brand-4">Y en especial cuando se trata del corazon de la mezcla: el alcohol.</p>
            <p className="ft-4 text-center py-[10px] text-brand-4">
              Nosotros surtimos a destilerias que no pueden parar ni andar batallando con proveedores que fallan.
            </p>
            <p className="ft-4 text-center py-[30px] font-semibold text-brand-4">
              Aquí, si entregamos a tiempo, sin cuentos y sin vueltas.
            </p>
          </div>
        </div>
      </section>

      {/*------------------------------------------------------------------ */}

      <section className="relative flex flex-col min-h-[60rem] md:min-h-[72rem] px-4">
        {/* Fondo con Image */}
        <Image
          src={i02}
          layout="fill"
          objectFit="cover"
          priority
          alt="Fondo"
          className="z-[-1]"
        />

        <div className="container flex-grow flex flex-col items-center justify-center">
          <h2 className="ft-10 md:w-2/3 mx-auto relative text-brand-4 text-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_20%)]">
            Esto es lo que hace que nuestros clientes se queden
          </h2>
          <p className="ft-2 mt-12 text-center text-brand-4">
            100% de caña 96°, sin mezclas, para uso alimenticio, cosmético y famarcéutico
          </p>
          <div className="flex flex-col justify-center items-center mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button !bg-brand-1 mb-4 z-10">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left text-brand-4">{cta.description}</p>
            <p className="material-icons animate-bounce">
              <span className="ft-9">expand_more</span>
            </p>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section className="flex flex-col pb-20 md:mt-[-250px]">
        <div className="container grid grid-cols-1 lg:grid-cols-4 my-16 gap-4">
          <div className="w-full border rounded-2xl shadow-lg">
            <div className="relative mx-auto w-1/3 pt-[66%]">
              <Image src={icon01} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">
                Cumple con la norma oficial
              </h3>
              <p className="order-3 text-center">Para uso alimenticio, farmacéutico y cosmético</p>
            </div>
          </div>
          <div className="w-full border rounded-2xl shadow-lg">
            <div className="relative mx-auto w-1/3 pt-[66%]">
              <Image src={icon03} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">+500 mil litros</h3>
              <p className="order-3 text-center">Entregados en el último año</p>
            </div>
          </div>
          <div className="w-full border rounded-2xl shadow-lg">
            <div className="relative mx-auto w-1/3 pt-[66%]">
              <Image src={icon02} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
             
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Servicio directo</h3>
              <p className="order-3 text-center">Sin terceros</p>
            </div>
          </div>
          <div className="w-full border rounded-2xl shadow-lg">
            <div className="relative mx-auto w-1/3 pt-[66%]">
              <Image src={icon04} layout="fill" objectFit="contain"/>
            </div>
            <div
              className="flex flex-col justify-center items-center px-12 py-6"
            >
              <h3 className="ft-2 order-1 text-center md:order-2 mb-8 text-brand-1 font-bold">Atención</h3>
              <p className="order-3 text-center">Incluso en fines de semana</p>
            </div>
          </div>
          
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section
        className="relative flex flex-col justify-end min-h-[40rem] md:min-h-[60rem] py-60 w-full  bg-[url(/landing/a_n_05.webp)] bg-cover bg-top bg-no-repeat">
        <div className="container flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-brand-4">Lo que entregamos no son solo litros <br/>Es confianza</h2>
          <Link href="#contact">
            <a onClick={() => setLastClick('testimonios')} 
              className="button !bg-brand-1 mb-4 z-20">{cta.main}</a>
          </Link>
          <Link href="#contact">
                <a 
                onClick={() => setLastClick('cta-48horas')} 
                className="button mb-4 z-10 w-full md:w-auto mx-auto block !bg-[#272727] hover:bg-[#80000] ">{cta.main}
                </a>
              </Link>
        </div>
      </section>
      <div className="container w-full px-10 my-[100px] flex flex-col md:flex-row gap-8 ">
        <div className="w-full md:w-1/3 flex gap-8 p-8 border">
          <div className="flex flex-col justify-center items-center w-1/4">
            <div className="relative w-full pt-[100%]  overflow-hidden mb-4">
              <Image src={icon05} layout="fill" objectFit="contain"/>
            </div>
            <p className="-ft-2 font-semibold">Gerardo R.</p>
          </div>
          <div className="-ft-1 w-3/4">
            
            <p>Desde que trabajamos con Alcoholera Nacional, no hemos tenido un solo retraso en producción...</p>
            <p className="pt-6 -ft-2 font-semibold">Destilería Nacional Los Altos de Jalisco</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex gap-8 p-8 border">
          <div className="flex flex-col justify-center items-center w-1/4">
            <div className="relative w-full pt-[100%] overflow-hidden mb-4">
              <Image src={icon05} layout="fill" objectFit="contain" objectPosition="top"/>
            </div>
            <p className="-ft-2 font-semibold">Ana G.</p>
          </div>
          <div className="-ft-1 w-3/4">
            
            <p>Nos resolvieron un pedido urgente en domingo después de las 6pm. Excelente atención y cumplimiento.</p>
            <p className="pt-6 -ft-2 font-semibold">Laboratorio Cosmético Guadalajara</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex gap-8 p-8 border">
          <div className="flex flex-col justify-center items-center w-1/4">
            <div className="relative w-full pt-[100%] overflow-hidden mb-4">
              <Image src={icon05} layout="fill" objectFit="contain"/>
            </div>
            <p className="-ft-2 font-semibold">Manuel C.</p>
          </div>
          <div className="-ft-1 w-3/4">
            
            <p>Lo que más valoro es la claridad: trato directo, entregas puntuales y producto confiable.</p>
            <p className="pt-6 -ft-2 font-semibold">Fabricante de Productos de Limpieza Guanajuato</p>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------------------ */}
      {/*<Blockbuster
        background={i06}
      />*/}
      
      {/*------------------------------------------------------------------ */}
      <section className="min-h-[40rem] md:min-h-[80rem] py-[40px] md:py-40 bg-[url('/landing/a_n_06.webp')] bg-cover">
        <div className="container my-40">
          <h2 className="text-center text-brand-4">¿Cuántos necesitas? Aquí hay para todos los tamaños</h2>
        </div>
        {/* <p className="reading-container">
          Te comparto tres razones para que inviertas en el crecimiento de tu empresa (no vas a necesitar más):
        </p> */}
        <div className="container grid grid-cols-1 md:grid-cols-4 md:gap-11">
          <div
            className="flex flex-col justify-start  p-[50px] bg-gradient-to-t from-transparent to-[#800000] text-brand-4 text-start"
          >
            <p className="mb-8 font-bold text-xl">
              ¿Vas empezando o produces por lotes?
            </p>
            <p className="py-8 font-bold text-start">Bidón de 20L</p>
            <p>Perfecto para productores artesanales o lotes pequeños.</p>
            {/*<p className="font-bold py-6">Desde $490* MXN/L</p>*/}
            {/*<p className="text-xs">*SIN ENVASE</p>*/}
          </div>
          <div
            className="flex flex-col justify-start  p-[50px] bg-gradient-to-t from-transparent to-[#800000] text-brand-4 text-start"
          >
            <p className="mb-8 font-bold text-xl">
              ¿Ya traes buen ritmo?
            </p>
            <p className="py-8 font-bold">Tote de 1000L</p>
            <p className='text-italic'>Ideal para operaciones medianas con rotaciones constantes.</p>
            {/*<p className="font-bold py-6">Desde $21 MXN/L</p>*/}
            
          </div>
          <div
            className="flex flex-col justify-start  p-[50px] bg-gradient-to-t from-transparent to-[#800000] text-brand-4 text-start"
          >
            <p className="mb-8 font-bold text-xl">
              ¿Tienes destilería grande?
            </p>
            <p className="py-8 font-bold">Pipa industrial</p>
            <p>Para grandes volúmenes, con entrega directa en tu planta.</p>
          </div>
          <div
            className="flex flex-col justify-start items-center p-[50px] bg-gradient-to-t from-transparent to-[#800000] text-brand-4 text-start"
          >
            <p className="mb-8 font-bold text-xl">
              ¿Pedido especial o entrega urgente?
            </p>
            <p className="py-8">Hacemos entregas personalizadas con logística flexible.</p>
            
          </div>
 
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
      <section className={`w-full min-h-[50vh] md:min-h-[60vh]  grid grid-cols-1 md:grid-cols-1 gap-8 `}
        style={{
                backgroundImage: 'radial-gradient(circle, #800000 20%, #1F1C18 100%)',
              }}>

        <div className="w-full p-16 flex justify-center items-center gap-8">
          <div>
            <p className="ft-8 text-center py-[30px] text-brand-4 font-bold">
              Entrega en máximo 48 horas
            </p>
            <div className='flex flex-col justify-center items-center max-w-[400px] mx-auto'>
              <Link href="#contact">
                <a 
                onClick={() => setLastClick('cta-48horas')} 
                className="button mb-4 z-10 w-full md:w-auto mx-auto block !bg-[#272727] hover:bg-[#80000] ">{cta.main}
                </a>
              </Link>

            </div>
            
          </div>
        </div>
      </section>
      
      {/*------------------------------------------------------------------ */}

      {/*<Blockbuster
        
        background={i04}
      />*/}

      {/*------------------------------------------------------------------ */}
      <section className="py-8 bg-[#EFE6E3]/60">
        <div className="container my-20">
          <h2 className="text-center">¿Todavía tienes dudas?</h2>
        </div>
        <Faqs/>
      </section>
      {/*------------------------------------------------------------------ */}

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
              Contáctanos para cotizar tu próximo pedido de alcohol
            </h2>
            <p className="ft-1 my-8 sm:text-left">
              Sí ya llegaste hasta acá, compártenos unos datos y
              con gusto te ayudamos con tu pedido.
            </p>

            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
      {/*------------------------------------------------------------------ */}
    </>
  );
}
