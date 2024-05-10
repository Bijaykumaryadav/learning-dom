import React from "react";

function Header({ headerInfo, cname, c }) {
  console.log(headerInfo, cname);
  return (
    <div>
      {c}
      <h1>
        Welcome to the Header section {headerInfo.email} {cname}
      </h1>
    </div>
  );
}

export default Header;
