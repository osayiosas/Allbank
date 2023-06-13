import React from 'react'


import { stats } from "../constant";

import style from '../style'

const Stats = () => (
  <section className={`${style.flexCenter} flex-row flwx-wrap sm:mb-20 mb-6`}>
    {stats.map((stats) => (
      <div key={stats.id} className= {`flex-1 justify-start flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stats.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stats.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats