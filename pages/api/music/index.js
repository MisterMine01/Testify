import Database from '../database.js'

export default function handler(req, res) {
    res.status(200).json(Database.file);
}