import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-12 text-textLight">
      <a href="mailto:jawadsyed406@gmail.com">
        <p className="text-sm font-extraFont rotate-90 w-72 tracking-wide text-textLight">
          jawadsyed406@gmail.com
        </p>
      </a>
      <span className="w-[0.1px] h-32 bg-hoverColor inline-flex"></span>
    </div>
  );
};

export default RightSide;