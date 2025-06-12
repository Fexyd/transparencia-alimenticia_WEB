import Cartulin from "../body/Cartulin";
import styles from "../../styles/body/StampTypes.module.css";
import Stamp from "./Stamp";
import { stamps } from "../assetsImport/stamps";
import Tittle from "./Tittle";

export default function StampTypes() {
  return (
    <div>
      <Cartulin tittle="pero.. ¿Que son?">
        Los sellos no son solo íconos llamativos: son advertencias basadas en
        evidencia científica. Cada uno señala un exceso o ingrediente que puede
        afectar la salud, especialmente si se consume con frecuencia. Conocerlos
        es clave para tomar mejores decisiones al hacer compras.
        <Tittle
          color="var(--color-main-dark)"
          tittle="algunos sellos son... "
        ></Tittle>
      </Cartulin>

      <div className={styles.stampWrapper}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <Stamp
          iconHREF={stamps.Stamp1}
          name="Exceso Calorías"
          description="Muchas calorías por porción."
        ></Stamp>
        <Stamp
          iconHREF={stamps.Stamp1}
          name="Exceso Azúcares"
          description="Azúcar en exceso añadido."
        ></Stamp>
        <Stamp
          iconHREF={stamps.Stamp1}
          name="Exceso Grasas Saturadas"
          description="Altas grasas saturadas."
        ></Stamp>
        <Stamp
          iconHREF={stamps.Stamp1}
          name="Exceso Sodio"
          description="Sodio elevado en producto."
        ></Stamp>
      </div>
    </div>
  );
}
