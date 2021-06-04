$(".card-course-item .btn-delete-course").on("click", function () {
    const delForm = document.forms["delete-course-form"];
    const idData = $(this).data("id");
    delForm.action = "/courses/" + idData + "?_method=DELETE";
    delForm.submit();
});
