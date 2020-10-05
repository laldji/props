import React, { useState } from "react";
import Card from "./Card";

const Projectable = () => {
  const [array] = useState([
    {
      nom: "kamel",
      prix: "223",
      categorie: "vetement",
    },

    {
      nom: "reda",
      prix: "5555",
      categorie: "electronique",
    },
  ]);
  console.log(array);
  return (
    /*<div>
      <Productable props={array} />
    </div>*/

    <div className="conte">
      {array.map((elem, i) => {
        return (
          <Card
            key={i}
            nom={elem.nom}
            prix={elem.prix}
            categ={elem.categorie}
          />
        );
      })}
    </div>
  );
};

export default Projectable;
