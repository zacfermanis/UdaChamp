$( document ).ready(function() {

  $('.progress_bar').each(function() {
      var value = $(this).siblings().first().text();
      var success = $('#success');
      var failure = $('#failed');
      var notmod = $('#notmod');
      var rec = $('#received');
      var valid = $('#validated');
      var queued = $('#queued');
      var proc = $('#processing');
      var inv = $('#invalid_state');
      var image = '';
      switch(value) {
          case '1':   image = rec;break;
          case '2':   image = valid;break;
          case '3':   image = queued;break;
          case '4':   image = proc;break;
          case '5':   image = success;break;
          case '6':   image = notmod;break;
          case '7':   image = failure;break;
          case '8':   image = inv;break;
      }
      $(this).append(image);
  })


})