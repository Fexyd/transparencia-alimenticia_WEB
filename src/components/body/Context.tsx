import Statistics from "./Statistics";
import Tittle from "./Tittle";
import Text from "./Text";

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
      <Statistics></Statistics>
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
