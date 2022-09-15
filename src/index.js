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
  const users = ["use1", "use2", "use3"];

  addButton.addEventListener("click", function () {
    var table = document.getElementById("table-body");
    var user = document.getElementById("input-username").value;
    const allrows = document.querySelectorAll("tr");
    console.log(allrows[0]);
    var x = users.includes(user);
    for (let row of allrows) {
      if (row.cells[0].innerText === user) {
        console.log(row);
        row.cells[1].innerText = document.getElementById("input-email").value;
        row.cells[2].innerText = document.getElementById("input-address").value;
        row.cells[3].innerText = document.getElementById("input-admin").value;
        return;
      }
    }

    /*const r = row.childNodes();
        r[1].innerText = document.getElementById("input-email").value;
        r[2].innerText = document.getElementById("input-email").value;
        r[3].innerText = document.getElementById("input-email").value;*/
    var newRow = table.insertRow(0);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerText = document.getElementById("input-username").value;
    cell2.innerText = document.getElementById("input-email").value;
    cell3.innerText = document.getElementById("input-address").value;
    //document.getElementById("input-admin").value;
    //var cbox = document.createElement("INPUT");
    //cbox.setAttribute("type", "checkbox");
    //cell4.cbox.innerHTML;

    users.push(document.getElementById("input-username").value);
  });

  emptyButton.addEventListener("click", function () {
    var headercount = 1;
    var mytable = document.getElementById("tab");
    var rowCount = mytable.rows.length;
    console.log(rowCount);

    for (var x = headercount; x < rowCount; x++) {
      mytable.deleteRow(headercount);
    }
  });
}
