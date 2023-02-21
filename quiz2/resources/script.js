$(document).ready(function () {
  $.getJSON("./resources/MBE.json",
    function (data) {
      var information = '';
      $.each(data, function (key, value) {
        var numLectures = value.lectures.length;
        for (var x = 0; x < numLectures; x++) {
          information += '<tr><td><button class="button-4" id="' + value.lectures[x].title + '" onclick="displaylectureinfo(this)">' + value.lectures[x].title + '</button></td></tr>';
        }
      });

      $('#table').append(information);

    });
});

function displaylectureinfo(btn) {
  var buttonname = btn.id;
  $.getJSON("./resources/MBE.json",
    function (data) {
      var information = '';
      $.each(data, function (key, value) {
        var numLabs = value.lectures.length;
        for (var x = 0; x < numLabs; x++) {
          if (value.lectures[x].title == buttonname) {
            information += '<div class="description"><h2 class="des">Title: </h2>' + value.lectures[x].title + '</div>';
            information += '<div class="description"><h2 class="des">Description: </h2>' + value.lectures[x].description + '</div>';
            information += '<div class="description"><h2 class="des">Link: </h2><a href=' + value.lectures[x].link + '>Click here to view the lecture</a></div>';
          }
        }
      });

      document.getElementById('infodisplay').innerHTML = information;

    });
};