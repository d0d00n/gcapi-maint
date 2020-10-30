const express = require('express');

const endDatetime = process.env.END_DATEIME || 'Wed, 11 Nov 2020 16:00:00 GMT';
const port = process.env.PORT || 8080;
const app = express();

app.get("/", async(req,res) => {
	res.set({
		'retry-after': endDatetime
	});
	res.status(503);
	res.json({message: 'The GC API Store in under maintenance. Please check retry-after header for when to try again. Le Magasin des API du GC est en cours de entretien. Veuillez vérifier l\'en-tête «retry-after» pour savoir quand réessayer.'});
});

app.listen(port, function(){
	console.log(`App started on ${port}`);
});