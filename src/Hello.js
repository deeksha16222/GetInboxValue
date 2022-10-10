import React, { useState } from "react";

export default function Hello() {
  const [data, setData] = useState(null);
  const [hide, setHide] = useState(false);
  function show(e) {
    setData(e.target.value);
  }
  return (
    <>
      {hide ? <h1> {data} </h1> : null}
      <input type="text" onChange={show} /> <br /> <br />
      <button
        onClick={() => {
          setHide(true);
        }}
      >
        {" "}
        Get Data{" "}
      </button>
    </>
  );
}
