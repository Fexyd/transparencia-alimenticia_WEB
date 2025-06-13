import Cartulin from "./Cartulin";
import Juice, { JuiceType } from "./Juice";
import Tittle from "./Tittle";

export default function Choise() {
  return (
    <>
      <Cartulin>
        <Tittle color="var(--color-main-dark)" tittle="¿Sabes elegir?"></Tittle>

        <p>
          ¿Realmente sabemos lo que estamos comprando? Durante años, en México
          hemos elegido por precio, sabor o costumbre, sin mirar lo que hay
          detrás de una etiqueta. Pero hoy, con los sellos a la vista, ya no hay
          excusas. Cada elección que hacemos en el supermercado puede acercarnos
          a una vida más saludable… o alejarnos de ella. ¿Seguiremos ignorando
          las señales?
          <br />
          <div style={{ display: "flex", margin: "1rem" }}>
            <Juice type={JuiceType.bad}></Juice>
            <Juice type={JuiceType.good}></Juice>
          </div>
          <br />
          Elegir mejor no requiere ser nutriólogo, solo estar atento. El
          etiquetado frontal nos da una ventaja que no teníamos antes:
          información clara, rápida y visible. Aprovecharla es un paso sencillo
          que puede marcar una gran diferencia. Comer bien empieza con elegir
          bien.
        </p>
      </Cartulin>
    </>
  );
}
