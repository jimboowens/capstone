# Capstone
## This is an eCommerce website, utilizing the following
 - - - -

# Back-end
 
 * Node.js
 * Express
 * PostgreSQL
 * Postico

# Front-end
 
 * JavaScript
 * React
 * Redux
 * MaterializeCSS
 * HTML

 <details>
 
 * Back-End
   * NodeJS
     * Express
     * Cross-Origin Compatibility
     * npm
       * node_modules
         * Helmet
         * bCrypt
         * Cookie Parser
         * Passport
         * Express Session
   * PostgreSQL
     * Postico
     * PostMan
 * Front-End
   * JavaScript
    * ReactJS
     * Create-React-App
     * node_modules
     * React-Router-Dom
     * Link
     * Router-Dom
     * Component
     * SweetAlert
   * CSS
     * MaterializeCSS
     * Custom CSS
   * HTML
   * Stripe Card Payment Method
   * Simplifica Imported Font
   * Redux
    * Login tokens
    * Connect
    * Bind Action Creators
    * Map State to Props
    * Map Dispatch to Props
   </details>
    - - - -
   
   This was an immense learning exercise for me. I anjoyed debugging and working through the user experience. As more components were added and reducers became more numerous, I began to see the effectiveness and elegance of React with Redux. As sites get larger and more complex, more and more information needs to be stored in the database to provide a good user experience. 

The JavaScript file for my '.config' file got more complex as we went on; connecting us to the Database in PostgreSQL and Passport had secrets and keys that were important not to be publicly accessible. Although Passport was not able to be implemented in this exercise because of Chrome web server security protocol, I still have the information in the site for when I am able to serve the site on one port versus the two (one for my Express Server, and the other for my React App).Here is an example of what my '.config' file looked like:
 - - - -
 
 ```javascript
 module.exports = {
    passport:{
        clientID:`clientID`,
        clientSecret: `a0d3e3149fc7e2b96263869c42d5cf8c969420feb`,
        callbackURL: `{window.apiHost}/auth/github/callback`,
        secret:`secret`,
        resave:false,
        saveUnitialized:true,
    },
    connect:{
        host: 'host',
        port: default,
        database: 'capstone',
        user: 'jeremyowens',
        password: 'password'
     },
}
 ```
