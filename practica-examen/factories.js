var factories= angular.module('chatApp.factories',['firebase']);

factories.factory('$message', function($firebase,$firebaseArray,$firebaseObject   ) {
    var ref= new Firebase('https://chat506.firebaseio.com');
    var messages = $firebaseArray(ref.child('messages'));

    var create= function(message) {
        return messages.$add(message);
    };
    var get = function(messageId) {
        return $firebaseObject(ref.child('messages').child(messageId) );
    };
    var eliminate = function(message) {
        return messages.$remove(message);
    };



    return {
        all: messages, 
        create: create,
        get: get,
        eliminate: eliminate
    };
});