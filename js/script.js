//url to get employee data 
//created a query string to display 12 employee array and their nationality
fetch('https://randomuser.me/api/?results=12&nat=US')

    //response sends out promise and response with json data
    .then(response => response.json())
    //execute the function
    .then(function (users) {
        // set variable for user results from the Random Generated User API's document
        data = users.results;
        // loops through each employee to get their information
        data.forEach(employees => {
            // create variables for each employee information
            let image = employees.picture.large;
            let firstName = employees.name.first;
            let lastName = employees.name.last;
            let email = employees.email;
            let city = employees.location.city;
            let state = employees.location.state;

            //create variable for employee profile and set it to the div card
            //dynamically adds HTML elements
            //template literal displays images, email, name, city and state on employee directory
            const profile = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${image}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${firstName} ${lastName}</h3>
                        <p class="card-text">${email}</p>
                        <p class="card-text cap">${city}, ${state}</p>
                    </div>
                </div>`
            // append profile to gallery id
            $("#gallery").append(profile);
        })
    })

//create variable for dditional detailed information which will appear when employee is selected
function display(i) {

    //assigning variables globally
    let image = data[i].picture.large;
    let firstName = data[i].name.first;
    let lastName = data[i].name.last;
    let email = data[i].email;
    let city = data[i].location.city.toUpperCase();
    let state = data[i].location.state.toUpperCase();

    //additional information
    let phone = data[i].phone;
    let street = data[i].location.street.toUpperCase();
    let birthMonth = data[i].dob.date.slice(5, 7);
    let birthDate = data[i].dob.date.slice(8, 10);
    let birthYear = data[i].dob.date.slice(0, 4);

    //adds html element of information to the pop up window
    //layout of the card
    const modal = `
            <div class="modal-container">
                <div class="modal">
                <button type="button" id ="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class ="modal-img" src="${image}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3> 
                    <p class="modal-text">${email}</p> 
                    <p class="modal-text cap">${city}</p> 
                    <hr>
                    <p class="modal-text">${phone}</p> 
                    <p class="modal-text">${street}, ${city}, ${state} 97204</p> 
                    <p class="modal-text">Birthday: ${birthMonth}/${birthDate}/${birthYear}</p> 
                </div> 
            </div>`

    //appends html to pop up window
    $("body").append(modal);

    //closes pop up window when ‘x' clicked
    $("#modal-close-btn").on("click", function () {
        $(".modal-container").remove();
    });
}

//when clicked on employee card, modal container appears
$('#gallery').on("click", ".card", function () {
    i = ($(this).index())
    display(i);
});