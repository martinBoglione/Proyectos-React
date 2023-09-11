import React from "react";

function Aside() {
    return(
        <aside className="p-10 w-[237px] bg-fondo-aside">
            <div className="mb-12 pb-12 font-bold text-challenges.io"><span className="text-dev">Dev</span>challenges.io</div>
            <div className="my-5 font-bold text-[14px] text-navegacion">Colors</div>
            <div className="my-5 font-bold text-[14px] text-navegacion">Typography</div>
            <div className="my-5 font-bold text-[14px] text-navegacion">Spaces</div>
            <div className="my-5 font-bold text-[14px] text-navegacion">Buttons</div>
            <div className="my-5 font-bold text-[14px] text-navegacion">Inputs</div>
            <div className="my-5 font-bold text-[14px] text-navegacion">Grid</div>
        </aside>
    );
}

export default Aside;