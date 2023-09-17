import React from "react";

function Aside() {
    return(
        <aside className="p-10 w-[237px] bg-fondo-aside">
            <div className="mb-12 pb-12 font-bold text-challenges.io"><span className="text-orange-600">Dev</span>challenges.io</div>
            <div className="my-5 font-bold text-[14px] text-gray-400">Typography</div>
            <div className="my-5 font-bold text-[14px] text-gray-400">Grid</div>
            <div className="my-5 font-bold text-[14px] text-gray-400">Buttons</div>
            <div className="my-5 font-bold text-[14px] text-gray-800">Inputs</div>
        </aside>
    );
}

export default Aside;