// console.log("Hello World");

function getweatherdata(location) {
    const weatherdata =
    [{
        location: 'kolkata',
        lat: '22.57',
        lon: '88.37',
        condition: {
            text: 'Mist',
        },

    }]
    const result = weatherdata.find((loc) => loc.location == 'kolkata');
    console.log(result);
    return result
}

getweatherdata('kolkata');