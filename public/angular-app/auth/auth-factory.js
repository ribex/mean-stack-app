angular.module('meanhotel').factory('AuthFactory', AuthFactory);

function AuthFactory() {
    return {
        auth: auth
    };

    // @ts-ignore
    var auth = {
        isLoggedIn: false
    };


}