// Find the country with the largest combined population by
// joining the given data on foreign keys

// The output of largestCountry should be an object with a
// key 'name' representing the country name and a key 'population'
// representing the countries total population

// Example Input Data:
// const countries = [
//   { id: 3, name: 'Russia' },
//   { id: 1, name: 'USA' },
// ];

// const cities = [
//   { id: 3, country_id: 1, name: 'Los Angeles' },
//   { id: 8, country_id: 3, name: 'Moscow' },
//   { id: 2, country_id: 1, name: 'Seattle' },
// ];

// const populations = [
//   { id: 3, city_id: 3, amount: 3960000 },
//   { id: 8, city_id: 8, amount: 11920000 },
//   { id: 2, city_id: 2, amount: 8240000 },
// ];

// Example Output: { name: 'USA', population: 12200000 }

const largestCountry = (countries, cities, populations) => {
  const country_list = countries.map((country) => {
    const city_list = cities.filter((city) => city.country_id === country.id);
    // console.log(city_list);
    city_list.map((city) => {
      const total_pop = populations.reduce((total, pop) =>
        pop.city_id === city.id ? total + pop.amount : total
      );
      console.log(city);
      console.log(total_pop);
    });
    console.log(populations);
  });
  return { name: 'ToBeDecided', population: 0 };
};

module.exports = largestCountry;
