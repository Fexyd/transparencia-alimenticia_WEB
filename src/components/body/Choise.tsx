import Cartulin from "./Cartulin";
import Juice, { JuiceType } from "./Juice";
import Tittle from "./Tittle";

export default function Choise() {
  return (
    <>
      <Cartulin>
        <Tittle color="var(--color-main-dark)" tittle="¿Sabes elegir?"></Tittle>
        <Juice type={JuiceType.bad}></Juice>
        <Juice type={JuiceType.good}></Juice>
      </Cartulin>
    </>
  );
}
