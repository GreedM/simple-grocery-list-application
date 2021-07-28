// function shows list which was initially hidden before clicking "add to list" button
function showList() {
    document.getElementById("list").style.display="block";
}
// declare groceries variable which has an empty array saved in it and the variable groceries cannot be declared
let groceries = [];
// function listing groceries
function listGroceries() {
    // assign array as string to originalString variable
    var originalString = groceries.toString();
    // assign split string to newString variable and join with list item tags, split() and join() methods used - source: https://stackoverflow.com/questions/15375886/split-string-with-commas-to-new-line
    var newString = originalString.split(',').join("</li>"+"<li>");
    // change HTML with id "list" to newString and add li tags around the first item when outputting the list
    document.getElementById("list").innerHTML="<li>"+newString+"</li>";
}
// ask user for grocery item input and push it to the array groceries, list groceries with function listGroceries()
function addToGroceryList() {
    groceries.push(prompt("Please enter a food item to be added to the list"));
    listGroceries();
}
// hide the grocery list completely if there is only one item and "remove from list" button has been clicked, else just remove one grocery list item
function removeFromGroceryList() {
    if(groceries.length === 1) {
        document.getElementById("list").style.display="none";
        groceries.pop();
        listGroceries();
    } else {
        groceries.pop();
        listGroceries();
    }
}