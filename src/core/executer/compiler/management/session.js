exports.end = function (sessionId) {

  //noinspection JSUnresolvedVariable
  //TODO: fix: delete this variables
  //delete GLOBAL[sessionId];
  //delete __store[sessionId];

  __io.emit(sessionId + '_' + 'sessionEnd');
  console.info('Socket.IO: server: Session closed.');
};