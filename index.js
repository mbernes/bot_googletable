import axios from 'axios'
import { config } from 'dotenv'
import express from 'express'
import { GoogleSpreadsheet } from 'google-spreadsheet'

config()
const app = express()

const JOKE_API = 'https://v2.jokeapi.dev/joke/Programming?type=single'
const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`

// ff