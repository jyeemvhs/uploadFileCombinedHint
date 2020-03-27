
$(document).ready(function() {
    $("form").submit(function(event) {
      if ($("#fileStuff").val() == "")
        return false;
//      $.post("/change",{val:1},successChange);
    });
});


