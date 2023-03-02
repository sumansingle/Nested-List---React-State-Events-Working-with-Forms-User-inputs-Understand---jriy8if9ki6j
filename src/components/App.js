
import "./../styles/App.css";
// Do not alter the states const and values inside it.
import React, { Component, useState } from "react";

const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState(null);
  const [selectedTowns, setSelectedTowns] = useState(null);

  function toggleCities(state) {
    if (selectedState === state) {
      setSelectedState(null);
      setSelectedCities(null);
      setSelectedTowns(null);
    } else {
      setSelectedState(state);
      setSelectedCities(null);
      setSelectedTowns(null);
    }
  }

  function toggleTowns(cities) {
    if (selectedCities === cities) {
      setSelectedCities(null);
      setSelectedTowns(null);
    } else {
      setSelectedCities(cities);
      setSelectedTowns(null);
    }
  }

  function toggleTownsList(towns) {
    if (selectedTowns === towns) {
      setSelectedTowns(null);
    } else {
      setSelectedTowns(towns);
    }
  }

  return (
    <div id="main">
    <h1>States, Cities and Towns</h1>
    <ul>
      {states.map((state, index) => (
        <li key={`state${index}`} onClick={() => toggleCities(state)}>
          {state.name}
          {selectedState === state && (
            <ul>
              {state.cities.map((cities, index) => (
                <li key={`cities${index}`} onClick={() => toggleTowns(cities)}>
                  {cities.name}
                  {selectedCities === cities && (
                    <ul>
                      {cities.towns.map((towns, index) => (
                        <li key={`town${index}`} onClick={() => toggleTownsList(towns)}>
                          {towns.name}
                          {selectedTowns === towns && (
                            <ul>
                              <li>{towns.name}</li>
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
