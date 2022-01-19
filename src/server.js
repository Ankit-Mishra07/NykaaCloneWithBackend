const connect = require("./configs/db")

const app = require("./index")

const port = process.env.PORT || 2005;

app.listen(port, async (req, res) => {
    await connect()

    console.log(`Listening on PORT ${port}`)
})

