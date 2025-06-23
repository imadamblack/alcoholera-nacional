import Image from 'next/image';

export default function Blockbuster({ overhead, title, description, background }) {
  const isObject = typeof background === 'object' && background !== null;

  return (
    <section className="relative flex flex-col justify-end min-h-[60vh] w-screen md:mb-0 mx-auto pt-12 md:py-20">
      {/* Fondo visual si es string */}
      {!isObject && background && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        />
      )}

      {/* Fondo visual si es objeto importado */}
      {isObject && (
        <Image
          src={background}
          alt="Fondo"
          layout="fill"
          className="object-cover z-0"
          priority
        />
      )}

      {/* Contenido */}
      <div className="container mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-stretch justify-stretch">
          <div className="w-full p-8 md:p-14 text-center">
            {overhead && <p className="overhead">{overhead}</p>}

            {title && (
              <h2
                dangerouslySetInnerHTML={{ __html: title }}
                className="text-brand-1 ft-8 font-bold"
              />
            )}

            {description && (
              <p className="ft-3 mt-8 mx-auto w-2/3">{description}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
