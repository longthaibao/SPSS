const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/files", express.static("files"));
app.use(bodyParser.json());
//mongodb connection----------------------------------------------

mongoose
  .connect(
    "mongodb+srv://root:123@cnpm.hvtewz8.mongodb.net/CNPM?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));
//multer------------------------------------------------------------
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

require("./pdfDetails");
require("./User");
const PdfSchema = mongoose.model("PdfDetails");
const User = mongoose.model("User");
const upload = multer({ storage: storage });

app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});
app.post("/login/create", async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (!existingUser) {
      await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      res.send({ status: "ok", data: req.body });
    }
  } catch (error) {
    res.json({ status: error });
  }
});
app.get("/login/account", async (req, res) => {
  try {
    const existingUser = await User.findOne({
      username: req.query.datausername,
    });
    res.send(existingUser);
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

//apis----------------------------------------------------------------
app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

app.listen(5001, () => {
  console.log("Server Started");
});
