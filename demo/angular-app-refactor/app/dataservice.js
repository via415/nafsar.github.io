angular.module("addService",[])
.service("listService", listService);

function listService($http) {
    return $http.get("app/data.js").then(function (response) {
        return response.data;
    }, function (rejected) {
        let def=["Angular", "Controller","Service","component","directive", "Dependency Injection"];
        console.log("No data found!\n"+JSON.stringify(rejected.data)+"\n default object is used!");
        return def;     
    });
};