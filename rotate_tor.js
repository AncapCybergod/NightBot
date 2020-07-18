var tr = require('tor-request');
tr.TorControlPort.password = 'mypassword';

var printTOR_IP = function () {

  tr.request('https://api.ipify.org', function (err, res, body) {
  if (!err && res.statusCode == 200) {
      console.log("Your public (through Tor) IP is: " + body);
   }
});
};

//print current ip

 printTOR_IP();

//renew to new ip
tr.renewTorSession(function (err, msg) {
     if (msg) {
         printTOR_IP();
      }
});