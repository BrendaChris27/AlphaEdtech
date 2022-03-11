//const $ = require("jquery")(window);

// function funcao1() {
//     alert("Eu sou um alert!");
// }
// funcao1()


function append(data) {
    const ul = document.querySelector('ul');

    const li = document.createElement('div');
    const divAboutMe = document.createElement('div');
    const divEmail = document.createElement('div');
    const divGreeting = document.createElement('div');
    const divLinkedin = document.createElement('div');
    const divMobileNumber = document.createElement('div');
    const divReminder = document.createElement('div');

    divAboutMe.innerHTML = data.aboutMe;
    divEmail.innerHTML = data.email;
    divGreeting.innerHTML = data.greeting;
    divLinkedin.innerHTML = data.linkedin;
    divMobileNumber.innerHTML = data.mobileNumber;
    divReminder.innerHTML = data.reminder;

    li.appendChild(divAboutMe);
    li.appendChild(divEmail);
    li.appendChild(divGreeting);
    li.appendChild(divLinkedin);
    li.appendChild(divMobileNumber);
    li.appendChild(divReminder);

    ul.appendChild(li);
}

function fetchApi() {
    const promise = fetch(`https://simple-market-backend.herokuapp.com/aboutme`);

    promise.then((response) => response.json())
        .then((data) => {
            console.log(data)
            const cartao = {
                aboutMe: data.aboutMe,
                email: data.email,
                greeting: data.greeting,
                linkedin: data.linkedin,
                mobileNumber: data.mobileNumber,
                reminder: data.reminder,
            }
            append(cartao);
        })
        .catch((error) => alert(`Estamos em manutenção, sinto muitooooo. ${error}`))
}

window.onload = fetchApi;