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
    let total = 0;
    for (let i = 0; i < city_list.length; i++) {
      for (let j = 0; j < populations.length; j++) {
        if (populations[j].city_id === city_list[i].id) {
          total += populations[j].amount;
          // console.log(total);
          // console.log(country.name);
        }
      }
    }
    return {
      name: country.name,
      populations: total,
    };

    // city_list.map((city) => {
    //   const total_pop = populations.reduce((total, pop) =>
    //     pop.city_id === city.id ? total + pop.amount : total
    //   );
    //   console.log(city);
    //   console.log(total_pop);
    // });
    // console.log(populations);
  });
  const largest_pop = country_list.reduce((largest, country) =>
    (largest.populations || 0) > country.populations ? largest : country
  );

  return largest_pop;
};

module.exports = largestCountry;
