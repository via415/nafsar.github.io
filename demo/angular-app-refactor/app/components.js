angular.module("components", ['addService'])
    .directive("displayList", displayList);

function myCtrl(listService) {
    var lstblk = this;
    this.pholder = "Ready to add";
    listService.then(function (data) {
        lstblk.items = data;
    });

    this.addItem = function () {
        this.warning = "";
        if (!this.addData) { this.pholder = "Please add an item"; return; }
        if (lstblk.items.indexOf(this.addData) == -1) {
            lstblk.items.push(this.addData);
        } else {
            window.alert(this.addData + "\n\nIt is in the list!");
        }
    }

    this.removeItem = function (list) {
        this.errortext = "";
        lstblk.items.splice(list, 1);
    }
};

function displayList() {
    return {
        controller: myCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'mylist.html'
    }
}