import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);

  const handleChange = (event) => {
    setFilterValue(event.target.value);
    setShownCountries(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase());
      })
    );
  };

  console.log(shownCountries);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
      setShownCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <p>find countries</p>
        <input onChange={handleChange} value={filterValue} />
      </div>
      <p>countries: {shownCountries.length}</p>
      {/* {countries.map((country) => {
        if (
          country.name.common
            .toLowerCase()
            .startsWith(filterValue.toLowerCase())
        ) {
          return <p key={country.name.official}>{country.name.common}</p>;
        }
      })} */}
      {shownCountries.length <= 10 ? (
        shownCountries.map((country) => {
          if (country) {
            return <p key={country.name.official}>{country.name.common}</p>;
          }
        })
      ) : (
        <p>Too many entries</p>
      )}
    </div>
  );
}

export default App;
