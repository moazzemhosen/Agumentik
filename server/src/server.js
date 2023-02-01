const app = require("./index");
const connect = require("./configs/db");
 require("dotenv").config();
//let PORT = process.env.PORT;
app.listen(8080, async function () {
  try {
    await connect();
    console.log(`server is running on port ${PORT}`);
  } catch (er) {
    console.log(er);
  }
});
