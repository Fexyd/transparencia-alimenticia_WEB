import Cartulin from "../body/Cartulin";
import styles from "../../styles/body/StampTypes.module.css";
import Stamp from "./Stamp";
import { StampsType } from "../assetsImport/stamps";
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
        />
      </Cartulin>

      <div className={styles.stampWrapper}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <Stamp
          iconHREF={StampsType.Stamp1}
          name="Exceso Calorías"
          description="Muchas calorías por porción."
        />
        <Stamp
          iconHREF={StampsType.Stamp2}
          name="Exceso Azúcares"
          description="Azúcar en exceso añadido."
        />
        <Stamp
          iconHREF={StampsType.Stamp3}
          name="Exceso Grasas Saturadas"
          description="Altas grasas saturadas."
        />
        <Stamp
          iconHREF={StampsType.Stamp4}
          name="Exceso Sodio"
          description="Sodio elevado en producto."
        />
      </div>
    </div>
  );
}
