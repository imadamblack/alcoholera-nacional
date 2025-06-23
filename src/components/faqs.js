import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "01. ¿Pueden entregar fuera de horario?",
      a: "Sí. Atendemos entregas especiales incluso en fines de semana o en horarios extendidos."
    },
    {
      q: "02. ¿Su alcohol cumple con la normativa mexicana?",
      a: "Sí. Está regulado para uso en la industria farmacéutica, alimenticia y cosmética."
    },
    {
      q: "03.¿Cuál es el volumen mínimo de pedido?",
      a: "Para entrega a domicilio a partir de 1000L. También manejamos volúmenes industriales."
    },
    {
      q: "04. ¿Cómo se hace un pedido?",
      a: "Por WhatsApp o llamada. Cotizamos,confirmas y programamos tu entrega."
    },
    {
      q: "05. ¿Entregan fuera de Jalisco?",
      a: "Sí. Cubrimos gran parte del Bajío y occidente: Guanajuato, Michoacán, Nayarit, Colima y más."
    }
  ];

  return (
    <section className='py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white text-brand-1 mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-50 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}