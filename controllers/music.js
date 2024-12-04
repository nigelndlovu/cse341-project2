const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllMusic = async (req, res) => {
	//#swagger.tags=['Music']
	const result = await mongodb.getDatabase().db().collection('music').find();
	result.toArray().then((music) => {
		res.setHeader('Content-Type', 'application/json');
		res.status(200).json(music);
	});
};

const getSingleMusic = async (req, res) => {
	//#swagger.tags=['Music']
	const musicId = new ObjectId(req.params.id);
	const result = await mongodb.getDatabase().db().collection('music').find({ _id: musicId });
	result.toArray().then(() => {
		res.setHeader('Content-Type', 'application/json');
		res.status(200).json(music[0]);
	});
};

const createMusic = async (req, res) => {
	//#swagger.tags=['Music']
	const single = {
		songTitle: req.body.songTitle,
  	duration: req.body.duration,
  	composer: req.body.composer,
  	releaseYear: req.body.releaseYear,
  	sales: req.body.sales,
  	genre: req.body.genre,
  	youtube: req.body.youtube,
  	appleMusic: req.body.appleMusic,
  	spotify: req.body.spotify
	};
	const response = await mongodb.getDatabase().db().collection('music').insertOne(single);
	if (response.acknowledged) {
		res.status(204).send();
	} else {
		res.status(500).json(response.error || 'Some error occurred while creating the music info');
	};
};

const updateMusic = async (req, res) => {
	//#swagger.tags=['Music']
	const musicId = new ObjectId(req.params.id);
	const single = {
		songTitle: req.body.songTitle,
  	duration: req.body.duration,
  	composer: req.body.composer,
  	releaseYear: req.body.releaseYear,
  	sales: req.body.sales,
  	genre: req.body.genre,
  	youtube: req.body.youtube,
  	appleMusic: req.body.appleMusic,
  	spotify: req.body.spotify
	};
	const response = await mongodb.getDatabase().db().collection('music').replaceOne({_id: musicId}, single);
	if (response.modifiedCount > 0) {
		res.status(204).send();
	} else {
		res.status(500).json(response.error || 'Some error occurred while updating the music info');
	};
};

const deleteMusic = async (req, res) => {
	//#swagger.tags=['Music']
	const musicId = new ObjectId(req.params.id);
	const response = await mongodb.getDatabase().db().collection('music').deleteOne({_id: musicId}, true);
	if (response.deletedCount > 0) {
		res.status(204).send();
	} else {
		res.status(500).json(response.error || 'Some error occurred while deleting the music');
	};
};

module.exports = {
	getAllMusic,
	getSingleMusic,
	createMusic,
	updateMusic,
	deleteMusic
};