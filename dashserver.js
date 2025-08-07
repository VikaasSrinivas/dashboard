const express = require("express");
const axios = require("axios");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" },
});

// Broadcast real-time data every 5 seconds
setInterval(async () => {
  try {
    const { data } = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    io.emit("priceUpdate", {
      time: data.time.updated,
      price: data.bpi.USD.rate_float,
    });
  } catch (err) {
    console.error("API error", err);
  }
}, 5000);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
