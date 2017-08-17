var app = angular.module('sortApp', []);
    app.factory('mainService', function($http, $q) {
        return {
            getTableData:getTableData
        };
        function getTableData(){
            var deferred = $q.defer();
            return $http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
                    deferred.resolve(data.data);
                    return deferred.promise;
                },
                function (error) {
                    deferred.reject(error);
                    return deferred.promise;
                });
        }
    });