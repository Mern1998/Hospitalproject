const express = require("express");
const cors =require("cors")
const dbase = require("./Database");
const schmaconnect = require("./Schema");
let app = express();
app.use(express.json());
app.use(cors())

app.post("/register", async (req, resp) => {
  let dt = new schmaconnect(req.body);
  let res = await dt.save();
  console.log(res);
  resp.send(res);
});


 app.delete("/delet/:_id", async (req, resp) => {
    let data = await schmaconnect.deleteMany(req.params);
    resp.send(data);
  });

app.get("/list", async (req, resp) => {
  let conn = await schmaconnect.find({});
  console.log(conn);
  resp.send(conn);
});

app.put("/udt/:_id", async (req, resp) => {
  let ud = await schmaconnect.updateOne(req.params, {
    $set: req.body,
  });
resp.send(ud);
});
app.listen(8000);
app.listen(7000);
