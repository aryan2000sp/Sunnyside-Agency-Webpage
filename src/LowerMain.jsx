import React from "react";
import milkBottle from "./images/mobile/image-gallery-milkbottles.jpg";
import orange from "./images/mobile/image-gallery-orange.jpg";
import sugar from "./images/mobile/image-gallery-sugar-cubes.jpg";
import cone from "./images/mobile/image-gallery-cone.jpg";
const LowerMain = () => {
  return (
    <main className="lower-main">
      <section className="section flex">
        <div className="col">
          <img className="image-1" src={milkBottle} alt="milkBottle" />
        </div>
        <div className="col">
          <img className="image-2" src={orange} alt="orange" />
        </div>
      </section>
      <section className="section flex">
        <div className="col">
          <img className="image-3" src={cone} alt="cone" />
        </div>
        <div className="col">
          <img className="image-4" src={sugar} alt="sugar" />
        </div>
      </section>
    </main>
  );
};

export default LowerMain;
