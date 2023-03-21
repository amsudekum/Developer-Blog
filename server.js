const routes = require('./controllers');
const sequelize = require('.config/connection');
const express = require('express');
const path = require('path');

const expressHandleBars = require('express-handlebars');
const handlebars = expressHandleBars.create({helpers});
