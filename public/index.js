//if there is at least a row, display table of favorite
//otherwise, when the table is empty, hide table (first time)
function DisplayTableOrNot(){
    if($("#row1").text().length == 0){
            document.getElementById("table").style.display = "none";
    }
}