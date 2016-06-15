exports.parentObject = function (sessionId) {
  var pathOfLocation = location(sessionId);

  var indexOfBracket = pathOfLocation.lastIndexOf('[');
  var pathOfParent = indexOfBracket != -1 ? indexOfBracket : 0;

  return pathOfLocation.substring(0, pathOfParent);
};

var location = exports.location = function (sessionId) {
  return __store[sessionId].pathOfLocation;
};
