function MainController($scope){
 $scope.completed = false;
 $scope.toDoList = [];

 $scope.addToDo = function(toDo){
  $scope.toDoList.push(toDo);
  $scope.newToDo = "";
 };

 $scope.editTodo = function(toDo){

	};
}
