import { noop } from "lodash";
import React from "react";

const Search = ({ onSearchChange = noop, inputSearch }) => {
  return (
    <div className="m-[16px]">
      <input
        onChange={(e) => onSearchChange(e.target.value)}
        ref={inputSearch}
        style={{
          backgroundSize: "20px",
          backgroundPositionX: "97%",
          backgroundPositionY: "center",
        }}
        className="w-[100%] px-[8px] py-[8px] rounded-[4px] bg-[#2A2319] hover:outline-none bg-search-icon bg-no-repeat"
        placeholder="Search Song, Artist"
      ></input>
    </div>
  );
};

export default Search;
