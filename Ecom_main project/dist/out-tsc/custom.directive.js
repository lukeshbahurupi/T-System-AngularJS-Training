// The directive definition

function myDirective() {
    return {
        restrict: 'E', // Restrict the directive to element type only
        template: "<div>\n                  <p>{{ ctrl.message }}</p>\n                  <button ng-click=\"ctrl.changeMessage()\">Change Message</button>\n                 </div>",
        controller: MyController,
        controllerAs: 'ctrl',
        bindToController: true // Bind the controller to the directive's scope
    };
}

