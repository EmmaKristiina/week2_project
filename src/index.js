/* Lähteinä käytetty  kurssimateriaalien lisäksi:
https://www.w3schools.com/jsref/met_table_insertrow.asp

*/
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log("filee toimii");

if (document.readyState !== "loading") {
  console.log("valmis");
  initialize();
} else {
  document.addEventListner("DOMContetntLoaded", function () {
    console.log("else valmis");
    initialize();
  });
}

function initialize() {
  const addButton = document.getElementById("submit-data");
  const emptyButton = document.getElementById("empty-table");

  addButton.addEventListener("click", function () {
    console.log("nappi toimii");
    var table = document.getElementById("tab");
    /*var user = getElementById("input-username").value;
    if (table.includes("user" === true)){


    }
    else{*/
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerText = document.getElementById("input-username").value;
    cell2.innerText = document.getElementById("input-email").value;
    cell3.innerText = document.getElementById("input-address").value;
    cell4.innerText = document.getElementById("input-admin").value;
    /*}*/
  });

  emptyButton.addEventListener("click", function () {
    console.log("poisto nappi toimii");
    var headercount = 1;
    var mytable = document.getElementById("tab");
    var rowCount = mytable.rows.length;
    console.log(rowCount);

    for (var x = headercount; x < rowCount; x++) {
      mytable.deleteRow(headercount);
    }
  });
}
