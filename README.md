# Capstone
## This is an eCommerce website, utilizing the following
 - - - -

## Back-end
 
 * Node.js
 * Express
 * PostgreSQL
 * Postico

## Front-end
 
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
* AWS
  * Ubuntu EC2 Instance
  * awsKeys.pem
  * Apache2
    * Server
    * Apachectl
  * NPM
  * sites-available
  * proxy_http
  * /var/www/capstone
  * PM2
  * PostgreSQL
  * certbot
</details>

 - - - - 
# Summary
   
   This was an immense learning exercise for me. I enjoyed debugging and working through the user experience. As more components were added and reducers became more numerous, I began to see the effectiveness and elegance of React with Redux. As sites get larger and more complex, more and more information needs to be stored in the database to provide a good user experience. The idea came from the problem of sales and notifications of queries and purchases from eBay, amazon, and other eCommerce sites. The extended goal is to link merchants of this site to twillio, and if the time matches their hours of operation, they receive notifications via text and/or phone based on their preference. If not, the notifications are stored until such time as the vender is again open for business. Then, they receive the queued notifications from eBuy via their preferred method of communication. 
   
   There were some significant challenges, especially with Stripe connection (using my public apiKey for sandbox purchases), and deploying to my Amazon Web Server. The NPM run build was challenging, as well, as this was the first time I used a back-end and front-end folder. I had a back-end and front-end images file, which broke some page population until I retried and cut and pasted the front-end images into the back-end folder. Running the command line in Ubuntu was involved, as I was starting with a brand new EC2. I had to install Apache2, configure the .conf file, clone this repository, get HTTPS approval via certbot, utilize PM2 to run the site in the background, and set up the PostgreSQL database. PostgreSQL has different protocols and commands than MySQL, which I have used in the past to serve live sites. Redux also deserves honorable mention, as it is quite a challenge particularly when it comes to smaller scale websites like this one. However, as pages started to get more numerous and I began to re-use classes and functions, I saw the elegance and efficience of Redux when adding content. The search utility was a different callenge, as my database is not as large as a fully deployed website, and the categories are not as widespread. So, in the event there were no objects in my database matching the criteria, I had to return a random list of 4 items from the database to allow the page to populate. Connecting the front end to the back end was 
   
# Step-by-step Implementation
   I started from scratch with an Express Back-end, initialized with Express. Then, I went to create-react-app and initialized the front-end folder (changing directories, installing node_modules, setting up package-lock.json and package-json omitted): 
   ```bash
   $ express back-end express
   $ create-react-app front-end
   ```
As a result of Express and React being so widely implemented, they come with some extra ingredients. After deleting the superfluous files, extensions, and images, I refactored the file structure and began to set up the servers. When I had set the back and front end servers up and run the sanity checks to make sure everything was set up, I started making a wireframe of what I wanted to display to the consumer on the front end. While the majority of our time in training at DigitalCrafts was spent utilizing BootStrap, I was not a big fan. Personally, I far prefer materialize to BootStrap, so I chose to move forward with that as my main method of styling. While I did make a few files for more nuanced styles in secondary pages, the heavy lifting was done with materialize. Reading through their documentation was very helpful, and personalizing the navbars, forms, and sections (`<div>`) was straightforward and very clean. 

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/home_page_image.png)

After configuring the homepage to what was planned in the wireframe, I began planning on the file structure and what tools I would implement. I knew I would be using Redux, so I decided to start off by installing the pertinent modules, and structured my `App.js` to connect to the store. As a true one-page application, my plan for eBuy was in place. After settling in on a color scheme and background, I styled the page flow to render how I wanted it throughout the `html`. First, I worked through logging in as a user. Through `axios`, I connected to the back end via actions in my React application, pointed to routes in my index.js (users.js seemed a bit unnecessary with limited homepage spread). Once I had the login capability functional, I had to populate the home page with items. So, I built up the `PostgreSQL` database with items (special thanks to: Eddie Bauer, Williams-Sonoma, Zappos, and eDon). I worked with PostMan and the npm module `faker()`, but was unable to get them to populate my database with reliable and accurate information. As an eCommerce site, we need to serve sellers in addition to buyers. As such, I implemented a form through which a logged in user can upload an item for sale. However, there are different protocols for venders as there are for sellers, so I added into the register process a check box to express interest in being a seller. 

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/register_image.png)

If you decline and later reconsider, you are redirected home when you click on the post link and informed via a `SweetAlert` to email the eBuy team to request merchant status. 

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/sweetalert_image.png)

Assuming you have been approved to be a merchant, you are then able to post items, as can be seen below:

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/post_form_image.png)
   
Next, I started working through the cart functionality. I added a `cart.js` file into the back end to be able to track cart actions and purchases. I worked through adding items to the cart via my `cartAction`, and worked and inner join command in PostgreSQL to populate the cart for an arbitrary amount of users. Then, on the `getCart` file, I used a component to map through the returned array and renders it to the DOM. The difficulty was getting the `delete` button to work! 

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/cart_image.png)

When the consumer is ready to check out, eBuy utilizes Stripe, which is secure and does not require our site to store sensitive user information. Moreover, they have their own login process, so were our user information to be compromised, no user stands any risk of purchase information being lost.

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/stripe_image.png)

Once I worked through the login and purchase aspects of the site, I began populating the rest of the site with active links, like about us and contact us. Another good resource I was able to implement was the search option(as you will notice, I serve up four random items from the database to ensure I return some sort of array. This would be changed as the database increases in size to more tailored selections, or a no results error handler could be set up in the front end):

```javascript
router.post('/search', (req,res)=>{
  const searchCriteria=req.body.searchCriteria;
  const searchQuery = `SELECT * FROM items WHERE name LIKE \'%$1#%\'`
  db.query(searchQuery,[searchCriteria]).then((results)=>{
    if (results.length>0){
      res.json(results)
    }else{
      const searchQueryExt = `SELECT * FROM items WHERE type LIKE \'%$1#%\'`
      db.query(searchQueryExt,[searchCriteria]).then((results2)=>{
        if (results2.length>0){
          res.json(results2)
        }else{
          const searchItemsQuery=`SELECT * FROM items ORDER BY RANDOM() LIMIT 4`
          db.query(searchItemsQuery).then((results3)=>{
            res.json(results3)
          }).catch((err3)=>{throw err3})
        }
      }).catch((err2)=>{throw err2})
    }
  }).catch((err)=>{throw err})
})
```
The results are:

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/primary_search_results_image.png)

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/secondary_search_results_image.png)

![image_not_found](https://raw.githubusercontent.com/jimboowens/capstone/master/front-end/public/images/readme/tertiary_results_image.png)


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

