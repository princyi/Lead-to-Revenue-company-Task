// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDropdown from './components/CountryDropdown';
import StatCards from './components/StatCards';
import LineChart from './components/LineChart';
import './App.css';

function App() {
  const [country, setCountry] = useState('USA');
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch list of countries for dropdown
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryList = response.data.map(country => ({
          name: country.name.common,
          code: country.cca2.toLowerCase(),
        }));
        setCountries(countryList);
      })
      .catch(err => setError('Failed to fetch country list'));
  }, []);

  // Fetch COVID-19 historical data
  useEffect(() => {
    setLoading(true);
    axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=1500`)
      .then(response => {
        setData(response.data.timeline);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch COVID-19 data');
        setLoading(false);
      });
  }, [country]);

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <div className="App">
      <h1>COVID-19 Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <CountryDropdown countries={countries} onSelect={handleCountryChange} />
      {loading ? <p>Loading data...</p> : (
        <>
          <StatCards data={data} />
          <LineChart data={data} />
        </>
      )}
    </div>
  );
}

export default App;

// CountryDropdown.js
import React from 'react';

function CountryDropdown({ countries, onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {countries.map((country, index) => (
        <option key={index} value={country.code}>{country.name}</option>
      ))}
    </select>
  );
}

export default CountryDropdown;

// StatCards.js
import React from 'react';

function StatCards({ data }) {
  if (!data) return null;

  const totalCases = data.cases[Object.keys(data.cases).pop()];
  const totalDeaths = data.deaths[Object.keys(data.deaths).pop()];
  const totalRecovered = data.recovered ? data.recovered[Object.keys(data.recovered).pop()] : 'N/A';

  return (
    <div className="stat-cards">
      <div className="card">Total Cases: {totalCases}</div>
      <div className="card">Total Deaths: {totalDeaths}</div>
      <div className="card">Total Recovered: {totalRecovered}</div>
    </div>
  );
}

export default StatCards;

// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ data }) {
  if (!data) return null;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(data.deaths),
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={chartData} />
    </div>
  );
}

export default LineChart;

// App.css
.App {
  text-align: center;
  padding: 20px;
}

.error {
  color: red;
}

.stat-cards {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.card {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.chart {
  margin-top: 30px;
}
