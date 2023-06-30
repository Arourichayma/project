var data = [
  {
    category: "pizza thon",
    imgSrc: "images/pizzathon.jpg",
    price: 16.000+"dt",
  },
  {
    category: "pizza 4saisons",
    imgSrc: "images/4saisons.jpg",
    price: 22.000+"dt",
  },
  {
    category: "pizza 4fromage",
    imgSrc: "images/4fromage.jpg",
    price: 17.000+"dt",
  },
  {
    category: "pizza peperonie",
    imgSrc: "images/pepe.jpg",
    price: 19.000 +"dt",
  },
  {
    category: "pizza viande hachée",
    imgSrc: "images/pizzaviandehachée.jpg",
    price: 21.000+"dt",
  },
  {
    category: "pizza vegan",
    imgSrc: "images/vegan.jpg",
    price: 20.000+"dt",
  },
  {
    category: "pizza poulée",
    imgSrc: "images/poule.jpg",
    price: 18.500+"dt",
  },
  {
    category: "pizza fruit d'mér",
    imgSrc: "images/fruitd'mer.jpg",
    price: 23.000 +"dt",
  },
  {
    category: "pizza légume",
    imgSrc: "images/legume.jpg",
    price: 18.500+"dt" ,
  },
];
var each = function (coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
};
var filter = function (array, predicate) {
  var acc = [];
  each(array, function (e, i) {
    if (predicate(e, i)) {
      acc.push(e);
    }
  });
  return acc;
};
each(data, function (e) {
  var div = $("<div></div>");
  div.attr("class", "pizza-container");
  var p=$("<p></p>");
  var p2=$("<p></p>");
  var pizzaCategories = [
    "pizza thon",
    "pizza 4saisons",
    "pizza 4fromage",
    "pizza pepe",
    "pizza fruit d'mér",
    "pizza poulée",
    "pizza légume",
    "pizza vegan",
    "pizza viande hachée",
    "pizza peperonie"
  ];
  if (pizzaCategories.includes(e.category)) {
    p.text(e.category);
    p.attr("class", "name");
    p2.text(e.price);
    p2.attr("class", "name");
  }
  var image = $("<img>");
  image.attr("src", e.imgSrc);
  div.append(image);
  div.append(p);
  div.append(p2);
  $("#container").append(div);
});
$("button").click(function () {
  var inputText = $("input").val();

  var filteredArray = filter(data, function(e,i) {
    return e.category.toLowerCase().includes(inputText.toLowerCase());
  });
  $("#container").empty();
  $("input").val("");
  each(filteredArray, function (e, i) {
  var div = $("<div></div>");
  div.attr("class", "pizza-container");
  var p=$("<p></p>");
  var p2=$("<p></p>");
  var pizzaCategories = [
    "pizza thon",
    "pizza 4saisons",
    "pizza 4fromage",
    "pizza pepe",
    "pizza fruit d'mér",
    "pizza poulée",
    "pizza légume",
    "pizza vegan",
    "pizza viande hachée",
    "pizza peperonie"
  ];
  if (pizzaCategories.includes(e.category)) {
    p.text(e.category);
    p.attr("class", "name");
    p2.text(e.price);
    p2.attr("class", "name");
  }
  var image = $("<img>");
  image.attr("src", e.imgSrc);
  div.append(image);
  div.append(p);
  div.append(p2);
  $("#container").append(div);
  });
  });

$("body").click(function (e) {
  console.log(e.target, "the target");
});