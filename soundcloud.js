/* eslint-disable no-console */

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true, waitTimeout: 2000 })


const url = 'https://soundcloud.com/user-133765374/the-last-love-of-lambert-lupin'


nightmare
  .goto(url)
 
 
  
  .then(function(result) {
    console.log("result")
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
