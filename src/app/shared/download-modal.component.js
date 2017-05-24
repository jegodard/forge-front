var downloadModal = (function() {

  return {
    init: function() {
      $('.modal').modal();
    },
    open: function(id) {
      $('#'+id).modal('open');
    },
    close: function(id) {
      $('#'+id).modal('close');
    }
  }

})(downloadModal||{})