function addFavorite(){
    var table=document.getElementById("table");
    var length=table.rows.length;
    var row=table.insertRow(length);

    if($("#row1").text().length == 0){
        document.getElementById("divtable").style.display = "block";
        document.getElementById("row1").innerHTML = document.getElementById("address").value;
    }
    /*else{
        row.innerHTML = document.getElementById("address").value
    }*/

}

//if there is at least a row, display table of favorite
//otherwise, when the table is empty, hide table (first time)
function DisplayTableOrNot(){
    if($("#row1").text().length == 0){
            document.getElementById("divtable").style.display = "none";
    }
}

