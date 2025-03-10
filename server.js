import {createServer} from 'node:http'
import {Integral} from './integral.js'

const server = createServer((request, response) => {
    const integral = new Integral()

    console.log(integral.squareFunction_Numeric(5, 0, 100))

    return response.end()
})

server.listen(3333)