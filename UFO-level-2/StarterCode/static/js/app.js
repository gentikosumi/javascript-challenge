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
  console.log(data);

  var inputCity = d3.select("#city");
  var CityValue = inputCity.property("value");
  console.log(data)

  // var inputState = d3.select("#state");
  // var StateValue = inputState.property("value");


  // filter
  var filteredDate = data.filter(d => d.datetime === inputValue);
  console.log(filteredDate);
  var filteredCity = data.filter(c => c.city === CityValue);
  console.log(filteredCity);
  // var filteredState = data.filter(s => s.state === StateValue);
  // console.log(filteredState);

  var filteredData = data.filter((d => d.datetime === inputValue) && (c => c.city === CityValue));
  console.log(filteredData);

  let response = {
    filteredData, filteredDate, filteredCity
  }

  if (response.filteredData.length !==0) {
    buildTable(filteredData);
  }
    else if (response.filteredData.length === 0 && ((response.filteredDate.length !==0 || response.filteredDate.length !==0))) {
      buildTable(filteredDate || buildTable(filteredCity));
    }
    
    else {
      tbody.append("tr").append("td").text("No results!");
    }

  
  
  // buildTable(filteredData);

}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);