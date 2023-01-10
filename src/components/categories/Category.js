import React from "react";

export default function Category(props) {
  let { img_src, name } = props.category; // de-structuring
  return (
    <div className="text-center category">
      <img src={img_src} alt="abc" />
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
}
