$(document).ready(function () {
    let $modal = $(".modal");
    $(".block-demo").on("click", ".btn", function (){
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

    let form = document.querySelector("form");
    form.prepend(titleForm, div);
    
}