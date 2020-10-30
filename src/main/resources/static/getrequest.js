$( document ).ready(function() {

    // get request

    $("#getAllPeopleId").click(function(event){
        event.preventDefault();
        ajaxGet();
    });

    // get
    function ajaxGet(){
        $.ajax({
            type : "GET",
            url : "api/person/all",
            success: function(result){
                    // clears ul
                    $('#getResultDiv ul').empty();
                    var personList = "";
                    $.each(result.data, function(index, person){
                        person = "Name: " + person.firstname + " " + person.lastname + " - " + " ID#: " + index + "<br>";
                        $('#getResultDiv ul').append(person)
                    });
                    console.log("Success: ", result);
            },
            error : function(e) {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("ERROR: ", e);
            }
        });
    }
})