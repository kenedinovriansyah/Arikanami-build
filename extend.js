const {GetJsonObject} = require('json-extends')
const fs = require('fs')
const path = require('path')

const convert = GetJsonObject("group.app.json")

fs.unlinkSync(path.join(__dirname, "package.backup.json"))
fs.writeFileSync(path.join(__dirname, "package.backup.json"), JSON.stringify(convert))