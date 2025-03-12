import { createServer } from 'node:http'
import { Integral } from './integral.js'
import { Functions } from './functions.js'

const server = createServer((request, response) => {
    const integral = new Integral()
    const functions = new Functions()

    console.log(integral.rectangle(0, 5, 100, functions.squareFunction, functions.squareFunction_))

    return response.end()
})

server.listen(3333)