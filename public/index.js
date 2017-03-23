/*if there is at least a row, display table of favorite
otherwise, when the table is empty, hide table (first time)*/
function DisplayTableOrNot(){
    if($("#list").text().length == 0){
            //document.getElementById("divlist").style.display = "none";
            //document.getElementById("divtable").style.display = "none";
    }
}

//fill list of Favorites
function addFavorite(){
    var list=document.getElementById("list");
    var favoriteValue=document.getElementById("address").value;
    var length=list.rows.length;
    var row=list.insertRow(length);

    if($("#list").text().length == 0){
        document.getElementById("divlist").style.display = "block";
        document.getElementById("divtable").style.display = "block";
        length = 1;
        document.getElementById("list").innerHTML ="<td><a name=\"id\" onclick=\"window.open('"+favoriteValue+"');\">"+length+"</a></td>"+
                                                    "<td><a  name=\"address\"onclick=\"window.open('"+favoriteValue+"');\">"+favoriteValue+"</a><td>";
                                                    //SCRAPE LOGO OF WEB SITE <img style=”max-width:300px;max-height:150px” src=”http://data.scrapelogo.com/{domain}/logo”>
    }
    else{
        length +=1;
        row.innerHTML = "<tr><td><a name=\"id\"onclick=\"window.open('"+favoriteValue+"');\">"+length+"</a></td>"+
                        "<td><a name=\"address\"onclick=\"window.open('"+favoriteValue+"');\">"+favoriteValue+"</a><td><tr>";


    }
}


/*
function deleteRow(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}
*/


    /*get the favorite address and put it the JSON file
    https://code.lengstorf.com/get-form-values-as-json/
    */

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
     */
    const handleFormSubmit = event => {
      // Stop the form from submitting since we’re handling that with AJAX.
      event.preventDefault();
      // TODO: Call our function to get the form data.
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















