// console.log("Hello World");

function getweatherdata(loc) {
  const weatherdata = [
    {
      id: 1,
      location: {
        country: "India",
        lat: 20.23,
        localtime: "2023-03-03 10:12",
        lon: 85.83,
        name: "Bhubaneswar",
        region: "Orissa",
      },
      current: {
        temp_c: 29,
        temp_f: 84.2,
        humidity: 84,
        cloud: 0,
        condition: {
          text: "Mist",
        },
      },
    },

    {
      id: 2,
      location: {
        country: "United Kingdom",
        lat: 51.52,
        localtime: "2023-03-03 4:47",
        lon: -0.11,
        name: "London",
        region: "City of London, Greater London",
      },
      current: {
        temp_c: 4,
        temp_f: 39.2,
        humidity: 75,
        cloud: 100,
        condition: {
          text: "Overcast",
        },
      },
    },

    {
      id: 3,
      location: {
        country: "India",
        lat: 28.6,
        localtime: "2023-03-03 10:24",
        lon: 77.2,
        name: "New Delhi",
        region: "Delhi",
      },
      current: {
        temp_c: 22,
        temp_f: 71.6,
        humidity: 65,
        cloud: 0,
        condition: {
          text: "Overcast",
        },
      },
    },

    {
      id: 4,
      location: {
        country: "United States of America",
        lat: 40.71,
        localtime: "2023-03-02 23:56",
        lon: -74.01,
        name: "New York",
        region: "New York",
      },
      current: {
        temp_c: 4.4,
        temp_f: 39.9,
        humidity: 57,
        cloud: 0,
        condition: {
          text: "Clear",
        },
      },
    },

    {
      id: 5,
      location: {
        country: "France",
        lat: 48.87,
        localtime: "2023-03-03 6:01",
        lon: 2.33,
        name: "Paris",
        region: "Ile-de-France",
      },
      current: {
        temp_c: 1,
        temp_f: 33.8,
        humidity: 93,
        cloud: 75,
        condition: {
          text: "Fog",
        },
      },
    },

    {
      id: 6,
      location: {
        country: "Norway",
        lat: 59.92,
        localtime: "2023-03-03 6:01",
        lon: 10.75,
        name: "Oslo",
        region: "Oslo",
      },
      current: {
        temp_c: -4,
        temp_f: 24.8,
        humidity: 86,
        cloud: 75,
        condition: {
          text: "Partly cloudy",
        },
      },
    },

    {
      id: 7,
      location: {
        country: "Norway",
        lat: 59.92,
        localtime: "2023-03-03 6:01",
        lon: 10.75,
        name: "Oslo",
        region: "Oslo",
      },
      current: {
        temp_c: -4,
        temp_f: 24.8,
        humidity: 86,
        cloud: 75,
        condition: {
          text: "Partly cloudy",
        },
      },
    },

    {
      id: 8,
      location: {
        country: "India",
        lat: 34.09,
        localtime: "2023-03-03 10:44",
        lon: 74.8,
        name: "Srinagar",
        region: "Jammu and Kashmir",
      },
      current: {
        temp_c: 8.7,
        temp_f: 47.7,
        humidity: 76,
        cloud: 27,
        condition: {
          text: "Partly cloudy",
        },
      },
    },

    {
      id: 9,
      location: {
        country: "United States of America",
        lat: 41.85,
        localtime: "2023-03-02 23:19",
        lon: -87.65,
        name: "Chicago",
        region: "Illinois",
      },
      current: {
        temp_c: 1,
        temp_f: 33.8,
        humidity: 82,
        cloud: 0,
        condition: {
          text: "Clear",
        },
      },
    },

    {
      id: 10,
      location: {
        country: "Turkey",
        lat: 41.02,
        localtime: "2023-03-03 8:26",
        lon: 28.96,
        name: "Istanbul",
        region: "Istanbul",
      },
      current: {
        temp_c: 7,
        temp_f: 44.6,
        humidity: 81,
        cloud: 100,
        condition: {
          text: "Overcast",
        },
      },
    },

    {
      id: 11,
      location: {
        country: "Russia",
        lat: 55.75,
        localtime: "2023-03-03 8:44",
        lon: 37.62,
        name: "Moscow",
        region: "Moscow City",
      },
      current: {
        temp_c: 0,
        temp_f: 32,
        humidity: 86,
        cloud: 100,
        condition: {
          text: "Snow showers",
        },
      },
    },

    {
      id: 12,
      location: {
        country: "Israel",
        lat: 32.07,
        localtime: "2023-03-03 7:47",
        lon: 34.76,
        name: "Tel Aviv-Yafo",
        region: "Tel Aviv",
      },
      current: {
        temp_c: 18,
        temp_f: 64.4,
        humidity: 77,
        cloud: 75,
        condition: {
          text: "Partly cloudy",
        },
      },
    },

    {
      id: 13,
      location: {
        country: "United Arab Emirates",
        lat: 25.25,
        localtime: "2023-03-03 9:52",
        lon: 55.28,
        name: "Dubai",
        region: "Dubai",
      },
      current: {
        temp_c: 24,
        temp_f: 75.2,
        humidity: 78,
        cloud: 0,
        condition: {
          text: "Sunny",
        },
      },
    },

    {
      id: 14,
      location: {
        country: "Germany",
        lat: 52.52,
        localtime: "2023-03-03 6:58",
        lon: 13.4,
        name: "Berlin",
        region: "Berlin",
      },
      current: {
        temp_c: -1,
        temp_f: 30.2,
        humidity: 93,
        cloud: 100,
        condition: {
          text: "Mist",
        },
      },
    },

    {
      id: 15,
      location: {
        country: "Switzerland",
        lat: 46.62,
        localtime: "2023-03-03 7:03",
        lon: 8.05,
        name: "Grindelwald",
        region: "",
      },
      current: {
        temp_c: -3,
        temp_f: 26.6,
        humidity: 100,
        cloud: 50,
        condition: {
          text: "Partly cloudy",
        },
      },
    },

    {
      id: 16,
      location: {
        country: "India",
        lat: 22.57,
        localtime: "2023-03-03 11:53",
        lon: 88.37,
        name: "Kolkata",
        region: "West Bengal",
      },
      current: {
        temp_c: 35,
        temp_f: 95,
        humidity: 25,
        cloud: 0,
        condition: {
            text: "Mist",
        },
      },
    },

  ];

//   const result = weatherdata.filter((item) => item.location.name.toLowerCase() == loc.toLowerCase());
  const result = weatherdata.find((item) => item.location.name.toLowerCase() == loc.toLowerCase());
//  console.log(result[0].location.country);
    // console.log(result);
    // console.log(result.current.condition.text);
  return result.current.humidity;
}
// getweatherdata("london");
console.log(getweatherdata("london"));
