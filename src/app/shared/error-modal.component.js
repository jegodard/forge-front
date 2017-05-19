var errorModal = (function() {

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

})(errorModal||{})