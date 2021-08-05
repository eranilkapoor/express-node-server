const express = require('express');
const app = express();

app.get('/',(req, res)=>{
	res.send('Hello world!');
});

app.get('/api/call', async function (req, res){
	try {
	    res.send(await search('Anil'))
	} catch (e){
	    console.log(e);
	}
});

async function search(data) {
	let result = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log('Anil Kapoor');
			resolve();
		}, 60000);
	});

	return await result;
}

app.listen(3000,()=>{
	console.log('Server running on port 3000');
});