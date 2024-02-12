// const express = require('express');
// const app = express();
// const port = 3000;


// app.get ("/", (req, res)=> {
//     console.log("hello")
//     res.send("express")
// })
// app.listen(3000)

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});