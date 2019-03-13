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
     * Axios
  * SweetAlert
  * MaterializeCSS
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
   
# Summary
   
   This was an immense learning exercise for me. I anjoyed debugging and working through the user experience. As more components were added and reducers became more numerous, I began to see the effectiveness and elegance of React with Redux. As sites get larger and more complex, more and more information needs to be stored in the database to provide a good user experience. 
   
   I started from scratch with an Express Back-end, initialized with Express. Then, I went to create-react-app and initialized the front-end folder (changing directories, installing node_modules, setting up package-lock.json and package-json omitted): 
   ```bash
   $ express back-end express
   $ create-react-app front-end
   ```
As a result of Express and React being so widely implemented, they come with some extra ingredients. After deleting the superfluous files, extensions, and images, I refactored the file structure and began to set up the servers. When I had set the back and front end servers up and run the sanity checks to make sure everything was set up, I started making a wireframe of what I wanted to display to the consumer on the front end. While the majority of our time in training at DigitalCrafts was spent utilizing BootStrap, I was not a big fan. Personally, I far prefer materialize to BootStrap, so I chose to move forward with that as my main method of styling. While I did make a few files for more nuanced styles in secondary pages, the heavy lifting was done with materialize. Reading through their documentation was very helpful, and personalizing the navbars, forms, and sections (`<div>`) was straightforward and very clean. I knew I would be using Redux, so I decided to start off by installing the pertinent modules, and structured my `App.js` to connect to the store. As a true one-page application, my plan for eBuy was in place. After settling in on a color scheme and background, I styled the page flow to render how I wanted it throughout the `html`. First, I worked through logging in as a user. Through `axios`, I connected to the back end via actions in my React application, pointed to routes in my index.js (users.js seemed a bit unnecessary with limited homepage spread). Once I had the login capability functional, I had to populate the home page with items. So, I built up the `PostgreSQL` database with items (special thanks to: Eddie Bauer, Williams-Sonoma, Zappos, and eDon). I worked with PostMan and the npm module `faker()`, but was unable to get them to populate my database with reliable and accurate information. As an eCommerce site, we need to serve sellers in addition to buyers. As such, I implemented a form through which a logged in user can upload an item for sale. However, there are different protocols for venders as there are for sellers, so I added into the register process a check box to express interest in being a seller. If you decline and later reconsider, you are redirected home when you click on the post link and informed via a `SweetAlert` to email the eBuy team to request merchant status. Assuming you have been approved to be a merchant, you are then able to post items, as can be seen below:

![alt text](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/post_form_image.png)
   
# .config 

The JavaScript file for my `.config` file got more complex as we went on; connecting us to the Database in PostgreSQL and Passport had secrets and keys that were important not to be publicly accessible. Although Passport was not able to be implemented in this exercise because of Chrome web server security protocol, I still have the information in the site for when I am able to serve the site on one port versus the two (one for my Express Server, and the other for my React App).Here is an example of what my `.config` file looked like:
 
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

