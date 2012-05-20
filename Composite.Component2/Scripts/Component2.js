(function () {
    $(document).on('personsNeeded', function (e) {
        $.ajax({
            url: "/Component2/GetPersons",
            data: JSON.stringify({ ids: _.rest(arguments) }),
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                $(document).trigger('personsGotten', data);
            },
            type: "POST",
            datatype: "json"
        });
    });
    
    $(document).on('personsSubmitted', function (e, persons) {
        $.ajax({
            url: "/Component2/UpdatePersons",
            data: persons,
            contentType: "application/json; charset=utf-8",
            success: function () {
                $(document).trigger('personsUpdated');
            },
            type: "POST",
            datatype: "json"
        });
    });
})();