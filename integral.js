export class Integral {
    #squareFunction(t) {
        return t*t
    }

    #squareFunction_(x0, x) {
        return (x*x*x)/3 - (x0*x0*x0)/3
    }

    squareFunction_Numeric(x0, x, p) {
        const delta = p!=0 ? (x - x0)/p : 0
        var sum = 0

        if(delta != 0) {
            for(var t=x0; t<=x-delta; t+=delta)
                sum += this.#squareFunction(t)*delta
        }

        return new Array(sum, this.#squareFunction_(x0, x))
    }
}