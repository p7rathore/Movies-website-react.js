import React, { useRef } from "react";

function Search(props) {
  const serRef = useRef();
  return (
    <>
      <h1 className="text">Search</h1>
      <div className="searchbaar">
        <input
          className="input"
          type="text"
          placeholder="Enter movies name ...."
          value={props.serData}
          onChange={() => props.searchValue(serRef.current.value)}
          ref={serRef}
        />
      </div>
    </>
  );
}
export default Search;
