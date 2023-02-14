import moment from "moment";
import React, { useState } from "react";
import useGetLink from "../Hooks/useGetLink";
import { BeatLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  const [getLink] = useGetLink();
  const [today, setToday] = useState("");

  let totalGems = 0.0;
  let totalClick = 0.0;
  let totalTaka = 0.0;

  let gSum = 0.0;
  let cSum = 0.0;
  let tSum = 0.0;

  for (const elements of getLink) {
    gSum = gSum + elements.rate;
    totalGems = parseFloat(Math.round(gSum));
    cSum = cSum + elements.click;
    totalClick = cSum;
    tSum = tSum + elements.taka;
    totalTaka = tSum.toFixed(2);
  }

  setInterval(() => {
    setToday(moment().format("DD MMM YYYY hh:mm:ss"));
  }, 1000);

  return (
    <section>
      <h1 className="text-center text-xl">
        {today ? today : <BeatLoader color="#582FF5" />}
      </h1>
      <div className="text-center text-slate-800 my-5">
        <div
          title="Number of gems"
          className="flex justify-center items-center"
        >
          <span className="text-4xl font-semibold text-[#582FF5]">
            {totalGems}
          </span>
          <FontAwesomeIcon icon={faGem} className="text-[#582FF5] text-2xl" />
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <p className="flex justify-between">
          <span>Number of clicks:</span>
          <span>{totalClick}</span>
        </p>

        <p className="flex justify-between">
          <span>Money:</span>
          <span>
            {totalTaka}
            <small className="text-xs">tk</small>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Summary;
