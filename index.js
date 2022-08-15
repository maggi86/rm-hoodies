require("dotenv").config();
const db = require("./config/dbmysql");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const cors = require('cors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  json
} = require("body-parser");
const { Router } = require("express");
const PORT = process.env.PORT || 3003;

// app.use((req, res, next) => {
//   res.setHeader("Allow-Control-Allow-Origin", "*");
//   next();
// })
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(
  cors(),
  router,
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Sever http://localhost:${PORT} is running`);
});

let staticPath = path.join(__dirname + "/public")
app.use(express.static(staticPath));

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/index.html"));
//   //   res.sendFile("./views/index.html", {root : __dirname});
// });

// router.get("/register", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/register.html"));
// });
// router.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/login.html"));
// });

// router.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/login.html"));
// });

app.post('/register', bodyParser.json(), async (req, res) => {
  let bd = req.body;
  // console.log(bd);
  bd.password = await bcrypt.hash(bd.password, 10)
  bd.joinDate = `${new Date().toISOString().slice(0, 10)}`;
  let {
    email
  } = req.body
  let sql1 = `SELECT email FROM users WHERE email = '${email}';`;
  db.query(sql1, (err, results) => {
    if (err) throw err
    if (results.length > 0) {
      console.log('Email in use already')
    } else {
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
    }
  })
  // res.redirect('/login')
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
            userFname: results[0].userFname,
            userLname: results[0].userLname,
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
          res.json({
            status: 200,
            msg: results,
            token
          })
        });
        // console.log(payload);
        // res.send(`Loged in as ${payload.user.userFname}`)
      }
    }
  })
})

app.put('/user/:id',bodyParser.json(),(req,res) => {
  let bd = req.body
  let sql = 'UPDATE userFname,userLname,email'
  db.query(sql,)
})

app.get('/user/:id',bodyParser.json(),(req,res) => {
  let bd = req.body
  let sql = `SELECT * FROM users WHERE user_id = ${req.params.id}`
  db.query(sql,(err,results) => {
    if(err) throw err
    res.json({
      status: 200,
      results : results
    })
  })
})

app.get('/users', bodyParser.json(), (req, res) => {
  let sql = `SELECT * FROM users;`
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.json({
        status: 200,
        results: results
      })
    }
  })
})

app.get('/products', bodyParser.json(), (req, res) => {
  let sql = `SELECT * FROM products;`
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.json({
        status: 200,
        results: results
      })
    }
  })
})

router.post('/products', bodyParser.json(), (req, res) => {
  const {
    title,
    category,
    description,
    img,
    price,
    create_by
  } = req.body
  let sql = `Insert into products (title,category,description,img,price,create_by)
  VALUES
  (?,?,?,?,?,?);
  `;

  db.query(sql, [title, category, description, img, price, create_by], (err, results) => {
    if (err) throw err
    console.log(results);
  })
})

app.get('/products/:id', (req, res) => {
  let sql = `SELECT * FROM products WHERE product_id = ${req.params.id}`
  db.query(sql, (err, results) => {
    if (err) throw err
    res.json({
      status: 200,
      results: results
    })
  })
})

app.get('/users/:id/cart', (req, res) => {
  let sql = `SELECT cart FROM users WHERE user_id = ${req.params.id}`
  db.query(sql, (err, results) => {
    if (err) throw err
    res.json({
      status: 200,
      results: JSON.parse(results[0].cart)
    })
  })
})

app.post('/users/:id/cart', bodyParser.json(), (req, res) => {
  let bd = req.body
  let sql = `SELECT cart FROM users WHERE user_id = ${req.params.id}`
  db.query(sql, (err, results) => {
    if (err) throw err
    if (results.length > 0) {
      let cart;
      if (results[0].length == null) {
        cart = []
      } else {
        cart = JSON.parse(results[0].cart)
      }
      let product = {
        "p_id": cart.length + 1,
        "title": bd.title,
        "category": bd.category,
        "description": bd.description,
        "img": bd.img,
        "price": bd.price,
        "create_by": bd.create_by
      }
      cart.push(product)
      let sql1 = `UPDATE users SET cart = ? WHERE user_id = ${req.params.id}`
      db.query(sql1, JSON.stringify(cart), (err, results) => {
        if (err) throw results
        res.send(`Product added to your cart`)
      })
    }
  })
})

app.delete('/users/:id/cart', bodyParser.json(), (req, res) => {
  let bd = req.body
  let sql = `UPDATE users SET cart = null WHERE user_id = ${req.params.id}`

  db.query(sql, (err, results) => {
    if (err) throw err
    res.send('Cart is empty')
  })
})

module.exports = {
  devServer: {
    Proxy: "*"
  }
}