'use strict';

self.addEventListener('push', function(event) {

  console.log('Received a push message', event);

  var title = 'Notification';
  var body = 'This is a push Notification';
  var icon = 'http://palmabit.com/img/logos/logo_colore1@2x.png';
  var tag = 'simple-push-notification-demo';

  event.waitUntil(
    self.registration.showNotification(title, {
       body: body,
       icon: icon,
       tag: tag
     })
   );
});
