/* eslint-disable no-console */

var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: false, waitTimeout: 2000 })


const username = 'username'
const password = 'password'
const tweet = "example tweet"
// .type('form[action*="/search"] [name=p]', 'github nightmare')
//   .click('form[action*="/search"] [type=submit]')
//   .wait('#main')
//   .evaluate(function() {
//     return document.querySelector('#main .searchCenterMiddle li a').href
//   })



nightmare
  .goto('https://twitter.com/login')
 
  // .end()
  .type('[name="session[username_or_email]"]', username)
  .type('[name="session[password]"]', password)

  .click('[data-testid="LoginForm_Login_Button"]')
  .wait('.public-DraftStyleDefault-block')
  
  .click('[aria-label="Tweet"]')
  .type('.public-DraftStyleDefault-block', tweet)
  // .click('[data-testid="tweetButton"]')
  
  .then(function(result) {
    console.log("result")
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
