var displayProjects = function (){
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var projectRow = ``;

    for(var i=0;i<departmentsJSON.length;i++){
        var projectsJSON = departmentsJSON[i].departmentProjects;
        
        for(var j=0;j<projectsJSON.length;j++){
            projectRow+= `
                <tr>
                    <td>${projectsJSON[j].projectID}</td>
                    <td>${projectsJSON[j].projectName}</td>
                    <td>${projectsJSON[j].projectNumberOfHours}</td>
                    <td>${projectsJSON[j].projectlocation}</td>
                    <td>${projectsJSON[j].departmentOfProject}</td>
                </tr>
            `;
        }

    }
    
    document.getElementById("projectsRows").innerHTML = projectRow;
}();