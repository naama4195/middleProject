require("dotenv").config()
const express = require('express')
const cors = require('cors')
const corsOptions = require("./config/corsOption")
const connectDB = require("./config//dbConn")
const { default: mongoose } = require("mongoose")
const app = express()
const PORT = process.env.PORT || 1500

connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/posts",require("./routes/RoutePosts"))
app.use("/api/todos",require("./routes/RouteTodos"))
app.use("/api/users",require("./routes/RouteUser"))

app.get("/", (req, res) => {
    res.send("This is home page")
})


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})

