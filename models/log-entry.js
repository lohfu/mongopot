'use strict';

/*
 * Model used to log events to database
 * @module warepot/models/log-entry
 */

const mongoose = require('mongoose');

const LogEntrySchema = new mongoose.Schema({
	body: {},
	dateCreated: { type: Date, default: Date.now },
	description: String,
	details: {},
	module: String,
	method: String,
	message: String,
	name: String,
	path: String,
	status: Number,
	user: String,
});

module.exports = mongoose.model('LogEntry', LogEntrySchema);
