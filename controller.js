app.controller('mainController',['$scope','mainService', function($scope, mainService) {
       // Initial sorting will be on ID
        $scope.sortReverse = false;
        $scope.sortType = 'id';

        //fetch table data
        mainService.getTableData().then(
            function(data){
                $scope.users = data;
            },
            function(e){
                console.log(e);
            }
        );
    }]);