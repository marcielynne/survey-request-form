// Declare variables
var map;
var searchResults = [];
var surveyRequests = [];
var projectNameInput = document.getElementById("projectName");
var projectSRIDInput = document.getElementById("projectSRID");
var projectBillNumTypeInput = document.getElementById("projectBillNumType");
var projectBillNumValueInput = document.getElementById("projectBillNumValue");
var projectVendorInput = document.getElementById("projectVendor");
var projectDateReqInput = document.getElementById("projectDateReq");
var projectAssetAreaInput = document.getElementById("projectAssetArea");
var projectTypeInput = document.getElementById("projectType");
var projectLonInput = document.getElementById("projectLon");
var projectLatInput = document.getElementById("projectLat");
var searchValueInput = document.getElementById("searchValue");
var tbody = document.getElementById("tbody");
var thead = document.getElementById("thead");
var btnClear = document.getElementById("btnClear");
var btnSubmit = document.getElementById("btnSubmit");
var btnSearch = document.getElementById("btnSearch")

// The clearSubmit function clears the submit fields and the graphics on the map.
function clearSubmit() {
    projectNameInput.value = "";
    projectSRIDInput.value = "";
    projectBillNumTypeInput.value = "";
    projectBillNumValueInput.value = "";
    projectVendorInput.value = "";
    projectDateReqInput.value = "";
    projectAssetAreaInput.value = "";
    projectTypeInput.value = "";
    projectLonInput.value = "";
    projectLatInput.value = "";
    projectNameInput.focus();
    map.graphics.clear();
    map.infoWindow.hide();
}


// The validateSRID function checks that user input is a number.
function validateSRID() {
    var z = projectSRIDInput.value;
    if(/\D/.test(z)) {
        alert("Only numbers are allowed for the SRID")
        projectSRIDInput.value = "";
        projectSRIDInput.focus();
    }
}

// Call the validateSRID function when a user clicks inside the SRID input field.
projectSRIDInput.addEventListener("input", function() {
    validateSRID();
})


// When the user clicks the Submit button...
btnSubmit.addEventListener("click", function insert ( ) {    
    //Variables for date validation
    var z = projectDateReqInput.value;
    var parts = z.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
    
    // Create a new array called uniqueRequest to store the values entered by the user into the input fields.
    var uniqueRequest = {
        projectNames: projectNameInput.value.toUpperCase(),
        projectSRIDs: projectSRIDInput.value,
        projectBillNumTypes: projectBillNumTypeInput.value,
        projectBillNumValues: projectBillNumValueInput.value.toUpperCase(),
        projectVendors: projectVendorInput.value,
        projectDateReqs: projectDateReqInput.value,
        projectAssetAreas: projectAssetAreaInput.value,
        projectTypes: projectTypeInput.value,
        projectLons: projectLonInput.value,
        projectLats: projectLatInput.value
    };
        // Check that the input fields for project name, SRID, bill number type, bill number value, vendor, date requested, asset area, project type, lat, and lon are not null before pushing to the surveyRequests object.
        if (
            (projectNameInput.value == "" || projectNameInput.value == null) || 
            (projectSRIDInput.value == "" || projectSRIDInput.value == null) ||
            (projectBillNumTypeInput.value == "" || projectBillNumTypeInput.value == null) ||
            (projectBillNumValueInput.value == "" || projectBillNumValueInput.value == null) ||
            (projectVendorInput.value == "" || projectVendorInput.value == null) ||
            (projectDateReqInput.value == "" || projectDateReqInput.value == null) ||
            (projectAssetAreaInput.value == "" || projectAssetAreaInput.value == null) ||
            (projectTypeInput.value == "" || projectTypeInput.value == null) ||
            (projectLonInput.value == "" || projectLonInput.value == null) ||
            (projectLatInput.value == "" || projectLatInput.value == null)
            ) {
            alert("Oops, looks like you missed some fields.")
        } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(z) || (year < 1900 || year > 2100 || month == 0 || month > 12 || day <= 0 || day > 31)) {
            alert("Date is not in the correct format or the value is wrong.")
            z.focus();
        } else {
            // If all values are filled out, push values to the surveyRequests object, call the clearSubmit() function, and show an alert that the values have been added.
            surveyRequests.push(uniqueRequest);
            clearSubmit();            
            alert("Yay! You added a thing!");
        }  
});


// The compareObjects function compares values added to an object. If a record does not exactly match another record, return false. Ultimately, records that match exactly will not be shown in the results table. 
function compareObjects(o1, o2) {
    var k = '';
    for(k in o1) {
        if (o1[k] != o2[k]) {
            return false;
        }
    }
    for(k in o2) {
        if (o1[k] != o2[k]) {
            return false;
        }
    }
    return true;
}
// The compareObjects function could also be written like:
/* function compareObjects(o1, o2) {
    var k = '';
    for(k in o1) if(o1[k] != o2[k]) return false;
    for(k in o2) if(o1[k] != o2[k]) return false;
    return true;
  } */


// Used with the compareObjects function above, the itemExists function searchs an object to see if a value exists. 
function itemExists(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
        if (compareObjects(arr[i], obj)) {
            return true;
        }
    }
    return false;
}


// Search button used to search for values in the surveyRequests object.
btnSearch.addEventListener("click", function () {
    // Empty searchResults object.
    searchResults=[];
    // Convert the user's search input to uppercase.
    var searchValueUpper = searchValueInput.value.toUpperCase();
    // Use itemExists function from above to see if a value in the surveyRequests object matches user's input. If the search value is in the object, push it to the searchResults object. Identical entries in surveyRequests are not pushed to searchResults.
    if(searchValueUpper.length!=0) {
        for(var i=0; i < surveyRequests.length; i++) {
            for(key in surveyRequests[i]) {
                if(surveyRequests[i][key].indexOf(searchValueUpper)!=-1) {
                    if(!itemExists(searchResults, surveyRequests[i])) {
                        searchResults.push(surveyRequests[i]);
                    }
                } 
            }
        }
    } 

    // If a value was pushed to searchResults, call the saveAndShow function. Else, clear values and show an alert that no results were found.
    if (searchResults.length > 0) {
        saveAndShow();
        
        // Display values from table in input fields based on the row a user clicks.
        var table = document.getElementById("resultsTable");
        for(var i=1; i<table.rows.length; i++) {
            table.rows[i].onclick = function() {
                projectNameInput.value = (this.cells[0]).innerHTML;
                projectSRIDInput.value = (this.cells[1]).innerHTML;
                projectBillNumTypeInput.value = (this.cells[2]).innerHTML;
                projectBillNumValueInput.value = (this.cells[3]).innerHTML;
                projectVendorInput.value = (this.cells[4]).innerHTML;
                projectDateReqInput.value = (this.cells[5]).innerHTML;
                projectAssetAreaInput.value = (this.cells[6]).innerHTML;
                projectTypeInput.value = (this.cells[7]).innerHTML;
                projectLonInput.value = (this.cells[8]).innerHTML;
                projectLatInput.value = (this.cells[9]).innerHTML;
            }
        }
    } else {
        tbody.innerHTML="";
        thead.innerHTML="";
        btnClear.style.display = "none";
        searchValueInput.value="";
        var searchMessage ="No results found.";
        alert(searchMessage);
    }  
})


// The saveAndShow function builds a table to show the results pushed to the searchResults object. A hidden clear button is also displayed.
function saveAndShow() {
    tbody.innerHTML="";
    thead.innerHTML="";
    for (var i=0; i < searchResults.length; i += 1) {
        var tr="<tr>";
        var th="<tr><th>Project Name</th>" + "<th>SRID</th>" + "<th>Billing Number</th>" + "<th style='display:none'>Bill Num Type</th></tr>"; 

        // Build the table to display values from the searchResults object. Only show fields for the project name, SRID, and bill number.
        tr += 
            "<td>" + searchResults[i].projectNames + "</td>" +    
            "<td>" + searchResults[i].projectSRIDs + "</td>" +
            "<td style='display:none'>" + searchResults[i].projectBillNumTypes + "</td>" + 
            "<td>" + searchResults[i].projectBillNumValues + "</td>" + 
            "<td style='display:none'>" + searchResults[i].projectVendors + "</td>" +
            "<td style='display:none'>" + searchResults[i].projectDateReqs + "</td>" +
            "<td style='display:none'>" + searchResults[i].projectAssetAreas + "</td>" +
            "<td style='display:none'>" + searchResults[i].projectTypes + "</td>" +
            "<td style='display:none'>" + searchResults[i].projectLons + "</td>" +
            "<td style='display:none'>" + searchResults[i].projectLats + "</td>" +            
            "</tr>";

        thead.innerHTML = th;
        tbody.innerHTML += tr;
        
        // Display the Clear button
        btnClear.style.display = "inline";
    }
}


// Clear button to clear values in the table created in the saveAndShow function. Also hides the Clear button, clears values in the submit form, and places focus in the Project Name Input box.
btnClear.addEventListener("click", function() {
    tbody.innerHTML="";
    thead.innerHTML="";
    searchValueInput.value="";
    document.getElementById("btnClear").style.display = "none";
    clearSubmit();
})