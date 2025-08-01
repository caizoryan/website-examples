import fs from "fs"

// fetch("https://api.are.na/v2/channels/websites-architecture?per=100")
// 	.then((res) => res.json())
// 	.then((res) => {
// 		console.log(res)
// 		fs.writeFileSync("data.json", JSON.stringify(res, null, 2))
// 		console.log("done")
// 	})

fetch("http://localhost:3000/api/channels/my-websites-raqppmgkh10?per=100&force=true")
	.then((res) => res.json())
	.then((res) => {
		console.log(res)
		fs.writeFileSync("my.json", JSON.stringify(res, null, 2))
		console.log("done")
	})


