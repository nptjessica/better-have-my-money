var list = document.getElementById("list");
var favoriteValue = document.getElementById("address").value;

/*if there is at least a row, display table of favorite
otherwise, when the table is empty, hide table (first time)*/
function DisplayTableOrNot(){
    if($("#list").text().length == 0){
            //document.getElementById("divlist").style.display = "none";
            //document.getElementById("divtable").style.display = "none";
    }
}

function trimAddress(){

}

//fill list of Favorites/add a bookmark into the list
function addFavorite(){

    var length = list.rows.length;
    var row = list.insertRow(length);

    var id= "<td><a name=\"id\" onclick=\"window.open('"+favoriteValue+"');\"  draggable=\"true\" ondragstart\"drag(event)\" >"+length+"</a></td>";
    var image ="<td><a  name=\"address\" onclick=\"window.open('"+favoriteValue+"');\" >"+"<img style=\"max-width:300px;max-height:150px\" src=\"http://data.scrapelogo.com/" + favoriteValue+ "/logo\">"+"</a><td>";
    var //address = "<td><a  name=\"address\" onclick=\"window.open('"+favoriteValue+"');\" draggable=\"true\" ondragstart\"drag(event)\" >"+favoriteValue+"</a><td>";
     buttonDelete = "<td><input type=\"button\" data-icon=\"delete\" value=\"delete\" data-iconpos=\"notext\" onclick=\"deleteFavorite()\" ></td>";
        //SCRAPE LOGO OF WEB SITE <img style=\"max-width:300px;max-height:150px\" src=\"http://data.scrapelogo.com/" + {domain}+ "/logo\">"
    if($("#list").text().length == 0){
        document.getElementById("divlist").style.display = "block";
        length = 1;
        document.getElementById("list").innerHTML = id + image + buttonDelete;

        document.getElementById("divtable").style.display = "block";

    }
    else{
        length += 1;
        row.innerHTML = id + address + buttonDelete;
    }
}
//delete the Favorite row from the list
function deleteFavorite()
  {
    var current = window.event.srcElement;
    //here we will delete the line
    while ( (current = current.parentElement)  && current.tagName !="TR");
         current.parentElement.removeChild(current);
  }


/*
//drag and drop
$( init );

function init() {
  $('#allList').draggable(){
    helper:"clone"
  };
  $('#divtable').droppable( {
    drop: handleDropEvent
  } );
}

function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Link", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Link");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}






    /*get the favorite address and put it the JSON file
    https://code.lengstorf.com/get-form-values-as-json/


    //find our form in the DOM using its id
    const form = document.getElementById('#form');
    //get the form data with our (yet to be defined) function
    const data = getFormDataJSON(form);
    //do something with the favorite address
    doSomething(data.table.address);

    /**
     * A handler function to prevent default submission and run our custom script.
     * @param  {Event} event  the submit event triggered by the user
     * @return {void}

    const handleFormSubmit = event => {
      // Stop the form from submitting since we’re handling that with AJAX.
      event.preventDefault();
      const data = {};
      // Demo only: print the form data onscreen as a formatted JSON object.
      const dataContainer = document.getElementsById('#list');
      // Use `JSON.stringify()` to make the output valid, human-readable JSON.
      dataContainer.textContent = JSON.stringify(data, null, "  ");
      // ...this is where we’d actually do something with the form data...
    };
function handleSubmit(){

}

//display table of favorite from favorite.json file
function displayFavoriteJSON(){
    var favorite = loadJSON("favorite.json");
}

*/













