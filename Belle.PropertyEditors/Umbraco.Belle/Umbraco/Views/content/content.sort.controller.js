/**
 * @ngdoc controller
 * @name Umbraco.Editors.ContentDeleteController
 * @function
 * 
 * @description
 * The controller for deleting content
 */
function ContentSortController($scope, contentResource, treeService) {

    $scope.sortableModel = {
        itemsToSort: [],
        name: $scope.nav.ui.currentNode.name
    };

    contentResource.getChildren($scope.currentNode.id).then(function (data) {
        $scope.sortableModel.itemsToSort = [];
        for (var i = 0; i < data.items.length; i++) {
            $scope.sortableModel.itemsToSort.push({
                id: data.items[i].id,
                column1: data.items[i].name,
                column2: data.items[i].updateDate,
                column3: data.items[i].sortOrder
            });
        }
    });

    $scope.$on("umbItemSorter.ok", function(event) {
        $scope.nav.hideDialog();
    });
    $scope.$on("umbItemSorter.cancel", function (event) {
        $scope.nav.hideDialog();
    });

    $scope.$on("umbItemSorter.sorting", function (event, args) {

        var sortedIds = [];
        for (var i = 0; i < args.sortedItems.length; i++) {
            sortedIds.push(args.sortedItems[i].id);
        }
        contentResource.sort({ parentId: $scope.currentNode.id, sortedIds: sortedIds })
            .then(function () {
                $scope.sortableModel.complete = true;
                treeService.loadNodeChildren({ node: $scope.nav.ui.currentNode, section: $scope.nav.ui.currentSection });
            });

    });

}

angular.module("umbraco").controller("Umbraco.Editors.Content.SortController", ContentSortController);
