const express = require("express");

// server
const app = express();

// middleware 1
app.use((req, res, next) => {
  // Log request information
  //   console.log(req.url,req.method,"bhumi");
  console.log(
    `Request URL : ${req.url}, Method : ${
      req.method
    } , Time: ${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })}, IP: ${req.ip}`
  );
  let curentTime = Date.now();

  next();

  // Log time taken after the response is sent
  let timeToprocces = Date.now() - curentTime;
  console.log(timeToprocces);
  console.log("bhumii");
});

// default middleware
app.get("/", (req, res) => {
  res.json({
    success: true,
    Message: "this is demo login middleware add in url-> /Login  ",
  });
});
// middleware 2
app.use("/Login", (req, res) => {
  console.log("login successfully");
  res.json({
    success: true,
    Message: "login page succesfull open",
    user: "user 1",
  });
});

// error handler
app.use("*", (req, res) => {
  const output = {
    success: false,
    message: "Route not found",
  };
  res.status(404).json(output);
});

app.listen(8000, () => {
  console.log("server is running");
});
