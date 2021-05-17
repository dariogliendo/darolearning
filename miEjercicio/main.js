let app = angular.module('rotacion', [])

app.controller('rotarGente', function($scope) {
  $scope.gente = ['Dario', 'Juan', 'Agustin', 'Carlos']
  let upi = () => {
    ultimaPersonaIndex = $scope.gente.length -1
    return ultimaPersonaIndex
  }
  let up = () => {
    let ultimaPersona = $scope.gente[upi()];
    return ultimaPersona
  }

  $scope.rotarGente = () => {
    $scope.gente.splice(0, 0, up())
    $scope.gente.splice(upi(),1)
  }

})
