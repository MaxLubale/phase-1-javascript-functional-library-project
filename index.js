// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  // myMap
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
      }
    }
    return result;
  }
  // myReduce
  function myReduce(collection, callback, acc) {
    let accumulator = acc;
    // Check if an initial value is provided
    if (accumulator === undefined) {
      accumulator = Array.isArray(collection) ? collection[0] : Object.values(collection)[0];
    }
    // Start iterating from the appropriate index
    const startIndex = accumulator === collection[0] ? 1 : 0;
    // Iterate over the rest of the collection
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i]);
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i]);
      }
    }
    return accumulator;
  }
  // myFind
  function myFind(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) {
          return values[i];
        }
      }
    }
    return undefined;
  }
  // myFilter
  function myFilter(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) {
          result.push(values[i]);
        }
      }
    }
    return result;
  }
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }
  // myFirst
  function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
      return collection.slice(0, n);
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      return values.slice(0, n);
    }
    return undefined;
  }
  // myLast
  function myLast(collection, n = 1) {
    if (Array.isArray(collection)) {
      return collection.slice(-n);
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      return values.slice(-n);
    }
    return undefined;
  }
  // myKeys
  function myKeys(collection) {
    if (typeof collection === 'object') {
      return Object.keys(collection);
    }
    return [];
  }
  // myValues
  function myValues(collection) {
    if (typeof collection === 'object') {
      return Object.values(collection);
    }
    return [];
  }