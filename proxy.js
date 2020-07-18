/* eslint-disable no-console */

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true, 
                            waitTimeout: 2000,
                            switches: {
                              'proxy-server': '127.0.0.1:8118',
                              'ignore-certificate-errors': true
                            }
                          
                          })


const url = 'http://api.ipify.org?format=json'


for (i = 0; i < 5; i++) {
  nightmare
  .goto(url)
 
 
  
  .evaluate(function() {
    return document.querySelector('body')
      .innerHTML;
  })
  
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
  .cookies.clearAll()
}


