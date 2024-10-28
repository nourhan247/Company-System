var displayEmployees = function (){
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));

    var employeeRow = ``;

    for(var i=0;i<employeesJSON.length;i++){
        employeeRow+= `
            <tr>
                <td>${employeesJSON[i].employeeID}</td>
                <td>${employeesJSON[i].employeeName}</td>
                <td>${employeesJSON[i].employeeSalary}</td>
                <td>${employeesJSON[i].employeePerformanceRate}</td>
                <td>${employeesJSON[i].employeeAge}</td>
                <td>${employeesJSON[i].employeeDateOfBirth}</td>
                <td>${employeesJSON[i].employeeGender}</td>
                <td>${employeesJSON[i].employeeSkills}</td>
                <td>${employeesJSON[i].employeeStatus}</td>
            </tr>
        `;
    }
    
    document.getElementById("employeesRows").innerHTML = employeeRow;
}();