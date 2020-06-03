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
              <span class="smol">POL-HIS-WOS</span>
            </Link>
            <Link class="kafle" to="/class-b">
              1B
              <span class="smol">BIOL-CHEM-MAT</span>
            </Link>
            <Link class="kafle" to="/class-c">
              1C
              <span class="smol">MAT-FIZ-INF</span>
            </Link>
            <Link class="kafle" to="/class-d">
              1D
              <span class="smol">MAT-GEO-INF</span>
            </Link>
            <Link class="kafle" to="/class-e">
              1E
              <span class="smol">MAT-GEO-ANG</span>
            </Link>
            <Link class="kafle" to="/class-f">
              1F
              <span class="smol">GEO-BIOL-ANG</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
