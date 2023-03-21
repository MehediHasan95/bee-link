import React, { useContext } from "react";
import robot from "../images/robot.png";
import { GlobalContext } from "../Context/ContextProvider";

const Summary = () => {
  const { getLink, user, loading } = useContext(GlobalContext);
  const { email, displayName, photoURL, metadata } = user;

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

  return (
    <section>
      <div className="text-center">
        {!loading && photoURL ? (
          <div className="w-3/12 lg:w-2/6 mx-auto rounded-full overflow-hidden">
            <img
              src={photoURL}
              alt="no_image"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-3/12 lg:w-2/6 mx-auto rounded-full overflow-hidden">
            <img
              src={robot}
              alt="no_image"
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <h1 className="text-xl font-semibold text-hanPurple mt-3">
          {!loading && displayName}
        </h1>
      </div>
      <hr className="my-3" />

      <div className="w-11/12 mx-auto">
        <p className="flex justify-between">
          <span className="flex">Email:</span>
          <p>{email}</p>
        </p>

        <p className="flex justify-between">
          <span className="flex">Since:</span>
          <span>{metadata?.creationTime.slice(0, 17)}</span>
        </p>
        <hr className="my-3" />
        <p className="flex justify-between">
          <span className="flex">Diamond</span>
          <span>{totalGems}</span>
        </p>

        <p className="flex justify-between">
          <span className="flex">Total Clicks</span>
          <span>
            {totalClick}
            <small className="text-xs">ts</small>
          </span>
        </p>

        <p className="flex justify-between">
          <span className="flex">Money</span>
          <span>
            {totalTaka}
            <small className="text-xs">tk</small>
          </span>
        </p>
        <p className="text-right">
          <small className="text-xs hover:underline hover:text-hanPurple cursor-pointer">
            Withdraw
          </small>
        </p>
      </div>
    </section>
  );
};

export default Summary;
