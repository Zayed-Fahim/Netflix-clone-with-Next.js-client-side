import React from "react";

const footer = () => {
  return (
    <div className="xl:h-[11rem] w-full bg-black text-[#8C8C8C] text-[13px] bg-opacity-75 grid place-items-center absolute bottom-0">
      <div className="flex flex-col gap-5">
        <div>
          <a href="">Questions? Contact us.</a>
        </div>
        <div className="flex gap-40 max-w-[1000px]">
          <div className="flex flex-col gap-3">
            <a href="">FAQ</a>
            <a href="">Cookie Preferences</a>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <a href="">Help Center</a>
            </div>
            <div>
              <a href="">Corporate Information</a>
            </div>
          </div>

          <div>
            <a href="">Terms of Use</a>
          </div>
          <div>
            <a href="">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
