function getReceipt() {
            var text1 = "<h3>Your Pizza:</h3>";
            var runningTotal = 0;
            var sizeTotal = 0;
            var sizeArray = document.getElementsByClassName("size");
            for (var i = 0; i < sizeArray.length; i++) {
                if (sizeArray[i].checked) {
                    var selectedSize = sizeArray[i].value;
                    
                }
            }
            if (selectedSize === "Personal Pizza") {
                sizeTotal = 6;
            } else if (selectedSize === "Medium Pizza") {
                sizeTotal = 10;
            } else if (selectedSize === "Large Pizza") {
                sizeTotal = 14;
            } else if (selectedSize === "Extra-Large Pizza") {
                sizeTotal = 16;
            }
            runningTotal = sizeTotal;
            text1 = text1 + selectedSize + " " + "$" +sizeTotal+ "<br>";
            getCheese(runningTotal, text1);
        };

        
        function getCheese(runningTotal, text1) {
            var cheeseTotal = 0;
            var cheeseArray = document.getElementsByClassName("cheese");
            for (var i = 0; i < cheeseArray.length; i++) {
                if (cheeseArray[i].checked) {
                    var selectedCheese = cheeseArray[i].value;
                    
                }
            }
            if (selectedCheese === "Extra cheese") {
                cheeseTotal = 3;
            } else {
                cheeseTotal = 0;
            }
            runningTotal = (runningTotal + cheeseTotal);
            text1 = text1 + selectedCheese + " " + "$" + cheeseTotal + "<br>";
            getSauce(runningTotal, text1);
        }

        function getSauce(runningTotal, text1) {
            var sauceTotal = 0;
            var sauceArray = document.getElementsByClassName("sauce");
            for (var i = 0; i < sauceArray.length; i++) {
                if (sauceArray[i].checked) {
                    var selectedSauce = sauceArray[i].value;
                    text1 = text1 + selectedSauce + " " + "$" + sauceTotal + "<br>";
                }
            }
            getCrust(runningTotal, text1);
        }

        function getCrust(runningTotal, text1) {
            var crustTotal = 0;
            var crustArray = document.getElementsByClassName("crust");
            for (var i = 0; i < crustArray.length; i++) {
                if (crustArray[i].checked) {
                    var selectedCrust = crustArray[i].value;
                }
            }
            if (selectedCrust === "Cheese Stuffed Crust") {
                crustTotal = 3;
            } else {
                crustTotal = 0;
            }
            text1 = text1 + selectedCrust + " " + "$" + crustTotal + "<br>";
            runningTotal = (runningTotal + crustTotal);
            getMeat(runningTotal, text1);
        }

        function getMeat(runningTotal, text1) {
            var meatTotal = 0;
            var selectedMeat = [];
            var meatArray = document.getElementsByClassName("meats");
            for (var j = 0; j < meatArray.length; j++) {
                if (meatArray[j].checked) {
                    selectedMeat.push(meatArray[j].value);
                    text1 = text1 + meatArray[j].value + "<br>";
                }
            }
            var meatCount = selectedMeat.length;
            if (meatCount > 1) {
                meatTotal = (meatCount - 1);
            } else {
                meatTotal = 0;
            }
            runningTotal = (runningTotal + meatTotal);
            text1 = text1 + "Meat Total:" + " " + "$" +meatTotal+ "<br>";
            getVeggies(runningTotal, text1);

        }

        function getVeggies(runningTotal, text1) {
            var veggieTotal = 0;
            var selectedVeggie = [];
            var veggieArray = document.getElementsByClassName("veggies");
            for (var k = 0; k < veggieArray.length; k++) {
                if (veggieArray[k].checked) {
                    selectedVeggie.push(veggieArray[k].value);
                    text1 = text1 + veggieArray[k].value + "<br>";
                }
            }
            var veggieCount = selectedVeggie.length;
            if (veggieCount > 1) {
                veggieTotal = (veggieCount - 1);
            }
            runningTotal = (runningTotal + veggieTotal);
            text1 = text1 + "Veggie Total:" + " " + "$" +veggieTotal + "<br>";
            document.getElementById("showText1").innerHTML = text1;
            document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
        }


       