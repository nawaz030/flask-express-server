const express = require("express");

const app = express();

app.get("/", async (req, res) => {
    try {
        const response = await fetch("http://localhost:5000/api/message");
        const data = await response.json();

        res.send(`
            <h1>Express Frontend</h1>
            <p>${data.message}</p>
        `);
    } catch (error) {
        res.status(500).send("Flask backend is not reachable");
    }
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Express running on port 3000");
});