const express = require('express')


const { getCookies, postCookies, putCookies, deleteCookies, getCookiesByType } = require('./controllers')
const { middlewareObjectId, middlewareType } = require('./middlewares')

const router = express.Router()

    router.route('/')
        .get( getCookies )
        .post( postCookies )

    router.route('/:_id' )
        .put( middlewareObjectId , putCookies)
        .delete( middlewareObjectId , deleteCookies )

    router.route('/type/:type' )
        .get( middlewareType , getCookiesByType )

module.exports = {
    router
}