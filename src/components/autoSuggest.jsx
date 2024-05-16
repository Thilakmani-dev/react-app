import { useEffect, useState } from "react";

const AutoSuggest = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getFromAPI = async () => {
    if (searchText === "") {
      setFilteredData([]);
      return;
    }
    let response = await fetch(
      `https://dummyjson.com/users/search?q=${searchText}`
    );
    let data = await response.json();
    setFilteredData(data.users);
  };

  const debounced = debounce(getFromAPI, 1000);

  useEffect(
    function getSearchedData() {
      debounced(searchText);
    },
    [searchText]
  );

  function updateSearchText(e) {
    setSearchText(e.target.value);
  }

  //adding debounce
  function debounce(func, delay) {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  return (
    <div className="autoSuggestContainer">
      <input
        type="text"
        placeholder="Search here"
        value={searchText}
        onChange={updateSearchText}
        // onBlur={() => setFilteredData([])}
      />
      <ul>
        {filteredData.map((item) => {
          return <li key={item.id}>{item.firstName}</li>;
        })}
      </ul>
    </div>
  );
};

export default AutoSuggest;
