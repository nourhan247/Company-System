var employeesFromLoaclStorage = localStorage.getItem("employees");
var employees = employeesFromLoaclStorage? JSON.parse(employeesFromLoaclStorage) : [];


var departmentsFromLoaclStorage = localStorage.getItem("departments");
var departments = departmentsFromLoaclStorage? JSON.parse(departmentsFromLoaclStorage) : [];


var projectsFromLoaclStorage = localStorage.getItem("projects");
var departmentProjects = projectsFromLoaclStorage? JSON.parse(projectsFromLoaclStorage) : [];


function addEmployees(){
    var employeesNumber = Number(prompt("Enter the number of employees: "));

    for(var i=0;i<employeesNumber;i++){
        var employeeID = Number(prompt(`Enter the Id of employee number ${i+1}: `));
        var employeeName = prompt(`Enter the name of employee number ${i+1}: `);
        var employeeSalary = Number(prompt(`Enter the salary of employee number ${i+1}: `));
        var employeePerformanceRate = Number(prompt(`Enter the performance rate of employee number ${i+1}: `));
        var employeeAge = Number(prompt(`Enter the  age of employee number ${i+1}: `));
        var employeeDateOfBirth = prompt(`Enter the date of birth of employee number ${i+1}: `);
        var employeeGender = prompt(`Enter the gender of employee number ${i+1}: `);
        var employeeStatus = prompt(`Enter the status of employee number ${i+1}: `);
        
        var skillsNumber = Number(prompt("Enter the number of skills: "));
        var employeeSkills = [];
        for(var j=0;j<skillsNumber;j++){
            var skill = prompt(`Enter skill number ${j+1}: `);
            employeeSkills.push(skill);
        }

        employees.push({
            employeeID,
            employeeName,
            employeeSalary,
            employeePerformanceRate,
            employeeAge,
            employeeDateOfBirth,
            employeeGender,
            employeeStatus,
            employeeSkills
        });
    }

    var stringfiedEmployeesArray = JSON.stringify(employees);
    localStorage.setItem("employees", stringfiedEmployeesArray);
}

document.getElementById("addEmployees").addEventListener("click",addEmployees);




function addDepartments(){
    var departmentNumber = Number(prompt("Enter the number of Departments: "));

    for(var i=0;i<departmentNumber;i++){
        var departmentID = Number(prompt(`Enter the Id of department number ${i+1}: `));
        var departmentName = prompt(`Enter the name of department number ${i+1}: `);
        var departmentLocation = prompt(`Enter the location of department number ${i+1}: `);
        var departmentStartingDate = prompt(`Enter the starting date of department number ${i+1}: `);
        
        var projectsNumber = Number(prompt("Enter the number of projects: "));
        departmentProjects = [];

        for(var j=0;j<projectsNumber;j++){
            var projectID = prompt(`Enter the id of project number ${j+1}: `);
            var projectName = prompt(`Enter the name of project number ${j+1}: `);
            var projectlocation = prompt(`Enter the location of project number ${j+1}: `);
            var projectNumberOfHours = Number(prompt(`Enter the number of hours of project number ${j+1}: `));
            var departmentOfProject = departmentID;
            
            departmentProjects.push({
                projectID,
                projectName,
                projectNumberOfHours,
                projectlocation,
                departmentOfProject
            });

        }

        departments.push({
            departmentID,
            departmentName,
            departmentLocation,
            departmentStartingDate,
            departmentProjects
        });
    }

    var stringfiedDepartmentsArray = JSON.stringify(departments);
    localStorage.setItem("departments", stringfiedDepartmentsArray);

}

document.getElementById("addDepartments").addEventListener("click",addDepartments);




function addProject(){
    var departmentIdOfProject = Number(prompt("Enter the id of the department of the project: "));
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var departmentFound = false;
    for(var i=0;i<departments.length;i++){
        if(departmentsJSON[i].departmentID == departmentIdOfProject){
            var projectID = prompt(`Enter the id of the project: `);
            var projectName = prompt(`Enter the name of the project: `);
            var projectlocation = prompt(`Enter the location of the project: `);
            var projectNumberOfHours = Number(prompt(`Enter the number of hours of the project: `));
            var departmentOfProject = departmentIdOfProject;
            
            departmentsJSON[i].departmentProjects.push({
                projectID,
                projectName,
                projectNumberOfHours,
                projectlocation,
                departmentOfProject
            });

            departmentFound = true;
            
            var stringfiedDepartmentsArray = JSON.stringify(departmentsJSON);
            localStorage.setItem("departments", stringfiedDepartmentsArray);
            
            break;
        }
    }
    

    if(!departmentFound){
        alert("Department isn't found");
    }

}

document.getElementById("addProject").addEventListener("click",addProject);



function updateEmployee(){
    var employeeIdToedit = Number(prompt("Enter the employee id to edit: "));
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));

    var employeeIDFlag = false;
    for(var i=0;i<employeesJSON.length;i++){
        if(employeeIdToedit == employeesJSON[i].employeeID){
                var flag = true;
                while(flag){
                    var editEmployee = Number(prompt("what do you want to edit:\n1)Name\n2)Salary\n3)Performance Rate\n4)Age\n5)Date of Birth\n6)Gender\n7)Skills\n8)Status\n9)Exit"));
                    switch(editEmployee){
                        case 1:
                            var name = prompt(`Enter the name of employee: `);
                            employeesJSON[i].employeeName = name;
                            break;
                        case 2:
                            var salary = Number(prompt(`Enter the salary of employee: `));
                            employeesJSON[i].employeeSalary = salary;
                            break;
                        case 3:
                            var rate = Number(prompt(`Enter the performance rate of employee: `));
                            employeesJSON[i].employeePerformanceRate = rate;
                            break;
                        case 4:
                            var age = Number(prompt(`Enter the age of employee: `));
                            employeesJSON[i].employeeAge = age;
                            break;
                        case 5:
                            var date = prompt(`Enter the date of birth of employee: `);
                            employeesJSON[i].employeeDateOfBirth = date;
                            break;
                        case 6:
                            var gender = prompt(`Enter the gender of employee: `);
                            employeesJSON[i].employeeGender = gender;
                            break;
                        case 7:
                            var skillsNumberr = Number(prompt("Enter the number of skills: "));
                            for(var j=0;j<skillsNumberr;j++){
                                var skilll = prompt("Enter the skill: ");
                                employeesJSON[i].employeeSkills.push(skilll);
                            }
                            break;
                        case 8:
                            var status = prompt("Enter the status of skills: ");
                            employeesJSON[i].employeeStatus = status;
                            break;
                        case 9:
                            flag = false;
                            break;
                }
                
            }

            employeeIDFlag = true;
        }
    }

    if(!employeeIDFlag){
        alert("ID not found!");
    }

    
    var stringfiedEmployees = JSON.stringify(employeesJSON);
    localStorage.setItem("employees", stringfiedEmployees);

}

document.getElementById("updateEmployee").addEventListener("click",updateEmployee);



function updateDepartment(){
    var departmentIdToedit = Number(prompt("Enter the department id to edit: "));
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var departmentIDFlag = false;
    for(var i=0;i<departmentsJSON.length;i++){
        if(departmentIdToedit == departmentsJSON[i].departmentID){
                var flag = true;
                while(flag){
                    var editdepartment = Number(prompt("what do you want to edit:\n1)Name\n2)Location\n3)Starting date\n4)Exit"));
                    switch(editdepartment){
                        case 1:
                            var name = prompt(`Enter the name of department: `);
                            departmentsJSON[i].departmentName = name;
                            break;
                        case 2:
                            var location = prompt(`Enter the location of department: `);
                            departmentsJSON[i].departmentLocation = location;
                            break;
                        case 3:
                            var date = prompt(`Enter the starting date of department: `);
                            departmentsJSON[i].departmentStartingDate = date;
                            break;
                        case 4:
                            flag = false;
                            break;
                }
                
            }

            departmentIDFlag = true;
        }
    }

    if(!departmentIDFlag){
        alert("ID not found!");
    }

    
    var stringfiedDepartments = JSON.stringify(departmentsJSON);
    localStorage.setItem("departments", stringfiedDepartments);

}

document.getElementById("updateDepartment").addEventListener("click",updateDepartment);



function updateProject(){
    var departmentOfProjectIdToedit = Number(prompt("Enter the department id of the project: "));
    var projectIdToedit = Number(prompt("Enter the project id to edit: "));
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var departmentIDFlag = false;
    var projectIDFlag = false;
    for(var i=0;i<departmentsJSON.length;i++){
        if(projectIdToedit == departmentsJSON[i].departmentID){
            for(var j=0;j<departmentsJSON[i].departmentProjects.length;j++){
                if(departmentsJSON[i].departmentProjects[j].projectID == projectIdToedit){
                    var flag = true;
                    while(flag){
                        var editProject = Number(prompt("what do you want to edit:\n1)Name\n2)Location\n3)Number of hours\n4)Exit"));
                        switch(editProject){
                            case 1:
                                var name = prompt(`Enter the name of project: `);
                                departmentsJSON[i].departmentProjects[j].projectName = name;
                                break;
                            case 2:
                                var location = prompt(`Enter the location of project: `);
                                departmentsJSON[i].departmentProjects[j].projectlocation = location;
                                break;
                            case 3:
                                var date = prompt(`Enter the number of hours of project: `);
                                departmentsJSON[i].departmentProjects[j].projectNumberOfHours = date;
                                break;
                            case 4:
                                flag = false;
                                break;
                    }
                }

                projectIDFlag = true;
            }


                
            }

            if(!projectIDFlag){
                alert("Project not found!");
            }

            departmentIDFlag = true;
        }
    }

    if(!departmentIDFlag){
        alert("Department not found!");
    }

    
    var stringfiedDepartments = JSON.stringify(departmentsJSON);
    localStorage.setItem("departments", stringfiedDepartments);
}

document.getElementById("updateProject").addEventListener("click",updateProject);



function deleteEmployee(){
    var employeeIdToDelete = Number(prompt("Enter the employee id to delete: "));
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));

    var employeeIDFlag = false;
    for(var i=0;i<employeesJSON.length;i++){
        if(employeeIdToDelete == employeesJSON[i].employeeID){
                var flag = true;

                employeesJSON.splice(i, 1);

            employeeIDFlag = true;
        }
    }
    
    if(!employeeIDFlag){
        alert("ID not found!");
    }

    var stringfiedEmployees = JSON.stringify(employeesJSON);
    localStorage.setItem("employees", stringfiedEmployees);
}

document.getElementById("deleteEmployee").addEventListener("click",deleteEmployee);



function deleteDepartment(){
    var departmentIdToDelete = Number(prompt("Enter the department id to delete: "));
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    vardepartmentIDFlag = false;
    for(var i=0;i<departmentsJSON.length;i++){
        if(departmentIdToDelete == departmentsJSON[i].departmentID){
                var flag = true;

                departmentsJSON.splice(i, 1);

           departmentIDFlag = true;
        }
    }
    
    if(!departmentIDFlag){
        alert("ID not found!");
    }

    var stringfiedDepartments = JSON.stringify(departmentsJSON);
    localStorage.setItem("departments", stringfiedDepartments);
}

document.getElementById("deleteDepartment").addEventListener("click",deleteDepartment);



function deleteProject(){
    var departmentOfProjectIdToDelete = Number(prompt("Enter the department id of the project: "));
    var projectIdToedit = Number(prompt("Enter the project id to delete: "));
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var departmentIDFlag = false;
    var projectIDFlag = false;
    for(var i=0;i<departmentsJSON.length;i++){
        if(departmentOfProjectIdToDelete == departmentsJSON[i].departmentID){
            for(var j=0;j<departmentsJSON[i].departmentProjects.length;j++){
                if(departmentsJSON[i].departmentProjects[j].projectID == projectIdToedit){
                    departmentsJSON[i].departmentProjects.splice(j, 1);
                }
                projectIDFlag = true;
            }

            if(!projectIDFlag){
                alert("Project not found!");
            }

            departmentIDFlag = true;
        }
    }

    if(!departmentIDFlag){
        alert("Department not found!");
    }

    
    var stringfiedDepartments = JSON.stringify(departmentsJSON);
    localStorage.setItem("departments", stringfiedDepartments);

}

document.getElementById("deleteProject").addEventListener("click",deleteProject);



function searchEmployee(){
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));

    var howToSearch = Number(prompt("Enter how do you want to search:\n1)ID\n2)Name"));
    switch(howToSearch){
        case 1:
            var employeeIdToedit = Number(prompt("Enter the employee id to edit: "));

            var employeeIDFlag = false;
            for(var i=0;i<employeesJSON.length;i++){
                if(employeeIdToedit == employeesJSON[i].employeeID){

                        alert(`ID: ${employeesJSON[i].employeeID}
                                Name: ${employeesJSON[i].employeeName}
                                Salary: ${employeesJSON[i].employeeSalary}
                                Performance rate: ${employeesJSON[i].employeePerformanceRate}
                                Age: ${employeesJSON[i].employeeAge}
                                Date of Birth: ${employeesJSON[i].employeePerformanceRate}
                                Gender: ${employeesJSON[i].employeeGender}
                                Skills: ${employeesJSON[i].employeeStatus}
                                `);

                    employeeIDFlag = true;
                }
            }

            if(!employeeIDFlag){
                alert("ID not found!");
            }

            break;
        case 2:
            var employeeNameToedit = prompt("Enter the employee name to edit: ");

            var employeeNameFlag = false;
            for(var i=0;i<employeesJSON.length;i++){
                if(employeeNameToedit == employeesJSON[i].employeeName){
                    
                        alert(`ID: ${employeesJSON[i].employeeID}
                                Name: ${employeesJSON[i].employeeName}
                                Salary: ${employeesJSON[i].employeeSalary}
                                Performance rate: ${employeesJSON[i].employeePerformanceRate}
                                Age: ${employeesJSON[i].employeeAge}
                                Date of Birth: ${employeesJSON[i].employeeDateOfBirth}
                                Gender: ${employeesJSON[i].employeeGender}
                                Skills: ${employeesJSON[i].employeeStatus}
                                `);

                    employeeNameFlag = true;
                }
            }

            if(!employeeNameFlag){
                alert("Name not found!");
            }

        break;
    }
}

document.getElementById("searchEmployee").addEventListener("click",searchEmployee);



function searchDepartment(){
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var howToSearch = Number(prompt("Enter how do you want to search:\n1)ID\n2)Name"));
    switch(howToSearch){
        case 1:
            var departmentToSearch = Number(prompt("Enter the department id to edit: "));

            var departmentIDFlag = false;
            for(var i=0;i<departmentsJSON.length;i++){
                if(departmentToSearch == departmentsJSON[i].departmentID){

                        alert(`ID: ${departmentsJSON[i].departmentID}
                                Name: ${departmentsJSON[i].departmentName}
                                Location: ${departmentsJSON[i].departmentLocation}
                                Starting date: ${departmentsJSON[i].departmentStartingDate}
                                `);

                    departmentIDFlag = true;
                }
            }

            if(!departmentIDFlag){
                alert("ID not found!");
            }

            break;
        case 2:
            var departmentNameToedit = prompt("Enter the department name to edit: ");

            var departmentNameFlag = false;
            for(var i=0;i<departmentsJSON.length;i++){
                if(departmentNameToedit == departmentsJSON[i].departmentName){
                    
                    alert(`ID: ${departmentsJSON[i].departmentID}
                        Name: ${departmentsJSON[i].departmentName}
                        Location: ${departmentsJSON[i].departmentLocation}
                        Starting date: ${departmentsJSON[i].departmentStartingDate}
                        `);

                    departmentNameFlag = true;
                }
            }

            if(!departmentNameFlag){
                alert("Name not found!");
            }

        break;
    }
}

document.getElementById("searchDepartment").addEventListener("click",searchDepartment);


function searchProject(){
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));

    var howToSearch = Number(prompt("Enter how do you want to search:\n1)ID\n2)Name"));
    switch(howToSearch){
        case 1:
            var projectToSearch = Number(prompt("Enter the project id to edit: "));

            var projectIDFlag = false;
            for(var i=0;i<departmentsJSON.length;i++){
                for(var j=0;j<departmentsJSON[i].departmentProjects.length;j++){
                    if(projectToSearch == departmentsJSON[i].departmentProjects[j].projectID){
    
                            alert(`ID: ${departmentsJSON[i].departmentID}
                                    Name: ${departmentsJSON[i].departmentName}
                                    Location: ${departmentsJSON[i].departmentLocation}
                                    Number of hours: ${departmentsJSON[i].departmentProjects[j].projectNumberOfHours}
                                    Department number: ${departmentsJSON[i].departmentID}
                                    `);

                            projectIDFlag = true;
                            break;
                    }
                }
            }

            if(!projectIDFlag){
                alert("Project not found!");
            }

            break;
        case 2:
            var projectToSearch = Number(prompt("Enter the project name to edit: "));

            var projectIDFlag = false;
            for(var i=0;i<departmentsJSON.length;i++){
                for(var j=0;j<departmentsJSON[i].departmentProjects.length;j++){
                    if(projectToSearch == departmentsJSON[i].departmentProjects[j].projectName){
    
                            alert(`ID: ${departmentsJSON[i].departmentID}
                                    Name: ${departmentsJSON[i].departmentName}
                                    Location: ${departmentsJSON[i].departmentLocation}
                                    Number of hours: ${departmentsJSON[i].departmentProjects[j].projectNumberOfHours}
                                    Department number: ${departmentsJSON[i].departmentID}
                                    `);

                            projectIDFlag = true;
                            break;
                    }
                }
            }

            if(!projectIDFlag){
                alert("Project not found!");
            }

            break;
    }
}

document.getElementById("searchProject").addEventListener("click",searchProject);



var bestEmployee = function(){
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));
    var maxPerform = 0;
    var maxIndx = 0;

    for(var i=0;i<employeesJSON.length;i++){
        if(maxPerform<employeesJSON[i].employeePerformanceRate){
            maxPerform = employeesJSON[i].employeePerformanceRate;
            maxIndx = i;
        }
    }

    document.getElementById("bestEmployee").innerHTML = `
        Name: ${employeesJSON[maxIndx].employeeName}
        , Performance rate: ${employeesJSON[maxIndx].employeePerformanceRate}                    
    `
}();


var employeesWithCodingSkills = function (){
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));

    var employeeRow = ``;

    for(var i=0;i<employeesJSON.length;i++){
        if(employeesJSON[i].employeeSkills.indexOf("coding")!=-1){
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
    }
    
    document.getElementById("employeesWithCodingSkills").innerHTML = employeeRow;
}();



var maleEmployees = function (){
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));

    var employeeRow = ``;

    for(var i=0;i<employeesJSON.length;i++){
        if(employeesJSON[i].employeeGender == 'Male' || employeesJSON[i].employeeGender == 'male'){
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
    }
    
    document.getElementById("maleEmployees").innerHTML = employeeRow;
}();



var avgSalary = function (){
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));

    var sum = 0;

    for(var j=0;j<employeesJSON.length;j++){
        sum+= employeesJSON[j].employeeSalary;
    }
    var avg = sum / employeesJSON.length ;
    
    var employeeRow = ``;

    for(var i=0;i<employeesJSON.length;i++){
        if(employeesJSON[i].employeeSalary >= avg){
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
    }
    
    document.getElementById("avgSalary").innerHTML = employeeRow;
}();



var inactiveStatus = function (){
    var employeesJSON = JSON.parse(localStorage.getItem("employees"));
    
    var employeeRow = ``;

    for(var i=0;i<employeesJSON.length;i++){
        if(employeesJSON[i].employeeStatus == "inactive"){
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
    }
    
    document.getElementById("inactiveStatus").innerHTML = employeeRow;
}();



var projectWithMinHrsDiv = function (){
    var departmentsJSON = JSON.parse(localStorage.getItem("departments"));
    var minHrs = 1000;
    var minProject;

    for(var i=0;i<departmentsJSON.length;i++){
        for(var j=0;j<departmentsJSON[i].departmentProjects.length;j++){
            if(departmentsJSON[i].departmentProjects[j].projectNumberOfHours < minHrs){
                minHrs = departmentsJSON[i].departmentProjects[j].projectNumberOfHours;
                minProject = departmentsJSON[i].departmentProjects[j];
            }
        }
    }

    document.getElementById("projectWithMinHrs").innerHTML = `
        Name: ${minProject.projectName}
        , ID: ${minProject.projectID} 
        , Number of Hours: ${minProject.projectNumberOfHours}
    `
}();