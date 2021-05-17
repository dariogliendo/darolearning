let app = angular.module('practicaFinal', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/posts', {
      templateUrl: 'vistas/posts.html',
      controller: 'controller'
    })
    .when('/crearPost', {
      templateUrl: 'vistas/crearPost.html',
      controller: 'controller'
    })
    .otherwise({
      redirectTo: '/posts'
    })
}]);

app.controller('controller', function($scope, $http) {
  $scope.posts= []
  $scope.newPost = {}
  $http.get('http://jsonplaceholder.typicode.com/posts')
    .then(
      function(data){
        $scope.posts = data.data
        console.log($scope.posts)
      }
    )
    .catch(
      function(error){
        console.log(error)
      }
    );
  
  $scope.addPost = function() {
    $http.post('http://jsonplaceholder.typicode.com/posts', {
      title: $scope.newPost.title,
      body: $scope.newPost.body,
      id: 1
    })
      .then(
        function() {
          $scope.posts.push($scope.newPost)
          $scope.addPost = {}
        }
      ).catch(
        function(error) {
          console.log(error)
        }
      )
  }
})