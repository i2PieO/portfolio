import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-40 text-textLight">
      <a href="mailto:jawadsyed406@gmail.com">
        <p className="text-sm font-extraFont rotate-90 w-72 tracking-widest text-textGreen">
          jawadsyed406@gmail.com
        </p>
      </a>
      <span className="w-[0.1px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;