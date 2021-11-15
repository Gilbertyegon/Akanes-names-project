
let femaleAkanNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday', 'Saturday']

function akanGenerate (event){
    event.preventDefault()
    let date = document.getElementById('date').value;

    let gender = document.getElementById('gender').value;


    let dayNumber = new Date(date).getDay()
    if (gender=='' || date ==''){
        alert('Error! You have to provide both your gender and date of birth')
    }


    else if (gender=='male'){
        alert(`You were born on ${daysOfWeek [dayNumber]} and your Akan Name is ${maleAkanNames[dayNumber]}`)}

    else{
        alert(`You were born on ${daysOfWeek[dayNumber]} and your Akan name is ${femaleAkanNames[dayNumber]}`)
    }
}
