import React from "react";

const Loader = () => {
  return (
    <div className="preloader">
      <div className="centrize w-100">
        <div className="vertical-center">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
