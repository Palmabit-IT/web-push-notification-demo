if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
    registration.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function(subscription) {
      isPushEnabled = true;

      console.log('subscription obj: ', subscription);

      var url = 'http://localhost:3000/api/users';
      fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({endpoint: subscription.endpoint.substring(40, subscription.endpoint.length)})
      }).then(function(response) {
        console.log('Subscription saved successfully: ', response.text());
      }).catch(function(err) {
        console.log('There was an issue saving the subscription details: ', err);
      });

    });
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
