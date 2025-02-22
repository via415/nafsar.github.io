(function (angularComponent) {
  'use strict';
  angular.module('componentExample', [])
    .component('navFaces', {
      transclude: true,
      require: {
        tabsCtrl: '^navMenus'
      },
      bindings: {
        title: '@'
      },
      controller: function () {
        this.$onInit = function () {
          this.tabsCtrl.addFace(this);
          
        };
      },
      templateUrl: 'navFaces.html'
    })
    .component('navMenus', {
      transclude: true,
      controller: function MyTabsController() {
        var faces = this.faces = [];
        this.select = function (face) {
          angular.forEach(faces, function (face) {
            face.selected = false;
          });
          face.selected = true;
        };
        this.addFace = function (face) {
          if (faces.length === 0) {
            this.select(face);
          }
          faces.push(face);
        };
      },
      templateUrl: 'navMenus.html'
    })
    .component('webBrowser', {
      transclude: true,
      templateUrl: 'app/wb.html'
    })
    .component('contact', {
      templateUrl: 'app/contact.html'
    })
    .component('lifeHook', {
      templateUrl: 'app/lh.html'
    })
    .component('bind', {
      templateUrl: 'app/db.html'
    })


})(window.angularComponent);
