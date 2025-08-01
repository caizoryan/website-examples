fetch("./data.json")
	.then((res) => res.json())
	.then(data_init)

fetch("./my.json").then((res) => res.json())
	.then(my_init)

function my_init(channel){
	channel.contents.forEach((b) => {
		if(b.class != "Link") return
		document.querySelector(".mine").innerHTML += block(b)})
}

function data_init(channel){
	channel.contents.forEach((b) => {
		if(b.class != "Link") return
		document.querySelector(".architecture-websites").innerHTML +=block(b)
	})
}

function block(block) {
	return  `
<a target="_blank" href="${block.source.url}">
<div class="item">
	<p>${block.title}</p>
	<p>${block.source.url}</p>
	<img class="hidden" src="${block.image.display.url}"></img>
</div>
</a>
`
}
