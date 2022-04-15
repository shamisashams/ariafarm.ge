import React, { useState } from "react";
import { Magnifier } from "./Icons";
import "./SmallComps.css";

const SearchInput = ({ color }) => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="wrapper" style={{ height: "0" }}>
      <div className={openSearch ? "search_input open" : "search_input"}>
        <input
          onChange={() => setOpenSearch(true)}
          style={{ border: `${color} 2px solid` }}
          type="text"
          placeholder="შეიყვანე საძებო სიტყვა"
          name=""
          id=""
        />
        <Magnifier color={color} />
      </div>
    </div>
  );
};

export default SearchInput;
