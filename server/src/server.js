const app = require("./index.js");
const connect = require("./configs/db");
 require("dotenv").config();
let PORT = process.env.PORT;
app.listen(PORT, async ()=> {
  try {
    await connect();
    console.log(`server is running on port ${PORT}`);
  } catch (er) {
    console.log(er);
  }
});
