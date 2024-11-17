import React from 'react';

const CountryDropdown = ({ countries, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)} className="country-dropdown">
      {countries.map((country, index) => (
        <option key={index} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default CountryDropdown;
