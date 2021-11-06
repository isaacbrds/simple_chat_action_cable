import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Conectado ao chat room!');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messages').append(`<p> <strong> ${data.author} says: </strong> ${data.message} </p>`)
    $('html, body').animate({scrollTop: $(document).height()}, 0);

  },

  speak: function(message, author) {
    return this.perform('speak', {message, author});
  }
});

$(document).on('turbolinks:load', function(){
  $("#send_message").on('click', function(e){
    e.preventDefault();
    let message = $('#message_to_sent').val();
    let author = $('#message_sented_by').val();
    if (message.length > 0) {
      chatChannel.speak(message, author);
      $('#message_to_sent').val('')
    }
  })
})