import fs from "fs"

// callback function
// fs.readFile("file.txt", "utf8", function (err, data) {
//     console.log(data)
// })

//promiste (.then)
// fs.readFile("file.txt", "utf8").then(data => {
//     console.log(data)
// })

// async
async function showText() {
    const data = await fs.readFileSync("file.txt", "utf8")
    return data
}

console.log(showText())