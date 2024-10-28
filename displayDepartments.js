var displayDepartments = function (){
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var departmentRow = ``;

    for(var i=0;i<departmentsJSON.length;i++){
        departmentRow+= `
            <tr>
                <td>${departmentsJSON[i].departmentID}</td>
                <td>${departmentsJSON[i].departmentName}</td>
                <td>${departmentsJSON[i].departmentLocation}</td>
                <td>${departmentsJSON[i].departmentStartingDate}</td>
                <td>
                    <a href="projects.html">Show</a>
                </td>
            </tr>
        `;
    }
    
    document.getElementById("departmentsRows").innerHTML = departmentRow;
}();