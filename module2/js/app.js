(function () {
  'use strict';

    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
      function ToBuyController(ShoppingListCheckOffService) {
        var buylist = this;

        buylist.toBuyList = ShoppingListCheckOffService.toBuy();

        buylist.remove = function (itemIndex) {
          ShoppingListCheckOffService.remove(itemIndex);
        };

        buylist.message = function () {
          return (buylist.toBuyList == "");
        };

      }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
      function AlreadyBoughtController(ShoppingListCheckOffService) {
          var secondList = this;

          secondList.boughtlist = ShoppingListCheckOffService.alreadyBoughtList;

          secondList.message = function () {
            return (secondList.boughtlist=="");
          };
      }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyList = [];
    service.alreadyBoughtList =[];

    service.items = [
      {
        name: "Cookies",
        quantity: "25"
      },
      {
        name: "Donuts",
        quantity: "20"
      },
      {
        name: "Chacolate",
        quantity: "30"
      },
      {
        name: "Cake",
        quantity: "13"
      },
      {
        name : "Chips",
        quantity : "40"
      },
      {
        name : "Dark Chacolates",
        quantity : "27"
      },
      {
        name : "Banana",
        quantity : "24"
      },
      {
        name : "Sugar Candy",
        quantity : "100"
      }
    ];

    service.toBuy = function () {
        service.toBuyList = service.items;
        return service.toBuyList;
    };

    service.remove = function (itemIndex) {
      var x = service.toBuyList.splice(itemIndex, 1)[0];
      service.alreadyBoughtList.push(x);
      console.log(service.alreadyBoughtList);
      return service.alreadyBoughtLis;
    };



  }


})();
