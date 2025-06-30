const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const filePath = path.join(__dirname, "customImages.json");

function readData() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "{}"); // create empty JSON if not found
  }

  const raw = fs.readFileSync(filePath, "utf-8") || "{}";
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to parse JSON", err);
    return {};
  }
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

//  Routes
app.get("/", (req, res) => {
  res.send("<h3> HinaFlix API is running~</h3><p>Use /custom-images</p>");
});

app.get("/custom-images", (req, res) => {
  res.json(readData());
});

app.post("/custom-images", (req, res) => {
  const { id, url } = req.body;
  if (!id || !url) return res.status(400).json({ error: "Missing id or url" });

  const data = readData();
  data[id] = url;
  writeData(data);
  res.json({ message: "Image added/updated!", id, url });
});

app.delete("/custom-images/:id", (req, res) => {
  const data = readData();
  if (data[req.params.id]) {
    delete data[req.params.id];
    writeData(data);
    res.json({ message: "Deleted", id: req.params.id });
  } else {
    res.status(404).json({ error: "Image not found" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 HinaFlix backend running at http://localhost:${PORT}`);
});
