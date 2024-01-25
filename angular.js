<!DOCTYPE html>
<html>
    <script src="angular.js"></script>
<body>
    <div ng-app ="myApp" ng-controller = "arthCtrl">
        Enter the First Number :<input type="text" mg-model="val1"><br>
        Enter the Second Number :<input type="text" mg-model="val2"><br>
        <br>
        <button ng-click="add()">Addition</button>
        <button ng-click="mul()">Multiplication</button>
        <button ng-click="sub()">Subtraction</button>
        <button ng-click="div()">Division</button>
    </div>
    
</body>
</html>