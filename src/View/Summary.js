import { faHandPointer, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import useGetLink from "../Hooks/useGetLink";
import gemsIcon from "../images/gem.png";

const Summary = () => {
  const [getLink] = useGetLink();

  console.log(getLink);

  let totalGems = 0.0;
  let totalClick = 0.0;
  let gSum = 0.0;
  let cSum = 0.0;
  for (const elements of getLink) {
    gSum = gSum + elements.rate;
    totalGems = parseFloat(Math.round(gSum));
    cSum = cSum + elements.click;
    totalClick = cSum;
  }

  return (
    <section>
      <h1 className="text-left md:text-center text-xl">Summary</h1>
      <div className="text-center text-slate-800 my-5">
        <div className="flex justify-center items-center">
          <span className="text-4xl font-semibold text-[#582FF5]">
            {totalGems}
          </span>
          <img src={gemsIcon} alt="gems-icon" className="w-10" />
        </div>
        <p className="text-sm">Gems</p>
      </div>
      <div>
        <p className="text-center text-base text-[#F52D3A]">
          There are in total of (
          <span className="text-[#582FF5] font-bold">
            {getLink.length} <FontAwesomeIcon icon={faLink} />
          </span>
          ) links, and you have clicked those links a total of (
          <span className="text-[#582FF5] font-bold">
            {totalClick} <FontAwesomeIcon icon={faHandPointer} />
          </span>
          ) times.
        </p>
      </div>
    </section>
  );
};

export default Summary;
