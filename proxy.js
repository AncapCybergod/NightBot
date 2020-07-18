/* eslint-disable no-console */

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true, 
                            waitTimeout: 2000,
                            switches: {
                              'proxy-server': '127.0.0.1:8118',
                              'ignore-certificate-errors': true
                            }
                          
                          })


const url = '"http://api.ipify.org?format=json"'




nightmare
  .authentication('cybergod') 
  .goto(url)
 
 
  
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
