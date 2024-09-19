import React from 'react';

const SortOptions = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="grade_asc">Nutrition Grade (Best-Worst)</option>
        <option value="grade_desc">Nutrition Grade (Worst-Best)</option>
      </select>
    </div>
  );
};

export default SortOptions;