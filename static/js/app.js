// ------- samples.json format -------
// samples.json {
//     .names[
//         "ID#s in a list"
//     ],
//     .metadata{
//         .id: "ID #",
//         .ethnicity: "Patient Ethnicity",
//         .gender: "Patient Gender",
//         .age: "Patient Age in years.0",
//         .location: "Where data was collected..?",
//         .bbtype: "Bellybutton type:  Innie/Outie",
//         .wfreq: "Frequency washing belly button per ..?",
//         },
//     .samples{
//         .id: "ID #",
//         .otu_ids: ["List of bacterial ID#s corresponding in position to the sample_values"],
//         .sample_values: ["List of #CFUs? corresponding in position to the otu_ids"]
//         .otu_labels: ["List of ';' separated strings containing ..?"]
//     }
// }
// ---------- format END -------------

//Weird error cascade reading the .json.  It happens on all of the 'solved' assigments as 
//well so its presumably nothing I'm doing wrong.  Typed less than 10 characters to convert 
//the .json to a usable .js, which seems to be the best solution in any case.

//Building dropdown.
dropdown = d3.select("#selDataset")
IdNum = dropdown.value()
console.log(IdNum)

function buildDropdown() {
    samples.names.forEach(function(entry){
        dropdown.append("option")
        .text(entry)
    })
}
buildDropdown()
//Populate Demographics

demographics = d3.select("#sample-metadata")