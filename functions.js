export class Functions {
    squareFunction(t) {
        return t*t
    }

    squareFunction_(x0, x) {
        return (x*x*x)/3 - (x0*x0*x0)/3
    }

    cubeFunction(t) {
        return t*t*t
    }

    cubeFunction_(x0, x) {
        return (x*x*x*x)/4 - (x0*x0*x0*x0)/4
    }
}