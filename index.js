require("dotenv").config();
const db = require("./config/dbmysql");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const PORT = process.env.PORT || 3001;

app.use(

  router,
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
  //   res.sendFile("./views/index.html", {root : __dirname});
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

// router.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/login.html"));
// });

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Sever http://localhost:${PORT} is running`);
});

app.post('/users', bodyParser.json(), async (req, res) => {
  let bd = req.body;
  console.log(bd);
  bd.password = await bcrypt.hash(bd.password, 10)
  bd.joinDate = `${new Date().toISOString().slice(0, 10)}`;
  if (bd.userType === null || bd.userType === undefined) {
    bd.userType = 'user'
  }
  let sql = `Insert into users (userFname,userLname,email,password,phoneNumber,joinDate,userType)
    VALUES (?,?,?,?,?,?,?)
    ;`
  db.query(sql, [bd.userFname, bd.userLname, bd.email, bd.password, bd.phoneNumber, bd.joinDate, bd.userType], (err, results) => {
    if (err) throw err
    else {
      res.send(`number of affected row/s: ${results.affectedRows}`)
    }
  })
  res.redirect('/login')
})

app.post('/login', bodyParser.json(), (req, res) => {
  let sql = `SELECT * FROM users WHERE email = ?`
  let email = {
    email: req.body.email
  }

  db.query(sql, email.email, async (err, results) => {
    if (err) throw err
    if (results.length === 0) {
      res.send(`No email found`)
    } else {
      const isMatch = await bcrypt.compare(req.body.password, results[0].password);
      if (!isMatch) {
        res.send('Password is Incorrect')
      } else {
        const payload = {
          user: {
            userFName: results[0].userFName,
            userLName: results[0].userLName,
            email: results[0].email,
            password: results[0].password,
            phoneNumber: results[0].phoneNumber,
            joinDate: results[0].joinDate,
            userType: results[0].userType,
          },
        };
        jwt.sign(payload, process.env.jwtsecret, {
          expiresIn: "365d"
        }, (err, token) => {
          if (err) throw err;
          // res.send(token)
          res.json({
            msg: results,
            token
          })
        });
        res.send(`Loged in`)
      }
    }
  })
})

app.get('/prod', bodyParser.json(), (req, res) => {
  let bd = req.body
  let sql = `SELECT * FROM products;`
  db.query(sql, (err, results) => {
      if (err) {
          console.log(err)
      } else {
          res.json({
              results: results
          })
      }
  })
})

app.post('/prods',bodyParser.json(),(req,res) => {
  const {title, category, description, img, price, create_by} =  req.body
  let sql = `Insert into products (title,category,description,img,price,create_by)
  VALUES
  (?,?,?,?,?,?);
  `;

  db.query(sql, [title,category, description, img, price, create_by], (err,results) => {
    if(err) throw err
    console.log(results)
  })
})