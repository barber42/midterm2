//app.js for midterm2

angular.module('product',[])
.controller('MainCtrl',[
	'$scope', '$http',
	function($scope,$http){
		//$scope.test = "Hello";


	$scope.create = function(product) {
		return $http.post('/inventory',product).success(function(data){
			$scope.inventory.push(data);
		});
	};
//Add Merch Funtion
		$scope.addMerch = function(){
			$scope.inventory.push({name:$scope.itemName,
			price:$scope.itemPrice,
			order:0,
			photo:$scope.itemPic});
			
			if($scope.itemName ===''){return;}
			console.log("in addMerch with "+$scope.itemName);
			$scope.create({
				name: itemName,
				price: itemPrice,
				order: 0,
				photo: itemPic,	
			});
			

			$scope.itemName='';
			$scope.itemPrice='';
			$scope.itemPic='';
		}

//Inventory array

	//	$scope.inventory =[
	//		{name:'Beans', price:3, order:0, photo:'https://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/listicle_slide_custom_user_phone_1x/public/redkidneybeans_juan_nel_1100.jpg?itok=BvCUvwzx'},
	//		{name:'iPod', price:3, order:0, photo:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/po/ipod/touch/ipod-touch-product-blue-2015_GEO_US?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1482277688667'},
	//		{name:'Diamond', price:30000, order:0, photo:'http://www.tiffany.com/shared/images/engagement/flawless-diamond.png'},
	//	];


  $scope.getAll = function() {
    return $http.get('/inventory').success(function(data){
      angular.copy(data, $scope.inventory);
    });
  };
  $scope.getAll();

//End of controller
	}
]);