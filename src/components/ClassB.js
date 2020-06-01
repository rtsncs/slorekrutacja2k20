import React from "react";
const ClassB = () => {
  return (
    <div id="content">
      <h1>KLASA 1B - BIOL-CHEM-MAT</h1>
      <h2>Powinieneś wybrać klasę o takim nachyleniu przedmiotowym, jeśli:</h2>
      <li>
        pragniesz studiować medycynę, stomatologię, farmację, rehabilitację,
        technologię chemiczną, dietetykę, kosmetologię, biotechnologię,
        resocjalizację, weterynarię, fizjoterapię na Uniwersytecie Medycznym w
        Warszawie, UM w Katowicach, UM w Lublinie, w Collegium Medicum UJ w
        Krakowie;
      </li>
      <li>
        interesujesz się różnymi zjawiskami zachodzącymi w świecie przyrody;
      </li>
      <li>chcesz rozwijać swoje biologiczne zainteresowania;</li>
      <li>
        jesteś ciekawy wykładów na Politechnice Rzeszowskiej i zajęć
        laboratoryjnych na KUL-u z biologii i chemii;
      </li>
      <li>
        myślisz o przystąpieniu do egzaminu maturalnego z biologii, chemii,
        matematyki na poziomie rozszerzonym.
      </li>

      <table className="tab">
        <thead>
          <tr>
            <th>Rok/klasa</th> <th>1</th> <th>2</th> <th>3</th> <th>4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>j.polski</th> <td>4</td> <td>4</td> <td>4</td> <td>4</td>
          </tr>
          <tr>
            <th>j.angielski</th> <td>3</td> <td>3</td> <td>3</td> <td>3</td>
          </tr>
          <tr>
            <th>j.niemiecki</th> <td>2(1j)</td> <td>2(1j)</td> <td>2(1j)</td>{" "}
            <td>2(1j)</td>
          </tr>
          <tr>
            <th>j.francuski</th> <td>2(1j)</td> <td>2(1j)</td> <td>2(1j)</td>{" "}
            <td>2(1j)</td>
          </tr>
          <tr>
            <th>matematyka</th> <td>3</td> <td>4</td> <td>3</td> <td>4</td>
          </tr>
          <tr>
            <th>wf</th> <td>3</td> <td>3</td> <td>3</td> <td>3</td>
          </tr>
          <tr>
            <th>godz.wych</th> <td>1</td> <td>1</td> <td>1</td> <td>1</td>
          </tr>
          <tr>
            <th>biologia</th> <td>1</td> <td>2</td> <td>1</td> <td></td>
          </tr>
          <tr>
            <th>chemia</th> <td>1</td> <td>2</td> <td>1</td> <td></td>
          </tr>
          <tr>
            <th>geografia</th> <td>1</td> <td>2</td> <td>1</td> <td></td>
          </tr>
          <tr>
            <th>historia</th> <td>2</td> <td>2</td> <td>2</td> <td>2</td>
          </tr>
          <tr>
            <th>wos</th> <td>1</td> <td>1</td> <td></td> <td></td>
          </tr>
          <tr>
            <th>fizyka</th> <td>1</td> <td>1</td> <td>2</td> <td></td>
          </tr>
          <tr>
            <th>przedsięb.</th> <td></td> <td>1</td> <td>1</td> <td></td>
          </tr>
          <tr>
            <th>plastyka</th> <td>1</td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <th>informatyka</th> <td>1</td> <td>1</td> <td>1</td> <td></td>
          </tr>
          <tr>
            <th>e_dla_bezp</th> <td>1</td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <th>religia</th> <td>2</td> <td>2</td> <td>2</td> <td>2</td>
          </tr>
          <tr>
            <th>wych.rodz</th> <td>14r</td> <td>14r</td> <td>14r</td> <td></td>
          </tr>
          <tr>
            <th>doradz.zaw.</th> <td>2r</td> <td>2r</td> <td>3r</td> <td>3r</td>
          </tr>
          <tr>
            <th>r_chemia</th> <td>1</td> <td>2</td> <td>2</td> <td>3;1dyr</td>
          </tr>

          <tr>
            <th>r_biologia</th> <td>1</td> <td>2</td> <td>2</td> <td>3;1dyr</td>
          </tr>
          <tr>
            <th>r_matematyka</th> <td>2</td> <td>1</td> <td>3</td>{" "}
            <td>3;1dyr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClassB;
