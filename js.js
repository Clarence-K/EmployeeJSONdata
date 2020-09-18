var employeePromise = d3.csv("employee.json");

var empPromiseSucc = function(employee)
    {
        console.log("Data Successfully Collected!");
    }

var empPromiseFail = function(errorMsg)
    {
        console.log("Uh oh! Something went wrong!")
    }

employeePromise.then(empPromiseSucc,empPromiseFail);