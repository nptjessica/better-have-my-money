//fill list of Favorites
function addFavorite(){
    var table=document.getElementById("table");

    if($("#row1").text().length == 0){
        document.getElementById("divtable").style.display = "block";
        document.getElementById("row1").innerHTML = document.getElementById("address").value;
    }
    else{
        var length=table.rows.length;
        var row=table.insertRow(length);
        row.innerHTML = document.getElementById("address").value;
    }
}

/*if there is at least a row, display table of favorite
otherwise, when the table is empty, hide table (first time)*/
function DisplayTableOrNot(){
    if($("#row1").text().length == 0){
            document.getElementById("divtable").style.display = "none";
    }
}