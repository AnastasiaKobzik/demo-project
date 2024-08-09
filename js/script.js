$(document).ready(function () {
    let $modal = $(".modal");
    $(".block-demo").on("click", ".btn", function (){
        $modal.find("form").empty();
        createElement();
        $modal.show();
    });

    $modal.on("click", ".close-modal", function (){
        $modal.hide();
    })

    $modal.on("mouseup", function(e){
        let div = $( ".container-modal" );
        if ( !div.is(e.target) 
            && div.has(e.target).length === 0 ) {
            $modal.hide();
        }
    });
})

function createElement(){
    let titleForm = document.createElement("div");
    titleForm.classList.add("title");
    titleForm.innerHTML = "Войти в систему";

    let div = document.createElement("div");
    div.classList.add("group-input");

    let inputText = document.createElement("input");
    inputText.type = "text";
    inputText.name = "email-tel";
    inputText.placeholder = "Email/Телефон";

    let inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.placeholder = "Пароль";

    div.append(inputText, inputPassword);

    let divGroupCheckbox = document.createElement("div");
    divGroupCheckbox.classList.add("group-checkbox");

    let divCheckbox = document.createElement("div");
    divCheckbox.classList.add("checkbox");

    divGroupCheckbox.append(divCheckbox);

    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.name = "remember-password";

    let divLabel = document.createElement("div");
    divLabel.classList.add("label-checkbox");
    divLabel.innerHTML = "Запомнить пароль";

    divCheckbox.append(inputCheckbox, divLabel);

    let aRestorePassword = document.createElement("a");
    aRestorePassword.href = "#";
    aRestorePassword.classList.add("restore-password");
    aRestorePassword.innerHTML = "Восстановить";

    let buttonLogin = document.createElement("button");
    buttonLogin.type = "button";
    buttonLogin.classList.add("login");
    buttonLogin.innerHTML = "Войти";

    let aRegister = document.createElement("a");
    aRegister.href = "#";
    aRegister.classList.add("register");
    aRegister.innerHTML = "Зарегистрироваться";


    let form = document.querySelector("form");
    form.append(titleForm, div, divGroupCheckbox, aRestorePassword, buttonLogin, aRegister);
    
}