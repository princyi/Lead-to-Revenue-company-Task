import React from 'react';

const StatCards = ({ data }) => {
  if (!data) return null;

  const lastDate = Object.keys(data.cases).pop();
  const totalCases = data.cases[lastDate];
  const totalDeaths = data.deaths[lastDate];
  const totalRecovered = data.recovered ? data.recovered[lastDate] : 'N/A';

  return (
    <div className="stat-cards">
      <div className="card">Total Cases: {totalCases}</div>
      <div className="card">Total Deaths: {totalDeaths}</div>
      <div className="card">Total Recovered: {totalRecovered}</div>
    </div>
  );
}

export default StatCards;
