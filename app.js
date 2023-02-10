submit.addEventListener('click', (e)=>{

    const mark = document.querySelector('#pupilMark').value;
    const assessment = document.querySelector('#assessmentMarks').value;
    const grade = Math.round((mark/assessment)*100);

    document.getElementById("feedback").innerHTML = `${grade}`;
    document.getElementById("feedback").style.display = "block";

    e.preventDefault();
})

const table = document.querySelector("#mark-table");
const listSubmit = document.querySelector("#list-submit");
const tableBody = table.createTBody();


listSubmit.addEventListener('click', (e)=>{

    const totalMarks = document.querySelector('#total-marks').value;
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    
    for (let i = 1; i <= totalMarks; i++) {
        let row = tableBody.insertRow();
        row.insertCell().innerHTML = i;
        row.insertCell().innerHTML = totalMarks;
        row.insertCell().innerHTML = Math.round((i/totalMarks)*100);
        row.insertCell().innerHTML = "Grades to come";
    }
    e.preventDefault();
})