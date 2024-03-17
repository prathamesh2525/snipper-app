const express = require("express")
const cors = require("cors")
const sequelize = require("./db")
const submissionRoutes = require("./routes/submissions")

const app = express()

app.use(cors())

app.use(express.json())
app.use("/api/submissions", submissionRoutes)

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000")
  })
})
