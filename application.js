$(document).ready(function(){
  x = 0;
  $("div").scroll(function(){
    $("span").text( x+= 1);
  });

  //create a <p> node with a price
  //Create a new DOM node by sending the new html into jQuery function
  var price = $("<p>From $399.99</p>"); //creates new node BUT doesn't add to DOM
  //Ways to add node to DOM
  //1. append(<element>);
  //2. prepend(<element>);
  //3. after(<element>);
  //4. before(<element>);
  //1. appendTo(<element>);
  //2. prependTo(<element>);
  //3. insertAfter(<element>);
  //4. insertBefore(<element>);


  //select node of out DOM to serve as reference point to put price node before
  $('button').on('click', function(){
    $(this).after(price);
    $(this).remove();
    //target all buttons from DOM
  });


});

// descendant selector
// $(".destination li");

// child selector or direct descendant
// $(".destination > li");
// find li elements that are children of .destination

//selecting multiple elements
// $(".promo, #france");

//Manipulating the DOM
//Interaction]
//$(document).ready(<event handler function>);
//create a function

//data- tag attribute stores custom data private to page
//embed custom data attributes on all html attributes
//add to any element to provide additional information about objects on page
//jQuery Object methods getter -> .data(<element>) setter -> .data(<name>, <value>)

//fetching div with filters id
//use event delegation to listen for click events for onsale-filter class
//$('#filters').on('click', '.onsale-filter', function() {
  //$('highlighted').removeClass('.highlighted');
//find all vacations on sale
//$('.vacation').filter('.onsale') -> finds element with a class of .vacation and .onsale
//add a class to these vacations to highlight them
//$('.vacation').filter('.onsale').addClass('highlighted');

//});




















