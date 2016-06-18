quranApp



.controller('indexCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('app/data/index.json').success(function(data){
        $scope.surah = data;
    })
}])

.controller('SurahCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('app/data/surah.json').success(function(data){
        $scope.ayah = data;
    })
}])