(function () {
  const data1 = {
    name: 'vasia',
    surname: 'petrov',
  };
  const data2 = {
    name: 'vladimir',
    surname: 'komarov',
  };
  const data3 = {
    name: 'taras',
    surname: 'bulba',
  };

  const newSet = new WeakSet();
  function trackObjects(object) {
    if (!(typeof (object) === 'object') || (object === null)) throw new Error('Argument is not an object');
    if (!newSet.has(object)) {
      newSet.add(object);
      return false;
    }
    if (newSet.has(object)) return true;
  }
  trackObjects(data1);
  trackObjects(data2);
  // trackObjects(null);
  console.log(trackObjects(data1));
  console.log(newSet.has(data3));
}());
