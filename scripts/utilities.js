function forEach (array, caller) {
  for (var i = 0; i < array.length; i++) {
      caller(array[i]);
  }
}
