import { TaskIconType } from "../assetsImport/taskIcons";
import TaskMark from "./TaskMark";
import Text from "./Text";
import Tittle from "./Tittle";

export default function Advice() {
  return (
    <>
      <Tittle tittle="Consejos"></Tittle>
      <Text>
        Recuerda que los sellos son una guía rápida, pero no la única regla. Lo
        ideal es elegir alimentos frescos y naturales siempre que puedas. No te
        fíes solo de frases como “light” o “bajo en azúcar” si el producto tiene
        sellos. Usa los sellos como una ayuda para cuidar tu salud, no como una
        excusa para comer mal.
        <TaskMark icon={TaskIconType.Approved}>
          Prefiere frutas y verduras frescas todos los días.
        </TaskMark>
        <TaskMark icon={TaskIconType.Approved}>
          Mantente hidratado, el agua siempre es la mejor opción.
        </TaskMark>
        <TaskMark icon={TaskIconType.Rejected}>
          Evita bebidas azucaradas y jugos procesados.
        </TaskMark>
        <TaskMark icon={TaskIconType.Neutral}>
          Lee los ingredientes, no solo los sellos.
        </TaskMark>
        <TaskMark icon={TaskIconType.Neutral}>
          Cocina en casa cuando puedas para controlar lo que comes.
        </TaskMark>
      </Text>
    </>
  );
}
