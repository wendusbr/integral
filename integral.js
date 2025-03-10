export class Integral {
    rectangle(x0, x, p, f, f_) {
        const delta = p!=0 ? (x - x0)/p : 0
        var sum = 0

        if(delta != 0) {
            for(var t=x0; t<=x-delta; t+=delta) 
                sum += f(t)*delta
        }

        return f_ ? new Array(sum, f_(x0, x)) : sum
    }
}