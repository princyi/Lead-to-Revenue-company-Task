import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryDropdown from './components/CountryDropdown';
import StatCards from './components/StatCards';
import LineChart from './components/LineChart';
import './App.css';

const App = () => {
  const [country, setCountry] = useState('USA');
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch list of countries for dropdown
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryList = response.data.map(country => ({
          name: country.name.common,
          code: country.cca2.toLowerCase(),
        }));
        setCountries(countryList);
      } catch (err) {
        setError('Failed to fetch country list');
      }
    };
    fetchCountries();
  }, []);

  // Fetch COVID-19 historical data when country changes
  useEffect(() => {
    const fetchCovidData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=1500`);
        setData(response.data.timeline);
      } catch (err) {
        setError('Failed to fetch COVID-19 data');
      } finally {
        setLoading(false);
      }
    };
    fetchCovidData();
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
