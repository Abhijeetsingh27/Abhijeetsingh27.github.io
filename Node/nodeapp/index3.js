import http from "http";

const server = http.createServer((req, res) => {
  res.end("Coupon Code 1345");
});

server.listen(8080, () => {
  console.log("Server started");
});