const connect = require("./configs/db")

const app = require("./index")

app.listen(2005, async (req, res) => {
    await connect()

    console.log("Listening on PORT 2005")
})

