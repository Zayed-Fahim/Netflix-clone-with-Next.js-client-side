import React from "react";

const footer = () => {
  return (
    <div className="pt-10 pb-16 lg:py-8 xl:py-10 w-full bg-black text-[#8C8C8C] text-[13px] border-t lg:border-t-0 xl:border-t-0 border-[#8C8C8C] bg-opacity-75 grid place-items-center absolute bottom-0 left-0">
      {/* <hr className="md:hidden lg:hidden xl:hidden block w-full mb-8" /> */}
      <div className="flex flex-col gap-5">
        <div>
          <a href="">Questions? Contact us.</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-28 gap-y-3 max-w-full lg:max-w-[800px] lg:gap-32 xl:gap-40 xl:max-w-[1000px]">
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
