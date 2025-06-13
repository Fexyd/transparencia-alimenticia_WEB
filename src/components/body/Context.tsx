import Tittle from "./Tittle";
import Text from "./Text";
import Stats from "./Statistics";

export default function Context() {
  return (
    <>
      <Tittle tittle="Contexto Actual" />
      <Text>
        Desde 2020, México exige etiquetas de advertencia en alimentos
        procesados con exceso de azúcar, grasa, sodio o calorías. Este sistema,
        directo y fácil de leer, busca frenar problemas como la obesidad
        infantil. Hoy, es común ver productos con varios sellos, una alerta
        visual que nos dice: “esto podría no ser lo mejor para tu salud”.
      </Text>
      <Stats
        tittle="Porcentajes de alimentos con sellos"
        porcentajes={[30, 25, 20, 15, 7, 3]}
        text={[
          "0 sellos",
          "1 sello",
          "2 sellos",
          "3 sellos",
          "4 sellos",
          "5 o mas",
        ]}
      ></Stats>
      <p style={{ padding: "1rem 3.5rem" }}>
        Esta tabla muestra la cantidad total de alimentos con 0 sellos, 1 sello,
        2 sellos, 3 sellos, 4 sellos y 5 o más sellos que hay en el país. A
        pesar de que existe una clara mejora en el consumo de alimentos con solo
        1 sello, todavía es común ver el consumo de productos con 2 o más
        sellos.
      </p>
      <Text>
        Llama la atención que tantos productos lleven múltiples sellos. Esto no
        solo refleja la calidad nutricional de lo que consumimos, también abre
        la puerta a entender mejor qué significa cada advertencia. Porque no
        todos los sellos son iguales, y conocer su función puede cambiar la
        forma en que elegimos lo que comemos.
      </Text>
    </>
  );
}
