// $.ajax({
//     url: 'https://randomuser.me/api/?results=12&nat=US',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//     }
// });

fetch('https://randomuser.me/api/?results=12&nat=US')

    //transforms the data into json 
    .then(response => response.json())
    //execute the function
    .then(function (users) {
        // variable for user results
        data = users.results
        // loops through result of each array items named employees
        data.forEach(employees => {
            // create variables for each employee information which will loop through
            let image = employees.picture.large
            let fName = employees.name.first
            let lName = employees.name.last
            let email = employees.email
            let city = employees.location.city
            let state = employees.location.state

            //create variable for employee profile and set it to the div card
            //template literal displays images, email, name, city and state on employee directory
            const profile = `
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${image}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${fName} ${lName}</h3>
                        <p class="card-text">${email}</p>
                        <p class="card-text cap">${city}, ${state}</p>
                    </div>
                </div>`
            // append profile to gallery
            $("#gallery").append(profile)
        })
    })

function display(i) {
    let image = data[i].picture.large
    let fName = data[i].name.first
    let lName = data[i].name.last
    let email = data[i].email
    let city = data[i].location.city
    let state = data[i].location.state
    let phone = data[i].phone
    let street = data[i].location.street
    let birthday = data[i].dob.date


    const modal = `
            <div class="modal-container">
                <div class="modal">
                <button type="button" id ="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class ="modal-img" src="${image}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${fName} ${lName}</h3> 
                    <p class="modal-text">${email}</p> 
                    <p class="modal-text cap">${city}</p> 
                    <hr>
                    <p class="modal-text">${phone}</p> 
                    <p class="modal-text">${street}, ${city} ${state} 97204</p> 
                    <p class="modal-text">Birthday: ${birthday}</p> 
                </div> 
            </div>`
    $("body").append(modal)
    $("#modal-close-btn").on("click", function () {
        $(".modal-container").remove()
    });

}
document.getElementById('gallery').addEventListener("click", function () {
    i = ($(this).index())
    display(i)


});