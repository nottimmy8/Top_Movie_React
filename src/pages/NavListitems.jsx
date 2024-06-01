import React from "react";

function NavListitems({ nav }) {
  return (
    <div>
      {/* navitems */}
      <div>
        <div
          href={nav.link}
          className=" text-white text-1xl uppercase space-x-1 cursor-pointer hover:text-red-600 "
        >
          {" "}
          {nav.name}{" "}
        </div>
      </div>
    </div>
  );
}

export default NavListitems;
