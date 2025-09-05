// start server
import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/db/index.js";


dotenv.config({ path: "./.env" });
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(` Server is running at port:  ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
  });










// npm i express
// npm i nodemon -D
// npm i mongoose
// npm i dotenv
// npm i cors
// npm i bcryptjs
// npm i jsonwebtoken
// npm i cookie-parser
// npm i multer
// npm i cloudinary
// npm i nodemailer
// npm i googleapis