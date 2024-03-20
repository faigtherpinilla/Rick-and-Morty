require ('dontev').config();
import { Config } from 'dotenv';
const { sequelize } = require ("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;


const sequelize= new sequelize (`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
 ); 