/// <reference types="cypress" />
 
// context('Network Requests', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:8080/commands/network-requests')
//   })

//   // Manage HTTP requests in your app

//   it('cy.request() - make an XHR request', () => {
//     // https://on.cypress.io/request
//     cy.request('https://jsonplaceholder.cypress.io/comments')
//       .should((response) => {
//         expect(response.status).to.eq(200)
//         // the server sometimes gets an extra comment posted from another machine
//         // which gets returned as 1 extra object
//         expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
//         expect(response).to.have.property('headers')
//         expect(response).to.have.property('duration')
//       })
//   })

//   it('cy.request() - verify response using BDD syntax', () => {
//     cy.request('https://jsonplaceholder.cypress.io/comments')
//     .then((response) => {
//       // https://on.cypress.io/assertions
//       expect(response).property('status').to.equal(200)
//       expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
//       expect(response).to.include.keys('headers', 'duration')
//     })
//   })

//   it('cy.request() with query parameters', () => {
//     // will execute request
//     // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
//     cy.request({
//       url: 'https://jsonplaceholder.cypress.io/comments',
//       qs: {
//         postId: 1,
//         id: 3,
//       },
//     })
//     .its('body')
//     .should('be.an', 'array')
//     .and('have.length', 1)
//     .its('0') // yields first element of the array
//     .should('contain', {
//       postId: 1,
//       id: 3,
//     })
//   })

//   it('cy.request() - pass result to the second request', () => {
//     // first, let's find out the userId of the first user we have
//     cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
//       .its('body') // yields the response object
//       .its('0') // yields the first element of the returned list
//       // the above two commands its('body').its('0')
//       // can be written as its('body.0')
//       // if you do not care about TypeScript checks
//       .then((user) => {
//         expect(user).property('id').to.be.a('number')
//         // make a new post on behalf of the user
//         cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
//           userId: user.id,
//           title: 'Cypress Test Runner',
//           body: 'Fast, easy and reliable testing for anything that runs in a browser.',
//         })
//       })
//       // note that the value here is the returned value of the 2nd request
//       // which is the new post object
//       .then((response) => {
//         expect(response).property('status').to.equal(201) // new entity created
//         expect(response).property('body').to.contain({
//           title: 'Cypress Test Runner',
//         })

//         // we don't know the exact post id - only that it will be > 100
//         // since JSONPlaceholder has built-in 100 posts
//         expect(response.body).property('id').to.be.a('number')
//           .and.to.be.gt(100)

//         // we don't know the user id here - since it was in above closure
//         // so in this test just confirm that the property is there
//         expect(response.body).property('userId').to.be.a('number')
//       })
//   })

//   it('cy.request() - save response in the shared test context', () => {
//     // https://on.cypress.io/variables-and-aliases
//     cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
//       .its('body').its('0') // yields the first element of the returned list
//       .as('user') // saves the object in the test context
//       .then(function () {
//         // NOTE 👀
//         //  By the time this callback runs the "as('user')" command
//         //  has saved the user object in the test context.
//         //  To access the test context we need to use
//         //  the "function () { ... }" callback form,
//         //  otherwise "this" points at a wrong or undefined object!
//         cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
//           userId: this.user.id,
//           title: 'Cypress Test Runner',
//           body: 'Fast, easy and reliable testing for anything that runs in a browser.',
//         })
//         .its('body').as('post') // save the new post from the response
//       })
//       .then(function () {
//         // When this callback runs, both "cy.request" API commands have finished
//         // and the test context has "user" and "post" objects set.
//         // Let's verify them.
//         expect(this.post, 'post has the right user id').property('userId').to.equal(this.user.id)
//       })
//   })

//   it('cy.intercept() - route responses to matching requests', () => {
//     // https://on.cypress.io/intercept

//     let message = 'whoa, this comment does not exist'

//     // Listen to GET to comments/1
//     cy.intercept('GET', '**/comments/*').as('getComment')

//     // we have code that gets a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-btn').click()

//     // https://on.cypress.io/wait
//     cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])

//     // Listen to POST to comments
//     cy.intercept('POST', '**/comments').as('postComment')

//     // we have code that posts a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-post').click()
//     cy.wait('@postComment').should(({ request, response }) => {
//       expect(request.body).to.include('email')
//       expect(request.headers).to.have.property('content-type')
//       expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
//     })

//     // Stub a response to PUT comments/ ****
//     cy.intercept({
//       method: 'PUT',
//       url: '**/comments/*',
//     }, {
//       statusCode: 404,
//       body: { error: message },
//       headers: { 'access-control-allow-origin': '*' },
//       delayMs: 500,
//     }).as('putComment')

//     // we have code that puts a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-put').click()

//     cy.wait('@putComment')

//     // our 404 statusCode logic in scripts.js executed
//     cy.get('.network-put-comment').should('contain', message)
//   })
// })



context('api/movie Network Requests', () => {
  // beforeEach(() => {
  //   // cy.visit('https://example.cypress.io/commands/network-requests')
  //   // cy.request({url:'http://movie-kdb.herokuapp.com/api/movie'})
  //   cy.request('https://movie-kdb.herokuapp.com/api/movie')
    
  // })

  beforeEach(() => {
    cy.intercept(
      { url: 'http://localhost:3000/**', middleware: true },
      // Delete 'if-none-match' header from all outgoing requests
      (req) => delete req.headers['if-none-match']
    )
    cy.intercept(
      { url: 'https://movie-reducer.herokuapp.com/**', middleware: true },
      // Delete 'if-none-match' header from all outgoing requests
      (req) => delete req.headers['if-none-match']
    )
    cy.intercept(
      { url: 'https://movie-kdb.herokuapp.com/api/**', middleware: true },
      // Delete 'if-none-match' header from all outgoing requests
      (req) => delete req.headers['if-none-match']
    )
  })
  

  // Manage AJAX / XHR requests in your app





  


  it('localhost server GET ', () => {
    // https://on.cypress.io/server



    // spying
    cy.intercept('/movies/**')
    cy.intercept('GET', '/movies*')
    cy.intercept({
      method: 'GET',
      url: '/movies*',
      hostname: 'localhost',
    })         

    // spying and response stubbing
    // cy.intercept('POST', '/movies*', {
    //   statusCode: 201,
    //   body: {
    //     name: 'Peter Pan',
    //   },
    // })

// spying, dynamic stubbing, request modification, etc.
cy.intercept('/movies*', { hostname: 'movie-reducer.herokuapp.com' }, (req) => {
  /* do something with request and/or response */
      expect(server.method).to.eq('GET')
      expect(server.status).to.eq(200)


      // These options control the server behavior
      // affecting all requests

      // pass false to disable existing route stubs
      expect(server.enable).to.be.true
      // forces requests that don't match your routes to 404
      expect(server.force404).to.be.false

      if (Number(Cypress.version.charAt(0)) >= 5) {
        // ignores requests from ever being logged or stubbed
        // @ts-ignore
        expect(server.ignore).to.be.a('function')
      }
})

cy.intercept('/movies*', { hostname: 'localhost' }, (req) => {
  /* do something with request and/or response */
      expect(server.method).to.eq('GET')
      expect(server.status).to.eq(200)


      // These options control the server behavior
      // affecting all requests

      // pass false to disable existing route stubs
      expect(server.enable).to.be.true
      // forces requests that don't match your routes to 404
      expect(server.force404).to.be.false

      if (Number(Cypress.version.charAt(0)) >= 5) {
        // ignores requests from ever being logged or stubbed
        // @ts-ignore
        expect(server.ignore).to.be.a('function')
      }
})


    // cy.intercept('https://movie-kdb.herokuapp.com/api/movie').should((server) => {
    //   // the default options on server
    //   // you can override any of these options
    //   // expect(server.headers).to.be.null
    //   // expect(server.response).to.be.null
      
    //   // expect(server.onAbort).to.be.undefined
    //   // expect(server.delay).to.eq(0)
    //   // expect(server.onRequest).to.eq(200)
    //   // expect(server.onResponse).to.eq(200)
    //   expect(server.method).to.eq('GET')
    //   expect(server.status).to.eq(200)


    //   // These options control the server behavior
    //   // affecting all requests

    //   // pass false to disable existing route stubs
    //   expect(server.enable).to.be.true
    //   // forces requests that don't match your routes to 404
    //   expect(server.force404).to.be.false

    //   if (Number(Cypress.version.charAt(0)) >= 5) {
    //     // ignores requests from ever being logged or stubbed
    //     // @ts-ignore
    //     expect(server.ignore).to.be.a('function')
    //   }
    // })

    // cy.server({
    //   method: 'POST',
    //   delay: 1000,
    //   status: 422,
    //   response: {},
    // })
    // cy.intercept({
    //   method: 'POST',
    //   delay: 1000,
    //   status: 200,
    //   response: {},
    // })
    // any route commands will now inherit the above options
    // from the server. anything we pass specifically
    // to route will override the defaults though.
  })

//   it('cy.request() - make an XHR request', () => {
//     // https://on.cypress.io/request
//     cy.request('https://movie-kdb.herokuapp.com/api/movie')
//       .should((response) => {
//         expect(response.status).to.eq(200)
//         // the server sometimes gets an extra comment posted from another machine
//         // which gets returned as 1 extra object
//         expect(response.body).to.have.property('length').and.be.oneOf([500, 501])
//         expect(response).to.have.property('headers')
//         expect(response).to.have.property('duration')
//       })
//   })

//   it('cy.request() - verify response using BDD syntax', () => {
//     cy.request('https://movie-kdb.herokuapp.com/api/movie')
//     .then((response) => {
//       // https://on.cypress.io/assertions
//       expect(response).property('status').to.equal(200)
//       expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
//       expect(response).to.include.keys('headers', 'duration')
//     })
//   })

//   it('cy.request() with query parameters', () => {
//     // will execute request
//     // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
//     cy.request( 
//       {
//         movie:[ {"id":0,"title":"","director":"","metascore":2,
//         "genre":"","description":"","favorites":false}],
//         appTitle: "IMDB Movie Database",
//         isFetching: false,
//         error: ''
//     }
//     )
//     .its('body')
//     .should('be.an', 'array')
//     .and('have.length', 2)
//     .its('1') // yields first element of the array
//     .should('contain', {
//       movie:[ {"id":0,"title":"","director":"","metascore":2,
//       "genre":"","description":"","favorites":false}],
//       appTitle: "IMDB Movie Database",
//       isFetching: false,
//       error: ''
//   })
//     .then((response) =>{
//       expect(response).property('status').to.equal(200)
//       expect(response).property('body').to.have.property('length').and.be.oneOf([500, 501])
//       expect(response).to.include.keys('headers', 'duration')
    
//     })
//   })

//   it('cy.request() - pass result to the second request', () => {
//     // first, let's find out the userId of the first user we have
//     cy.request('https://movie-kdb.herokuapp.com/api/movie')
//       .its('body') // yields the response object
//       .its('0') // yields the first element of the returned list
//       // the above two commands its('body').its('0')
//       // can be written as its('body.0')
//       // if you do not care about TypeScript checks
//       .then((user) => {
//         expect(user).property('id').to.be.a('number')
//         // make a new post on behalf of the user
//         cy.request('POST', 'https://movie-kdb.herokuapp.com/api/movie', {
//           id: user.id,
//           title: user.title,
//           director: user.director ,
//           metascore: user.metascore,
//           genre: user.genre,
//           description:user.description,
//           favorites: user.favorites, 

//         })
//       })
//       // note that the value here is the returned value of the 2nd request
//       // which is the new post object
//       .then((response) => {
//         expect(response).property('status').to.equal(201) // new entity created
//         expect(response).property('body').to.contain({
//           title: 'Cypress Test Runner',
//         })

//         // we don't know the exact post id - only that it will be > 100
//         // since JSONPlaceholder has built-in 100 posts
//         expect(response.body).property('id').to.be.a('number')
//           .and.to.be.gt(100)

//         // we don't know the user id here - since it was in above closure
//         // so in this test just confirm that the property is there
//         expect(response.body).property('userId').to.be.a('number')
//       })
//   })

//   it('cy.request() - save response in the shared test context', () => {
//     // https://on.cypress.io/variables-and-aliases
//     cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
//       .its('body').its('0') // yields the first element of the returned list
//       .as('user') // saves the object in the test context
//       .then(function () {
//         // NOTE 👀
//         //  By the time this callback runs the "as('user')" command
//         //  has saved the user object in the test context.
//         //  To access the test context we need to use
//         //  the "function () { ... }" callback form,
//         //  otherwise "this" points at a wrong or undefined object!
//         cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
//           userId: this.user.id,
//           title: 'Cypress Test Runner',
//           body: 'Fast, easy and reliable testing for anything that runs in a browser.',
//         })
//         .its('body').as('post') // save the new post from the response
//       })
//       .then(function () {
//         // When this callback runs, both "cy.request" API commands have finished
//         // and the test context has "user" and "post" objects set.
//         // Let's verify them.
//         expect(this.post, 'post has the right user id').property('id').to.equal(this.user.id)
//       })
//   })

//   it('cy.route() - route responses to matching requests', () => {
//     // https://on.cypress.io/route

//     let message = 'whoa, this comment does not exist'

//     cy.intercept()

//     // Listen to GET to comments/1
//     // cy.route('GET', 'comments/*').as('getComment')
//     cy.route('https://localhost:3000/movies/*',[{
//       id: user.id,
//       title: user.title,
//       director: user.director ,
//       metascore: user.metascore,
//       genre: user.genre,
//       description:user.description,
//       favorites: user.favorites, 

//     }])

//     // we have code that gets a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-btn').click()

//     // https://on.cypress.io/wait
//     cy.wait('@getComment').its('status').should('eq', 200)

//     // Listen to POST to comments
//     cy.route('POST', '/comments').as('postComment')

//     // we have code that posts a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-post').click()
//     cy.wait('@postComment').should((xhr) => {
//       expect(xhr.requestBody).to.include('email')
//       expect(xhr.requestHeaders).to.have.property('Content-Type')
//       expect(xhr.responseBody).to.have.property('name', 'Using POST in cy.route()')
//     })

//     // Stub a response to PUT comments/ ****
// /*
//     cy.route({
//       method: 'PUT',
//       url: 'comments/*',
//       status: 404,
//       response: { error: message },
//       delay: 500,
//     }).as('putComment')
// */
//     cy.route({
//       method: 'PUT',
//       url: 'comments/*',
//       status: 200,
//       response: { error: message },
//       delay: 500,
//     }).as('putComment')

//     // we have code that puts a comment when
//     // the button is clicked in scripts.js
//     cy.get('.network-put').click()

//     cy.wait('@putComment')

//     // our 404 statusCode logic in scripts.js executed
//     cy.get('.network-put-comment').should('contain', message)
//   })
})