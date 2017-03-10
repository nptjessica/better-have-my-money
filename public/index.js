/*if there is at least a row, display table of favorite
otherwise, when the table is empty, hide table (first time)*/
function DisplayTableOrNot(){
    if($("#table").text().length == 0){
            document.getElementById("divtable").style.display = "none";
    }
}

//fill list of Favorites
function addFavorite(){
    var table=document.getElementById("table");
    var favoriteValue=document.getElementById("address").value;
    var length=table.rows.length;
    var row=table.insertRow(length);

    if($("#table").text().length == 0){
        document.getElementById("divtable").style.display = "block";
        document.getElementById("table").innerHTML ="<a onclick=\"window.open('"+favoriteValue+"');\">"+favoriteValue+"</a>";
    }
    else{
        row.innerHTML = "<a onclick=\"window.open('"+favoriteValue+"');\">"+favoriteValue+"</a>";
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
