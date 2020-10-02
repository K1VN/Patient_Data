

$(document).ready(function() {
    $.getJSON("http://127.0.0.1:8080/patient.json", function(json) {
        document.getElementById("name").innerHTML = "Name: " + json.identifier[0].name[0].given;
        document.getElementById("organization").innerHTML = "Organization: " + json.identifier[0].managingOrganization["display"];
        document.getElementById("gender").innerHTML = "Gender: " + json.identifier[0]["gender"];
        document.getElementById("num_conditions").innerHTML = "Number of Conditions: " + json.identifier[0].conditions.length;
        document.getElementById("list_conditions").innerHTML = "List of Conditions: " + json.identifier[0].conditions;
    });
});





