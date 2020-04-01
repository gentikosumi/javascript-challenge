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

function handleClick() {
  var button = d3.select("#filter-btn");

  var inputDate = d3.select("#datetime");

  var inputValue = inputDate.property("value");
  console.log(typeof inputValue);
  console.log(data);

  // filter
  var filteredDate = data.filter(data => data.datetime === inputValue);
  console.log(filteredDate);

  buildTable(filteredDate);

}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
