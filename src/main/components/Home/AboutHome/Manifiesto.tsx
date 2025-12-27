import { ButtomCustom } from "../../../common/ButtomCustom"
export const Manifiesto = () => {
    return (
        <div className="max-w-3xl mx-auto text-center  h-max  my-24 flex flex-col justify-center bg-transparent">
            
            <span className="inline-block mx-auto px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                Nuestro Manifiesto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8 leading-snug">
                "El futuro pertenece a quienes pierden el miedo a construir."
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed mx-auto pb-9">
                <p>
                    Creemos que la mejor manera de dominar la tecnología es enseñándola. ARX STAR nace de la necesidad de compartir: nosotros consolidamos nuestro aprendizaje documentando proyectos reales, errores y descubrimientos.
                </p>
                <p>
                    Nuestro objetivo es proporcionar a los estudiantes y jóvenes profesionales una base sólida, eliminando la barrera de la "ignorancia inicial" en un mundo tecnológico cada vez más complejo.
                </p>
            </div>
            <ButtomCustom title="Conócenos Más" link="/about" />
        </div>

    )
}
