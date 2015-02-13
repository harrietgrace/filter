/**
 * Expose `filter`.
 */

module.exports = filter;

/**
 * Return an array of all elements the predicate returns truthy for.
 *
 * @param {Array|Object|String} collection
 * @param {Function} predicate
 * @return {Array}
 */

function filter(collection, predicate){
  var results = [];

  if (collection == null) return results;

  for (var i = 0; i < collection.length; i +=1) {
    if (predicate(collection[i])) results.push(collection[i]);
  }

  return results;
}
