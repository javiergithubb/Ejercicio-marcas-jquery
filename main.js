$(document).ready(function() {
  $("#addTaskBtn").click(function() {
    var taskName = $("#taskNameInput").val();
    var taskDescription = $("#taskDescriptionInput").val();
    var taskDate = $("#taskDateInput").val();

    if (taskName !== "") {
      var taskItem = $("<li>").addClass("task").css({"margin-bottom": "10px", "padding": "10px", "background-color": "#eaeaea", "border-radius": "5px"});
      var taskTitle = $("<h3>").text(taskName);
      var taskDescriptionElem = $("<p>").text("Descripción: " + taskDescription);
      var taskDateElem = $("<p>").text("Fecha: " + taskDate);
      var completeBtn = $("<button>").html('<i class="fas fa-check" style="color: green;"></i>').css("margin-left", "10px");
      var deleteBtn = $("<button>").html('<i class="fas fa-trash-alt" style="color: red;"></i>').css("margin-left", "10px");

      completeBtn.click(function() {
        $(this).parent().toggleClass("completed");
      });

      deleteBtn.click(function() {
        $(this).parent().remove();
      });

      taskItem.append(taskTitle, taskDescriptionElem, taskDateElem, completeBtn, deleteBtn);
      $("#taskList").append(taskItem);

      // Limpiar los campos de entrada después de agregar una tarea
      $("#taskNameInput").val("");
      $("#taskDescriptionInput").val("");
      $("#taskDateInput").val("");
    }
  });
});
