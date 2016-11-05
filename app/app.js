angular.module('listApp', [])
  .controller('MainController', function($scope) {
  
  $scope.itemname = "thisname";
  
    $scope.items = [
    {
      name: 'Nexus S',
      description: 'Fast just got faster with Nexus S.',
      link: 'http://'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      description: 'The Next, Next Generation tablet.',
      link: 'http://'
    }, {
      name: 'MOTOROLA XOOM™',
      description: 'The Next, Next Generation tablet.',
      link: 'http://'
    }, {
      name: 'iPhone 7',
      description: 'Some Apple device',
      link: 'https://apple.com'
    }
  ];
  
//    var todoList = this;
//    todoList.todos = [
//      {text:'learn angular', done:true},
//      {text:'build an angular app', done:false}];
// 
//    todoList.addTodo = function() {
//      todoList.todos.push({text:todoList.todoText, done:false});
//      todoList.todoText = '';
//    };
// 
    $scope.alertButton = function(item) {
      alert(item.name);
//      var count = 0;
//      angular.forEach(todoList.todos, function(todo) {
//        count += todo.done ? 0 : 1;
//      });
//      return count;
    };
// 
//    todoList.archive = function() {
//      var oldTodos = todoList.todos;
//      todoList.todos = [];
//      angular.forEach(oldTodos, function(todo) {
//        if (!todo.done) todoList.todos.push(todo);
//      });
//    };
  });