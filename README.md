"https://github.com/restapiexample/nodejs-restapi-using-express-mysql/blob/master/index.js " 
https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2

Content-Type:"application/json"


//solution for Cross-Origin Request Blocked - NodeJs
CORS on ExpressJS

In your ExpressJS app on node.js, do the following with your routes:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

