try {
  var filter = require('filter');
} catch (e) {
  var filter = require('..');
}

var assert = require('assert');

describe('filter', function(){
  it('should return the filtered keys', function(){
    var arr = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual(
      [ 2, 4 ],
      filter(arr, function(value){ if( value == 2 || value == 4 ) return value; })
    );
  });

  it('should return an empty array', function(){
    var arr = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual(
      [],
      filter(arr, function(value){ if( value == 'a' ) return value; })
    );
  });

  it('should return all the elements', function(){
    var arr = [ 1, 2, 3, 4, 5 ];
    assert.deepEqual(
      [ 1, 2, 3, 4, 5 ],
      filter(arr, function(value){ if( value ) return value; })
    );
  });
});