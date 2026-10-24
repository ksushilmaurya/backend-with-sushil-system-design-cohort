
const express = require("express");

const app = express();
const PORT = 3000;

// Each container will receive its own ID.
const instance = process.env.INSTANCE_ID || "local";

app.get("/", (req, res) => {
    console.log(`Request handled by ${instance}`);

    res.json({
        message: "Hello from backend!",
        instance,
        timestamp: new Date().toISOString()
    });
});

// app.get("/slow", (req, res) => {
//     // Random delay between 1 and 10 seconds

//     const delay = instance === "backend-1" ? 30000 : 1000;

//     console.log(
//         `Started on ${instance} | Delay: ${delay}ms`
//     );

//     setTimeout(() => {
//         console.log(`Finished on ${instance}`);

//         res.json({
//             message: "Request completed",
//             instance,
//             delay,
//             timestamp: new Date().toISOString()
//         });
//     }, delay);
// });

// app.get("/health", (req, res) => {
//     res.json({
//         status: "healthy",
//         instance
//     });
// });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`${instance} listening on port ${PORT}`);
});
