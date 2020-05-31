import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <main>
      <section class="intro">
        <div class="introHeader">
          Witaj na oficjalnej witrynie rekrutacyjnej Samorządowego Liceum
          Ogólnokształcącego im. Cypriana Kamila Norwida.
        </div>
        <div class="introText">
          Poniżej znajdują się kafelki, z różnymi klasami. Wybierz tę która Cię
          interesuje, jeżeli nie jesteś jeszcze zdecydowany/a po prostu
          przeklikaj naszą ofertę, na pewno znajdzie się coś co pokrywa się z
          Twoimi zainteresowaniami.
        </div>
      </section>
      <div class="textContainer">
        <div class="choiceMenu">
          <div class="classes">
            <Link to="/class-a" class="kafle">
              1A
            </Link>
            <Link class="kafle" to="/class-b">
              1B
            </Link>
            <Link class="kafle" to="/class-c">
              1C
            </Link>
            <Link class="kafle" to="/class-d">
              1D
            </Link>
            <Link class="kafle" to="/class-e">
              1E
            </Link>
            <Link class="kafle" to="/class-f">
              1F
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
