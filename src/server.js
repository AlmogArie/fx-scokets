const _getRandomNum = (min, max) => {
    let randomNum = (Math.random() * (max - min) + min).toFixed(4)
    randomNum = parseFloat(randomNum)
    return randomNum;
}

const createData = () => {
    let data = []
    // data structure: [time, open, high, low, close]
    data.push(Date.now())
    for (let i = 0; i < 4; i++) {
        let randomNum = _getRandomNum(115, 120);
        data.push(randomNum)
    }
    return data
}

const io = require("socket.io")();
const PORT = 8000;

// This event is fired upon a new connection
io.on("connection", client => {
    // Clearing interval function by looking if their is an open interval
    const stopInterval = () => {
        if (client.intervalId) {
            clearInterval(client.intervalId)
            delete client.intervalId
        }
    }

    client.on("subscribeToInterval", interval => {
        // Checking if their is an interval runing and if their is then clear it.
        stopInterval()
        client.emit("data", createData())
        // Don"t start a new interval interval if one is already running
        if (!client.intervalId) {
            client.intervalId = setInterval(() => {
                client.emit("data", createData())
            }, interval);
        }
    })

    // This event is fired by the Socket instance upon disconnection.
    client.on("disconnect", () => {
        stopInterval()
    })
});


io.listen(PORT);
console.log("listening on port", PORT);