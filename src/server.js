#!/usr/bin/env node

import http from 'http'
import debug from 'debug'
import { initializeApp } from './app'
import { OPTIMUS_PRIME_DEBUG, getPort } from './config/constants'

const log = debug(OPTIMUS_PRIME_DEBUG)

start()

async function start () {
  const port = normalizePort(getPort())
  const app = await initializeApp(port)
  createServer(app, port)
}

function createServer (app, port) {
  const server = http.createServer(app)
  server.listen(port)
  server.on('error', onError(port))
  server.on('listening', onListening(server))
}

function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  } else if (port >= 0) {
    return port
  }

  return false
}

function onError (port) {
  return function (error) {
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    if (error.syscall !== 'listen') {
      throw error
    }

    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
      default:
        throw error
    }
  }
}

function onListening (server) {
  return function () {
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    log('Listening on ' + bind)
    log(`Try it out on http://localhost:${addr.port}/graphiql`)
  }
}
