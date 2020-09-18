var employeePromise = d3.json("employee.json");

var empPromiseSucc = function(employees)
    {
        console.log("Data Successfully Collected!",employees );
        MakeTable(employees);
    }

var empPromiseFail = function(errorMsg)
    {
        console.log("Uh oh! Something went wrong!",errorMsgMsg)
    }

employeePromise.then(empPromiseSucc,empPromiseFail);

var MakeTable=function(employee)
{

var rows=d3.select("#EmpTable tbody")
.selectAll("tr")
.data(employee)
.enter()
.append("tr")

rows.append("td")
.text(function(employee){return employee.firstName})

rows.append("td")
.text(function(employee){return employee.lastName})

rows.append("td")
    .append("img")
.attr("src",function(employee){return employee.photo})
.text(function(employee){return employee.photo})

rows.append("td")
.text(function(employee){return employee.title })

rows.append("td")
.text(function(employee){return employee.unit})

rows.append("td")
.text(function(employee){return employee.email})

rows.append("td")
.text(function(employee){return employee.bio})

rows.append("td")
.text(function(employee){return employee.phone})
}