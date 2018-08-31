
angular.module("todoApp")
    .controller("ToDoCtrl", function ($scope) {
        $scope.todos = {
            user: 'Siwoo',
            items: [
                { action: 'Buy Flower', done: false },
                { action: 'Call Joe', done: false },
                { action: 'Collect tickets', done: true },
                { action: 'Buy Shoes', done: false },
                { action: 'Do something else', done: false },
            ]
        };
        $scope.incompleteCount = () => {
            let count = 0;
            angular.forEach($scope.todos.items, item => item.done == false? count++: count)
            return count;
        };
        $scope.anyIncomplete = () => $scope.incompleteCount() != 0;
        $scope.warningLevel = () => $scope.incompleteCount() > 3? 'label-danger': 'label-success';
        $scope.addNewItem = (item) => {
            let found = $scope.todos.items.findIndex(_item => item.action == item) != -1;
            if(!found) {
                $scope.todos.items.push({ action: item, done: false });
            }
        }
    });