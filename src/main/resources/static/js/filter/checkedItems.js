
angular.module("todoApp")
    .filter("uncheckedItems", function () {
        return (items, showComplete) => {
            let results = [];
            angular.forEach(items, (item) => {
                if(showComplete == true || item.done == false) {
                    results.push(item);
                };
            });
            return results;
        }
    })