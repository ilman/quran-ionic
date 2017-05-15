quranApp



.controller('indexCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('app/data/index.json').success(function(data){
        $scope.surah = data;
    });
    $scope.tai = 'ads';

    // var db = $cordovaSQLite.openDB({ name: "my.db" });

    // for opening a background db:
    if(typeof $cordovaSQLite == 'undefined'){
      $scope.insert_id = 'no sqlite';
      return false;
    }

    var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });


    $scope.execute = function() {
      var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
      $cordovaSQLite.execute(db, query, ["test", 100]).then(function(res) {
        console.log("insertId: " + res.insertId);
        $scope.insert_id = res.insertId;
      }, function (err) {
        console.error(err);
      });
    };
}])

.controller('SurahCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('app/data/surah.json').success(function(data){
        $scope.ayah = data;
    })
}])