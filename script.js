/* ================================
   ORDER POPUP
================================ */


function openForm(pack){

    const overlay = document.getElementById("overlay");
    const packInput = document.getElementById("pack");


    if(overlay){
        overlay.style.display = "flex";
    }


    if(packInput){
        packInput.value = pack;
    }

}



/* ================================
   CLOSE POPUP
================================ */


function closeForm(){

    const overlay = document.getElementById("overlay");


    if(overlay){

        overlay.style.display = "none";

    }

}



/* ================================
   CLOSE WHEN CLICKING OUTSIDE
================================ */


window.addEventListener("click", function(event){

    const overlay = document.getElementById("overlay");


    if(event.target === overlay){

        closeForm();

    }

});



/* ================================
   FORM SUBMISSION
================================ */


document.addEventListener("DOMContentLoaded", function(){


    const form = document.querySelector(".gform");


    if(!form){
        return;
    }


    form.addEventListener("submit", function(){


        const submitButton = form.querySelector(
            'button[type="submit"]'
        );


        if(submitButton){

            submitButton.innerHTML = "Sending...";

            submitButton.disabled = true;

        }



        /*
          Google Apps Script receives the form normally.
          We wait before showing the success screen.
        */


        setTimeout(function(){


            const formElements =
            document.querySelector(".form-elements");


            const success =
            document.querySelector(".thankyou_message");



            if(formElements){

                formElements.style.display = "none";

            }


            if(success){

                success.style.display = "block";

            }


        },2000);



    });


});