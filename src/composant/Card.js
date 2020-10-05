import React from "react";

const Card = ({ nom, prix, categ }) => {
  return (
    <div className="contenair">
      <div className="nom"> {nom}</div>
      <div className="prix"> {prix} </div>
      <div className="categorie"> {categ} </div>
    </div>
  );
};

export default Card;
