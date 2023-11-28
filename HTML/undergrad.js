document.addEventListener('DOMContentLoaded', function() {
    // Display Level 100 courses by default
    var level100List = document.getElementById('level-100-first');
    if (level100List) {
      level100List.style.display = 'block';
    }
  });

  function toggleVisibility(level, semester) {
    // Hide all semester lists
    var lists = document.querySelectorAll('.semester-list');
    lists.forEach(function(list) {
      list.style.display = 'none';
    });

    // Show the selected semester list
    var selectedList = document.getElementById('level-' + level + '-' + semester);
    if (selectedList) {
      selectedList.style.display = 'block';
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    // Display Level 100 courses by default
    var level100List = document.getElementById('ce-level-100-first');
    //var level100SecondList = document.getElementById('ce-level-100-second');//
    if (level100List) {
      level100List.style.display = 'block';
    }
  });

  function toggleVisibility(level, semester) {
    // Hide all semester lists
    var lists = document.querySelectorAll('.ce-semester-list');
    lists.forEach(function(list) {
      list.style.display = 'none';
    });

    // Show the selected semester list
    var selectedList = document.getElementById('ce-level-' + level + '-' + semester);
    if (selectedList) {
      selectedList.style.display = 'block';
    }
  }