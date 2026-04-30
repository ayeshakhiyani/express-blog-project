const express = require("express");
const app = express();

const blogs = {
  jwt: {
    title: "JWT (JSON Web Token)",
    content: "JWT ek secure authentication method hai jo user ko verify karne ke liye use hota hai. Jab user login karta hai, server ek token generate karta hai jo user ko diya jata hai. Ye token future requests me use hota hai taake server ko bar bar login check na karna pade. JWT lightweight hota hai aur APIs me bohat common hai. Iska use secure communication aur authorization ke liye kiya jata hai."
  },

  mongoose: {
    title: "Mongoose",
    content:"Mongoose ek ODM (Object Data Modeling) library hai jo MongoDB ke sath use hoti hai. Ye developers ko schemas banane aur data ko structured form me handle karne me help karti hai. Mongoose validation, relationships aur queries ko easy bana deta hai. Iski madad se database ke sath kaam karna simple aur organized ho jata hai."

  },

  bcrypt: {
    title: "Bcrypt",
    content: "Bcrypt ek powerful library hai jo passwords ko secure banane ke liye use hoti hai. Ye passwords ko hash karta hai taake original password database me store na ho. Agar koi hacker database access bhi kar le, to wo password read nahi kar sakta. Bcrypt me salt bhi use hota hai jo security ko aur strong bana deta hai."

  },

  mvc: {
    title: "MVC Architecture",
      content: "MVC ka matlab Model, View aur Controller hai. Ye ek design pattern hai jo application ko organize karne ke liye use hota hai. Model data handle karta hai, View user interface show karta hai aur Controller dono ke beech connection banata hai. Is structure ki wajah se code clean, reusable aur easy to manage ho jata hai."

  },

  middleware: {
    title: "Middleware",
    content: "Middleware functions request aur response ke beech me execute hote hain. Ye request ko process karte hain, jaise authentication check karna, data modify karna ya logging karna. Express me middleware bohat important hota hai kyunki ye application flow ko control karta hai. Har request server tak directly nahi jati, pehle middleware se pass hoti hai."

  }
};

// Home Page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Blog App</title>
        <style>
          body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: white;
          }

          h1 {
            text-align: center;
            padding: 30px;
            color: #38bdf8;
          }

          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .card {
            background: #1e293b;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
            transition: 0.3s;
            text-align: center;
          }

          .card:hover {
            transform: translateY(-8px) scale(1.02);
          }

          a {
            text-decoration: none;
            color: #22d3ee;
            font-size: 18px;
            font-weight: bold;
          }

          .emoji {
            font-size: 30px;
            margin-bottom: 10px;
          }
        </style>
      </head>

      <body>
        <h1>🚀 Explore Tech Blogs</h1>

        <div class="container">

          <div class="card">
            <div class="emoji">🔐</div>
            <a href="/blog/jwt">JWT – Secure Login System</a>
          </div>

          <div class="card">
            <div class="emoji">🗄️</div>
            <a href="/blog/mongoose">Mongoose – MongoDB Made Easy</a>
          </div>

          <div class="card">
            <div class="emoji">🔑</div>
            <a href="/blog/bcrypt">Bcrypt – Password Security</a>
          </div>

          <div class="card">
            <div class="emoji">🏗️</div>
            <a href="/blog/mvc">MVC – Structure Like a Pro</a>
          </div>

          <div class="card">
            <div class="emoji">⚙️</div>
            <a href="/blog/middleware">Middleware – Behind the Scenes</a>
          </div>

        </div>
      </body>
    </html>
  `);
    
});

// Dynamic Blog Route
app.get("/blog/:topic", (req, res) => {
  const topic = req.params.topic.toLowerCase();
  const blog = blogs[topic];

  if (blog) {
    res.send(`
  <html>
    <head>
      <title>${blog.title}</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #020617, #0f172a);
          color: white;
          padding: 40px;
        }

        .card {
          max-width: 700px;
          margin: auto;
          background: #1e293b;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }

        h1 {
          color: #38bdf8;
        }

        p {
          line-height: 1.6;
          font-size: 18px;
        }

        a {
          display: inline-block;
          margin-top: 20px;
          color: #facc15;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>

    <body>
      <div class="card">
        <h1>${blog.title}</h1>
        <p>${blog.content}</p>
        <a href="/">⬅ Back to Home</a>
      </div>
    </body>
  </html>
`);
  } else {
    res.send("<h1>❌ Blog Not Found</h1>");
  }
});

app.listen(5500, () => {
  console.log("Server running on port 5500");
});

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`...`);
});