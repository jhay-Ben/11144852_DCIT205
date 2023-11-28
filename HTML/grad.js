document.addEventListener('DOMContentLoaded', function() {
    // Display Level 600 courses for MPhil by default
    var mphilLevel600List = document.getElementById('mphil-level-600');
    if (mphilLevel600List) {
      mphilLevel600List.style.display = 'block';
    }
  });

  function toggleVisibilityMPhil(level) {
    // Hide all semester lists for MPhil
    var mphilLists = document.querySelectorAll('.mphil-semester-list');
    mphilLists.forEach(function(list) {
      list.style.display = 'none';
    });

    // Show the selected semester list for MPhil
    var mphilSelectedList = document.getElementById('mphil-level-' + level);
    if (mphilSelectedList) {
      mphilSelectedList.style.display = 'block';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Display Level 600 courses for MSc Computer Science by default
    var mscLevel600List = document.getElementById('msc-level-600');
    if (mscLevel600List) {
      mscLevel600List.style.display = 'block';
    }
  });

  function toggleVisibilityMSc(level) {
    // Hide all semester lists for MSc Computer Science
    var mscLists = document.querySelectorAll('.msc-semester-list');
    mscLists.forEach(function(list) {
      list.style.display = 'none';
    });

    // Show the selected semester list for MSc Computer Science
    var mscSelectedList = document.getElementById('msc-level-' + level);
    if (mscSelectedList) {
      mscSelectedList.style.display = 'block';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Display Year 1 courses for Ph.D. Computer Science by default
    toggleVisibilityPhD(1);
  });

  function toggleVisibilityPhD(year) {
    // Hide all year lists for Ph.D. Computer Science
    var phdLists = document.querySelectorAll('.phd-year-list');
    phdLists.forEach(function(list) {
      list.style.display = 'none';
    });

    // Show the selected year list for Ph.D. Computer Science
    var phdSelectedList = document.getElementById('phd-year-' + year);
    if (phdSelectedList) {
      phdSelectedList.style.display = 'block';
    }
  }