import React from "react";

export default function DealCard({ Image, Title, Price }) {
  return (
    <div className="dealCard">
      <img src={Image} alt={Title} />
      <p>{Title}</p>
      <h4>${Price}</h4>
    </div>
  );
}
