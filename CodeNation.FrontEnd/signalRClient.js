const connection = new signalR.HubConnectionBuilder()
  .withUrl('http://localhost:5000/quote')
  .configureLogging(signalR.LogLevel.Information)
  .build();

let connected = false;
connection
  .start()
  .then(() => {
    connected = true;
    console.log('connected', connected);
  })
  .catch(err => console.log('Error while establishing connection!!'));

connection.on('GetRandomQuote', data => updateQuote(JSON.parse(data)));

setInterval(() => {
  if (connected) {
    // console.log("success");
    connection
      .invoke('GetRandomQuote')
      .catch(err => console.error(err.toString()));
  } else {
    console.warn('not connected');
  }
}, 5 * 1000);
