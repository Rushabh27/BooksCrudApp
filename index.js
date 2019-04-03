const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://robot:robot@crud-nodejs-aamhl.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

var ObjectId = require('mongodb').ObjectID;

app.use(bodyParser.urlencoded({ extended: true }));

client.connect(err => {
    db = client.db("mongodb").collection("books");

    app.listen(3001, function(){
        console.log("O servidor está a correr na porta 3001");
    });
});

app.set('view engine', 'ejs');

//GET method
app.route('/')
.get((req, res) => {
    res.render('template.ejs');
})
.get((req, res) => {
    const cursor = db.find();
});

//CREATE
app.route('/show')
.get((req, res) => {
    db.find().toArray((err, results) => {
    	if (err) return console.log("Error: " + err);
	res.render('show.ejs', { books: results });
    });
})
.post((req, res) => {
    db.insertOne(req.body, (err, result) => {
        if (err) return console.log("Erro: " + err);
    
        console.log("Registo guardado com sucesso na BD!");
        res.redirect('/show');
    });
});

//EDIT
app.route('/edit/:id')
.get((req,res) => {
    var id = req.params.id;

    db.find(ObjectId(id)).toArray((err, result) => {
        if (err) return console.log("Error: " + err);
    	res.render('edit.ejs', { books: result });
    });
})
.post((req,res) => {
    var id = req.params.id;
    var title = req.body.title;
    var author = req.body.author;
    var genre = req.body.genre;

    db.updateOne({_id: ObjectId(id)}, {
        $set: {
	    title: title,
	    author: author,
	    genre: genre   	
	}
    }, (err, result) => {
    	if (err) return res.send(err);
        res.redirect('/show');
	console.log("Registo atualizado com sucesso!");
    })
});

//DELETE
app.route('/delete/:id')
.get((req,res) => {
    var id = req.params.id;

    db.deleteOne({_id: ObjectId(id)}, (err, result) => {
    	if (err) return res.send(500, err);
	console.log("Registo eliminado com sucesso!");
	res.redirect('/show');
    });
});




