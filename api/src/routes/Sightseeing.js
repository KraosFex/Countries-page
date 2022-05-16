const { Router } = require("express");
const { Axios } = require("axios");
const { Op } = require("sequelize")
const { Sightseeing, Country } = require("../database/db.js");

const router = Router();