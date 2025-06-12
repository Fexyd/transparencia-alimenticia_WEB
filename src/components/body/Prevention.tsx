import { DiseasesType } from "../assetsImport/DiseasesIcons";
import Disease from "./Disease";
import Text from "./Text";
import Tittle from "./Tittle";

export default function Prevention() {
  return (
    <>
      <Tittle tittle="¿Qué previenen?"></Tittle>
      <p style={{ padding: "1rem 4rem" }}>
        La presencia de sellos en los alimentos es más que una simple
        advertencia visual: es una herramienta clave para proteger tu salud. Al
        identificar rápidamente productos con altos niveles de azúcar, sodio,
        grasas saturadas o calorías, puedes evitar el consumo excesivo de estos
        ingredientes dañinos. Esto no solo ayuda a controlar el peso corporal,
        sino que también reduce el riesgo de enfermedades graves que impactan la
        calidad y duración de vida.
      </p>
      <Text>
        Aprender a interpretar estos sellos y elegir conscientemente puede
        prevenir enfermedades como la diabetes tipo 2, hipertensión arterial,
        enfermedades cardiovasculares y problemas relacionados con la obesidad.
        Conocer lo que consumes es el primer paso para cuidar tu cuerpo a largo
        plazo. A continuación, te presentamos algunas de las enfermedades que
        puedes evitar solo con tomar mejores decisiones en el supermercado.
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Disease
            iconType={DiseasesType.Obesity}
            alt="Obesidad"
            name="Obesidad"
            description="Acumulación excesiva de grasa en el cuerpo."
          >
            Una dieta rica en productos con exceso de calorías y azúcares puede
            derivar en obesidad. Evitar productos con sellos de exceso ayuda a
            mantener un peso saludable.
          </Disease>
          <Disease
            iconType={DiseasesType.Obesity}
            alt="Diabetes tipo 2"
            name="Diabetes tipo 2"
            description="Enfermedad metabólica que afecta el uso de glucosa."
          >
            Consumir productos altos en azúcares aumenta el riesgo de diabetes
            tipo 2. Los sellos advierten sobre estos excesos para ayudarte a
            reducir su consumo diario.
          </Disease>
          <Disease
            iconType={DiseasesType.Obesity}
            alt="Hipertensión"
            name="Hipertensión"
            description="Presión arterial elevada de forma crónica."
          >
            El exceso de sodio en los alimentos es una causa común de
            hipertensión. Los sellos te permiten identificar productos con alto
            contenido de sal y evitarlos.
          </Disease>
          <Disease
            iconType={DiseasesType.Obesity}
            alt="Enfermedades del corazón"
            name="Cardiopatías"
            description="Afecciones que afectan al corazón y vasos sanguíneos."
          >
            Una alimentación alta en grasas saturadas puede provocar
            enfermedades cardiovasculares. Elegir productos sin sellos reduce
            ese riesgo considerablemente.
          </Disease>
        </div>
      </Text>
    </>
  );
}
