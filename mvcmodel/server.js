const app = require("./app");
const path = require("path");
const env = require("dotenv");

const envpath = path.join(__dirname, "/utility/config.env");

env.config({ path: envpath });
app.listen(process.env.PORT, () => {
    console.log('server is running ')
    console.log(process.env.PORT)
});
