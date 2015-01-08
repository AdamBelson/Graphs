var app = angular.module('myApp', []);
 
app.directive('barsChart', function ($parse) {
     
     var directiveDefinitionObject = {
         restrict: 'E',
         replace: false,
		 scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           
           var data = attrs.chartData.split(',');
           
           var chart = d3.select(element[0]);
		   
            chart.append("div").attr("class", "chart")
             .selectAll('div')
             .data(data).enter().append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });

         } 
      };
      return directiveDefinitionObject;
   });
   
 app.controller('MainCtrl', [function() {
      var self = this;
      self.notes = [
        {id: 1, label: 'First Note', done: false},
        {id: 2, label: 'Second Note', done: false},
        {id: 3, label: 'Finished Third Note', done: true}
      ];
	  self.getDoneClass = function(note){
		return{
			finished: note.done,
			unfinished: !note.done
		};
	  };;
    }]);
   
   function Ctrl($scope) {
    $scope.myData = [10,20,30,40,60, 80, 20, 50];
}