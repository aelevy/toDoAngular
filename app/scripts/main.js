function MainController($scope){

 $scope.toDoList = [];

 $scope.addToDo = function(toDo){
  $scope.toDoList.push(toDo);
  $scope.newToDo = "";
 };

 $scope.editTodo = function(toDo){

	};
}
