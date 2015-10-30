# web-push-notification-demo

Example of web push notification system.

## website

Open the palmapushy folder and chrome web browser on index.html.  
Rename manifest_example.json file in manifest.json and fill it with the right gcm_sender_id (see https://console.developers.google.com).

## The server
Open the palmapushy-server folder. There is a simple nodejs rest application with the purpose of storing registrations ids.

### Install

Run the nodejs application palmapushy-server

```
npm install
```

### Run

```
node server.js
```

### View registrations ids
In db.json file there will be all the registrations ids.

### Test
Run test

```
npm test
```
