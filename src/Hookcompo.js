import React, { useState } from "react";

const Hookcompo = () => {
  const [a, seta] = useState({
    myName: "SuvashNeupane",
    myAge: 23,
    degree: "csit",
    rollnumber: 23,
    channel: "Suvash",
  });
  const checking = () => {
    seta({ ...a, degree: "MSCCSIT" });
  };

  return (
    <div>
      <h1 className="h1style">
        Name:{a.myName} and Age:{a.myAge} and degree:{a.degree} and channel:
        {a.channel}
      </h1>
      <button className="btn" onClick={checking}>
        Update
      </button>
    </div>
  );
};

export default Hookcompo;
