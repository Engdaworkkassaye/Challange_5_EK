$(function () {
  function displayCurrentDate() {
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDate);
  }

  displayCurrentDate();


  function applyTimeBlockClasses() {
    const currentHour = dayjs().hour();

    $('.time-block').each(function () {
      const blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (blockHour > currentHour) {
        $(this).removeClass('past present').addClass('future');
      } else {
        $(this).removeClass('past future').addClass('present');
      }
    });
  }

  applyTimeBlockClasses();

 
  $('.saveBtn').on('click', function () {
    const blockId = $(this).parent().attr('id');
    const eventText = $(this).siblings('.description').val();

    localStorage.setItem(blockId, eventText);
  });

 
  $('.time-block').each(function () {
    const blockId = $(this).attr('id');
    const storedEvent = localStorage.getItem(blockId);

    if (storedEvent) {
      $(this).children('.description').val(storedEvent);
    }
  });
});
