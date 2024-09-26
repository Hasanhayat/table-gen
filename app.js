function fun() {
    let table = document.querySelector("#table").value;
    let tableDu = document.querySelector("#table-duration").value;
    let tableContainer = document.querySelector("#table-container");

    tableContainer.innerHTML = "";

    tableDu = ++tableDu;

    if (table && tableDu > 1) {
        tableContainer.innerHTML = `<h2>Table of ${table}</h2>`;
        for (let i = 1; i < tableDu; i++) {
            let row = document.createElement("div");
            row.classList.add("table-row");
            row.innerText = `${table} x ${i} = ${table * i}`;
            tableContainer.appendChild(row);
        }
    } else {
        tableContainer.innerHTML = `<p>Please enter valid inputs.</p>`;
    }
  }