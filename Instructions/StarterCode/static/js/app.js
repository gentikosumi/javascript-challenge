// from data.js
var tableData = data;
// YOUR CODE HERE!
const tbody = d3.select("tbody");
function buildTable(ufos) {
  tbody.html("");
  ufos.forEach(dataRow => {
    const row = tbody.append("tr");
    Object.values(dataRow).forEach(val => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// buildTable(tableData);



function handleClick(event) {
  
  var button = d3.select("#filter-btn");

  tbody.html("")
  var inputDate = d3.select("#datetime");

  var inputValue = inputDate.property("value");
  
  // filter
  var filteredDate = data.filter(date => date.datetime === inputValue);
  console.log(filteredDate);
}

// buildTable(filtereddate);
// const tbody = d3.select("tbody")
  

function buildTable(filteredDate) {
  
  filteredDate.forEach(rowData => {
    var row = tbody.append("tr");
    Object.values(rowData).forEach(val => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
