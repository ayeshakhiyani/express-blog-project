const express = require("express");
const app = express();

const blogs = {
  jwt: {
    title: "JWT (JSON Web Token)",
    content: "JWT ek secure authentication method hai jo user ko verify karne ke liye use hota hai. Isme token generate hota hai jo server aur client ke beech exchange hota hai."
  },

  mongoose: {
    title: "Mongoose",
    content: "Mongoose ek ODM library hai jo MongoDB ke sath use hoti hai. Ye schema aur data modeling provide karti hai."
  },

  bcrypt: {
    title: "Bcrypt",
    content: "Bcrypt password hashing ke liye use hota hai taake passwords secure rahen."
  },

  mvc: {
    title: "MVC Architecture",
    content: "MVC ka matlab Model, View, Controller hai. Ye application ko structure dene ke liye use hota hai."
  },

  middleware: {
    title: "Middleware",
    content: "Middleware functions request aur response ke beech me execute hote hain."
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
            font-family: Arial;
            background: #111;
            color: white;
            text-align: center;
          }
          a {
            display: block;
            margin: 10px;
            color: cyan;
            font-size: 20px;
          }
        </style>
      </head>
      <body>
        <h1>My Blog Topics</h1>
        <a href="/blog/jwt">JWT</a>
        <a href="/blog/mongoose">Mongoose</a>
        <a href="/blog/bcrypt">Bcrypt</a>
        <a href="/blog/mvc">MVC</a>
        <a href="/blog/middleware">Middleware</a>
      </body>
    </html>
  `);
});

// Dynamic Blog Route
app.get("/:topic", (req, res) => {
  const topic = req.params.topic.toLowerCase();
  const blog = blogs[topic];

  if (blog) {
    res.send(`
      <html>
        <head>
          <title>${blog.title}</title>
          <style>
            body {
              font-family: Arial;
              background: #0f172a;
              color: white;
              padding: 40px;
            }
            h1 {
              color: cyan;
            }
            a {
              color: yellow;
            }
          </style>
        </head>
        <body>
          <h1>${blog.title}</h1>
          <p>${blog.content}</p>
          <br>
          <a href="/">⬅ Back to Home</a>
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