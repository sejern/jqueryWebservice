$( document ).ready(function() {

    // submit form
    $("#personForm").submit(function(event) {
        // Prevents the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });


    function ajaxPost(){

        // form data
        var formData = {
            firstname : $("#firstname").val(),
            lastname :  $("#lastname").val()
        }

        // post
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "api/person/save",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result) {
                    $("#postResultDiv").html("<p> Posted Successfully! <br>" +
                        "Firstname: " + result.data.firstname + " <br> " +
                        "Lastname: " + result.data.lastname + "</p>");
                console.log(result);
            },
            error : function(e) {
                alert("Error!")
            }
        });

        // Reset Formdata after posting
        resetData();

    }

    function resetData(){
        $("#firstname").val("");
        $("#lastname").val("");
    }
})