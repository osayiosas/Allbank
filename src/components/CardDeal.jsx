import React from "react";

import { card } from "../Assets";

import style, { layout } from "../style";

import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>
        {" "}
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>

      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button style="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt=" card-display" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
