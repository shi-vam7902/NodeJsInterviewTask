const express = require("express");
const app = express();
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

app.get("/task-1", (req, res) => {
  // query string
  const num = parseInt(req.query.number);
  const numbers = [];
  for (let i = 1; i <= num; i++) {
    //checking condition
    if (i % 3 == 0 && i % 5 == 0) {
      numbers.push("Fizbuzz");
    } else if (i % 3 == 0) {
      numbers.push("Fizz");
    } else if (i % 5 == 0) {
      numbers.push("BUZZ");
    } else {
      numbers.push(i.toString());
    }
  }
  res.send(numbers.join(" "))
});
// app.listen(9999, (err) => {
//   if (err) {
//     console.log("Error=>", err);
//   } else {
//     console.log("Server Started on PORT 9999");
//   }
// });
