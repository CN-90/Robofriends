import React from 'react';

const SearchBox = ({ search, onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={onSearchChange}
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search robots"
        type="search"
        value={search}
      />
    </div>
  );
};

export default SearchBox;
