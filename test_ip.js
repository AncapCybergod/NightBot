/* eslint-disable no-console */

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true, waitTimeout: 2000 })



const url = 'http://api.ipify.org?format=json'


nightmare
  .goto(url)
 
 
  
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
