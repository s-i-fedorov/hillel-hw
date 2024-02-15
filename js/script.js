(function () {
  const data1 = {
    x: 5,
    y: 8,
  };
  const data2 = {
    x: 10,
    y: 20,
  };
  const data3 = {
    x: 15,
    y: 40,
  };

  const cache = new WeakMap();

  function cylinderVolume(data) {
    return (data.x / 2) * (data.x / 2) * 3.14 * data.y;
  }

  function cacheComplexCalculations(data, callback) {
    if (cache.has(data)) {
      console.log('here');
      const result = cache.get(data);
      return { data, result };
    }
    const result = callback(data);
    cache.set(data, result);
    return { data, result };
  }

  console.log(cacheComplexCalculations(data1, cylinderVolume));
  console.log(cacheComplexCalculations(data2, cylinderVolume));
  console.log(cacheComplexCalculations(data1, cylinderVolume));
  console.log(cacheComplexCalculations(data3, cylinderVolume));
  console.log(cacheComplexCalculations(data2, cylinderVolume));
  console.log(cache);
}());
