// foodtype constructor function

function Foodtype(type, name, quantity, price) {
  this.type          = type;
  this.name          = name;
  this.quantity      = quantity;
  this.price         = price;
}

Foodtype.prototype.total_price = function () { return this.quantity * this.price};

// currently available fruits

var banana = new Foodtype("fruit", "banana", 0, 0.20);
var orange = new Foodtype("fruit", "orange", 0, 0.45);
var apple = new Foodtype("fruit", "apple", 0, 0.60);

// currently available vegetables

var cauliflower = new Foodtype("vegetable", "cauliflower", 0, 1.00);
var broccoli = new Foodtype("vegetable", "broccoli", 0, 0.80);
var turnip = new Foodtype("vegetable", "turnip", 0, 0.95);

// currently available breads

var baguette = new Foodtype("bread", "baguette", 0, 1.00);
var loaf = new Foodtype("bread", "loaf", 0, 1.30);
var roll = new Foodtype("bread", "roll", 0, 0.15);

// currently available meats

var beef = new Foodtype("meat", "beef", 0, 3.00);
var pork = new Foodtype("meat", "pork", 0, 2.00);
var chicken = new Foodtype("meat", "chicken", 0, 1.00);

// function to capture value of <select> option and display available foods

function show_selected_category() { // eslint-disable-line no-unused-vars

    var selected_category = document.getElementById("food_categories").value;

    var available_fruits = document.getElementById("available_fruits");
    var available_vegetables = document.getElementById("available_vegetables");
    var available_breads = document.getElementById("available_breads");
    var available_meats = document.getElementById("available_meats");

    switch(selected_category) {

        case "fruits":
            available_fruits.style.display = "inline-block";
            available_vegetables.style.display = "none";
            available_breads.style.display = "none";
            available_meats.style.display = "none";
            break;

        case "vegetables":
            available_vegetables.style.display = "inline-block";
            available_fruits.style.display = "none";
            available_breads.style.display = "none";
            available_meats.style.display = "none";
            break;

        case "breads":
            available_breads.style.display = "inline-block";
            available_fruits.style.display = "none";
            available_vegetables.style.display = "none";
            available_meats.style.display = "none";
            break;

        case "meats":
            available_meats.style.display = "inline-block";
            available_fruits.style.display = "none";
            available_vegetables.style.display = "none";
            available_breads.style.display = "none";
            break;

    }
        
}

// code for total bill at bottom of basket

function total_bill_amount() {

    var total_amount = banana.total_price() + orange.total_price() + apple.total_price() + cauliflower.total_price() +
                       broccoli.total_price() + turnip.total_price() + baguette.total_price() + loaf.total_price() + 
                       roll.total_price() + beef.total_price() + pork.total_price() + chicken.total_price();
    var total_amount_formatted = total_amount.toFixed(2);
    var total_bill = " " + "£" + total_amount_formatted;

    document.getElementById("total_bill").innerHTML = total_bill;

}

// global variables

var ul = document.getElementById('basket');

// **code for fruit functions**

// code for banana functions

document.getElementById('quantity_plus_one_banana').addEventListener('click', quantity_plus_one_banana);

function quantity_plus_one_banana() {

  if(banana.quantity === 0) {

    banana.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "banana_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    banana.quantity += 1;

  }
    
  var total_price_formatted = banana.total_price().toFixed(2);
  document.getElementById("banana_li").innerHTML = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;

  banana_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_banana').addEventListener('click', quantity_minus_one_banana);

function quantity_minus_one_banana() {

  if(banana.quantity >= 1) {
    banana.quantity -= 1;
  }

  if(banana.quantity === 0) {
    remove_bananas_from_basket();
  }

  var total_price_formatted = banana.total_price().toFixed(2);
  document.getElementById("banana_li").innerHTML = banana.name + " " + banana.quantity + " " + "£" + total_price_formatted;

  banana_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_bananas_from_basket').addEventListener('click', remove_bananas_from_basket);

function remove_bananas_from_basket() {

  banana.quantity = 0;

  ul.removeChild(document.getElementById("banana_li"));

  banana_quantity_display()
  total_bill_amount();

}

function banana_quantity_display() {

  document.getElementById("banana_quantity_display").innerHTML = banana.quantity; 

}

// code for orange functions

document.getElementById('quantity_plus_one_orange').addEventListener('click', quantity_plus_one_orange);

function quantity_plus_one_orange() {

  if(orange.quantity === 0) {

    orange.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "orange_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    orange.quantity += 1;

  }
    
  var total_price_formatted = orange.total_price().toFixed(2);
  document.getElementById("orange_li").innerHTML = orange.name + " " + orange.quantity + " " + "£" + total_price_formatted;

  orange_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_orange').addEventListener('click', quantity_minus_one_orange);

function quantity_minus_one_orange() {

  if(orange.quantity >= 1) {
    orange.quantity -= 1;
  }

  if(orange.quantity === 0) {
    remove_oranges_from_basket();
  }

  var total_price_formatted = orange.total_price().toFixed(2);
  document.getElementById("orange_li").innerHTML = orange.name + " " + orange.quantity + " " + "£" + total_price_formatted;

  orange_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_oranges_from_basket').addEventListener('click', remove_oranges_from_basket);

function remove_oranges_from_basket() {

  orange.quantity = 0;

  ul.removeChild(document.getElementById("orange_li"));

  orange_quantity_display()
  total_bill_amount();

}

function orange_quantity_display() {

  document.getElementById("orange_quantity_display").innerHTML = orange.quantity; 

}

// code for apple functions

document.getElementById('quantity_plus_one_apple').addEventListener('click', quantity_plus_one_apple);

function quantity_plus_one_apple() {

  if(apple.quantity === 0) {

    apple.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "apple_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    apple.quantity += 1;

  }
    
  var total_price_formatted = apple.total_price().toFixed(2);
  document.getElementById("apple_li").innerHTML = apple.name + " " + apple.quantity + " " + "£" + total_price_formatted;

  apple_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_apple').addEventListener('click', quantity_minus_one_apple);

function quantity_minus_one_apple() {

  if(apple.quantity >= 1) {
    apple.quantity -= 1;
  }

  if(apple.quantity === 0) {
    remove_apples_from_basket();
  }

  var total_price_formatted = apple.total_price().toFixed(2);
  document.getElementById("apple_li").innerHTML = apple.name + " " + apple.quantity + " " + "£" + total_price_formatted;

  apple_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_apples_from_basket').addEventListener('click', remove_apples_from_basket);

function remove_apples_from_basket() {

  apple.quantity = 0;

  ul.removeChild(document.getElementById("apple_li"));

  apple_quantity_display()
  total_bill_amount();

}

function apple_quantity_display() {

  document.getElementById("apple_quantity_display").innerHTML = apple.quantity; 

}

// **code for vegetable functions**

// code for cauliflower functions

document.getElementById('quantity_plus_one_cauliflower').addEventListener('click', quantity_plus_one_cauliflower);

function quantity_plus_one_cauliflower() {

  if(cauliflower.quantity === 0) {

    cauliflower.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "cauliflower_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    cauliflower.quantity += 1;

  }
    
  var total_price_formatted = cauliflower.total_price().toFixed(2);
  document.getElementById("cauliflower_li").innerHTML = cauliflower.name + " " + cauliflower.quantity + " " + "£" + total_price_formatted;

  cauliflower_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_cauliflower').addEventListener('click', quantity_minus_one_cauliflower);

function quantity_minus_one_cauliflower() {

  if(cauliflower.quantity >= 1) {
    cauliflower.quantity -= 1;
  }

  if(cauliflower.quantity === 0) {
    remove_cauliflowers_from_basket();
  }

  var total_price_formatted = cauliflower.total_price().toFixed(2);
  document.getElementById("cauliflower_li").innerHTML = cauliflower.name + " " + cauliflower.quantity + " " + "£" + total_price_formatted;

  cauliflower_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_cauliflowers_from_basket').addEventListener('click', remove_cauliflowers_from_basket);

function remove_cauliflowers_from_basket() {

  cauliflower.quantity = 0;

  ul.removeChild(document.getElementById("cauliflower_li"));

  cauliflower_quantity_display()
  total_bill_amount();

}

function cauliflower_quantity_display() {

  document.getElementById("cauliflower_quantity_display").innerHTML = cauliflower.quantity; 

}

// code for broccoli functions

document.getElementById('quantity_plus_one_broccoli').addEventListener('click', quantity_plus_one_broccoli);

function quantity_plus_one_broccoli() {

  if(broccoli.quantity === 0) {

    broccoli.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "broccoli_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    broccoli.quantity += 1;

  }
    
  var total_price_formatted = broccoli.total_price().toFixed(2);
  document.getElementById("broccoli_li").innerHTML = broccoli.name + " " + broccoli.quantity + " " + "£" + total_price_formatted;

  broccoli_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_broccoli').addEventListener('click', quantity_minus_one_broccoli);

function quantity_minus_one_broccoli() {

  if(broccoli.quantity >= 1) {
    broccoli.quantity -= 1;
  }

  if(broccoli.quantity === 0) {
    remove_broccolis_from_basket();
  }

  var total_price_formatted = broccoli.total_price().toFixed(2);
  document.getElementById("broccoli_li").innerHTML = broccoli.name + " " + broccoli.quantity + " " + "£" + total_price_formatted;

  broccoli_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_broccolis_from_basket').addEventListener('click', remove_broccolis_from_basket);

function remove_broccolis_from_basket() {

  broccoli.quantity = 0;

  ul.removeChild(document.getElementById("broccoli_li"));

  broccoli_quantity_display()
  total_bill_amount();

}

function broccoli_quantity_display() {

  document.getElementById("broccoli_quantity_display").innerHTML = broccoli.quantity; 

}

// code for turnip functions

document.getElementById('quantity_plus_one_turnip').addEventListener('click', quantity_plus_one_turnip);

function quantity_plus_one_turnip() {

  if(turnip.quantity === 0) {

    turnip.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "turnip_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    turnip.quantity += 1;

  }
    
  var total_price_formatted = turnip.total_price().toFixed(2);
  document.getElementById("turnip_li").innerHTML = turnip.name + " " + turnip.quantity + " " + "£" + total_price_formatted;

  turnip_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_turnip').addEventListener('click', quantity_minus_one_turnip);

function quantity_minus_one_turnip() {

  if(turnip.quantity >= 1) {
    turnip.quantity -= 1;
  }

  if(turnip.quantity === 0) {
    remove_turnips_from_basket();
  }

  var total_price_formatted = turnip.total_price().toFixed(2);
  document.getElementById("turnip_li").innerHTML = turnip.name + " " + turnip.quantity + " " + "£" + total_price_formatted;

  turnip_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_turnips_from_basket').addEventListener('click', remove_turnips_from_basket);

function remove_turnips_from_basket() {

  turnip.quantity = 0;

  ul.removeChild(document.getElementById("turnip_li"));

  turnip_quantity_display()
  total_bill_amount();

}

function turnip_quantity_display() {

  document.getElementById("turnip_quantity_display").innerHTML = turnip.quantity; 

}

// **code for bread functions**

// code for baguette functions

document.getElementById('quantity_plus_one_baguette').addEventListener('click', quantity_plus_one_baguette);

function quantity_plus_one_baguette() {

  if(baguette.quantity === 0) {

    baguette.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "baguette_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    baguette.quantity += 1;

  }
    
  var total_price_formatted = baguette.total_price().toFixed(2);
  document.getElementById("baguette_li").innerHTML = baguette.name + " " + baguette.quantity + " " + "£" + total_price_formatted;

  baguette_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_baguette').addEventListener('click', quantity_minus_one_baguette);

function quantity_minus_one_baguette() {

  if(baguette.quantity >= 1) {
    baguette.quantity -= 1;
  }

  if(baguette.quantity === 0) {
    remove_baguettes_from_basket();
  }

  var total_price_formatted = baguette.total_price().toFixed(2);
  document.getElementById("baguette_li").innerHTML = baguette.name + " " + baguette.quantity + " " + "£" + total_price_formatted;

  baguette_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_baguettes_from_basket').addEventListener('click', remove_baguettes_from_basket);

function remove_baguettes_from_basket() {

  baguette.quantity = 0;

  ul.removeChild(document.getElementById("baguette_li"));

  baguette_quantity_display()
  total_bill_amount();

}

function baguette_quantity_display() {

  document.getElementById("baguette_quantity_display").innerHTML = baguette.quantity; 

}
  
// code for loaf functions
  
document.getElementById('quantity_plus_one_loaf').addEventListener('click', quantity_plus_one_loaf);

function quantity_plus_one_loaf() {

  if(loaf.quantity === 0) {

    loaf.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "loaf_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    loaf.quantity += 1;

  }
    
  var total_price_formatted = loaf.total_price().toFixed(2);
  document.getElementById("loaf_li").innerHTML = loaf.name + " " + loaf.quantity + " " + "£" + total_price_formatted;

  loaf_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_loaf').addEventListener('click', quantity_minus_one_loaf);

function quantity_minus_one_loaf() {

  if(loaf.quantity >= 1) {
    loaf.quantity -= 1;
  }

  if(loaf.quantity === 0) {
    remove_loafs_from_basket();
  }

  var total_price_formatted = loaf.total_price().toFixed(2);
  document.getElementById("loaf_li").innerHTML = loaf.name + " " + loaf.quantity + " " + "£" + total_price_formatted;

  loaf_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_loafs_from_basket').addEventListener('click', remove_loafs_from_basket);

function remove_loafs_from_basket() {

  loaf.quantity = 0;

  ul.removeChild(document.getElementById("loaf_li"));

  loaf_quantity_display()
  total_bill_amount();

}

function loaf_quantity_display() {

  document.getElementById("loaf_quantity_display").innerHTML = loaf.quantity; 

}
  
// code for roll functions
  
document.getElementById('quantity_plus_one_roll').addEventListener('click', quantity_plus_one_roll);

function quantity_plus_one_roll() {

  if(roll.quantity === 0) {

    roll.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "roll_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    roll.quantity += 1;

  }
    
  var total_price_formatted = roll.total_price().toFixed(2);
  document.getElementById("roll_li").innerHTML = roll.name + " " + roll.quantity + " " + "£" + total_price_formatted;

  roll_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_roll').addEventListener('click', quantity_minus_one_roll);

function quantity_minus_one_roll() {

  if(roll.quantity >= 1) {
    roll.quantity -= 1;
  }

  if(roll.quantity === 0) {
    remove_rolls_from_basket();
  }

  var total_price_formatted = roll.total_price().toFixed(2);
  document.getElementById("roll_li").innerHTML = roll.name + " " + roll.quantity + " " + "£" + total_price_formatted;

  roll_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_rolls_from_basket').addEventListener('click', remove_rolls_from_basket);

function remove_rolls_from_basket() {

  roll.quantity = 0;

  ul.removeChild(document.getElementById("roll_li"));

  roll_quantity_display()
  total_bill_amount();

}

function roll_quantity_display() {

  document.getElementById("roll_quantity_display").innerHTML = roll.quantity; 

}

// **code for meat functions**

// code for beef functions

document.getElementById('quantity_plus_one_beef').addEventListener('click', quantity_plus_one_beef);

function quantity_plus_one_beef() {

  if(beef.quantity === 0) {

    beef.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "beef_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    beef.quantity += 1;

  }
    
  var total_price_formatted = beef.total_price().toFixed(2);
  document.getElementById("beef_li").innerHTML = beef.name + " " + beef.quantity + " " + "£" + total_price_formatted;

  beef_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_beef').addEventListener('click', quantity_minus_one_beef);

function quantity_minus_one_beef() {

  if(beef.quantity >= 1) {
    beef.quantity -= 1;
  }

  if(beef.quantity === 0) {
    remove_beefs_from_basket();
  }

  var total_price_formatted = beef.total_price().toFixed(2);
  document.getElementById("beef_li").innerHTML = beef.name + " " + beef.quantity + " " + "£" + total_price_formatted;

  beef_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_beefs_from_basket').addEventListener('click', remove_beefs_from_basket);

function remove_beefs_from_basket() {

  beef.quantity = 0;

  ul.removeChild(document.getElementById("beef_li"));

  beef_quantity_display()
  total_bill_amount();

}

function beef_quantity_display() {

  document.getElementById("beef_quantity_display").innerHTML = beef.quantity; 

}
  
// code for pork functions
  
document.getElementById('quantity_plus_one_pork').addEventListener('click', quantity_plus_one_pork);

function quantity_plus_one_pork() {

  if(pork.quantity === 0) {

    pork.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "pork_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    pork.quantity += 1;

  }
    
  var total_price_formatted = pork.total_price().toFixed(2);
  document.getElementById("pork_li").innerHTML = pork.name + " " + pork.quantity + " " + "£" + total_price_formatted;

  pork_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_pork').addEventListener('click', quantity_minus_one_pork);

function quantity_minus_one_pork() {

  if(pork.quantity >= 1) {
    pork.quantity -= 1;
  }

  if(pork.quantity === 0) {
    remove_porks_from_basket();
  }

  var total_price_formatted = pork.total_price().toFixed(2);
  document.getElementById("pork_li").innerHTML = pork.name + " " + pork.quantity + " " + "£" + total_price_formatted;

  pork_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_porks_from_basket').addEventListener('click', remove_porks_from_basket);

function remove_porks_from_basket() {

  pork.quantity = 0;

  ul.removeChild(document.getElementById("pork_li"));

  pork_quantity_display()
  total_bill_amount();

}

function pork_quantity_display() {

  document.getElementById("pork_quantity_display").innerHTML = pork.quantity; 

}
  
// code for chicken functions
  
document.getElementById('quantity_plus_one_chicken').addEventListener('click', quantity_plus_one_chicken);

function quantity_plus_one_chicken() {

  if(chicken.quantity === 0) {

    chicken.quantity += 1;

    var li = document.createElement("li");
    li.setAttribute("id", "chicken_li");
    li.appendChild(document.createTextNode(''));
    ul.appendChild(li);

  } else {

    chicken.quantity += 1;

  }
    
  var total_price_formatted = chicken.total_price().toFixed(2);
  document.getElementById("chicken_li").innerHTML = chicken.name + " " + chicken.quantity + " " + "£" + total_price_formatted;

  chicken_quantity_display()
  total_bill_amount();
    
}

document.getElementById('quantity_minus_one_chicken').addEventListener('click', quantity_minus_one_chicken);

function quantity_minus_one_chicken() {

  if(chicken.quantity >= 1) {
    chicken.quantity -= 1;
  }

  if(chicken.quantity === 0) {
    remove_chickens_from_basket();
  }

  var total_price_formatted = chicken.total_price().toFixed(2);
  document.getElementById("chicken_li").innerHTML = chicken.name + " " + chicken.quantity + " " + "£" + total_price_formatted;

  chicken_quantity_display()
  total_bill_amount();

}

document.getElementById('remove_chickens_from_basket').addEventListener('click', remove_chickens_from_basket);

function remove_chickens_from_basket() {

  chicken.quantity = 0;

  ul.removeChild(document.getElementById("chicken_li"));

  chicken_quantity_display()
  total_bill_amount();

}

function chicken_quantity_display() {

  document.getElementById("chicken_quantity_display").innerHTML = chicken.quantity; 

}