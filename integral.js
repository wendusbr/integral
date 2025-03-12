export class Integral {
    rectangle(x0, x, p, f, f_) {
        const delta = p!=0 && x>=x0 ? (x - x0)/p : 0
        var sum = 0

        for(var i=0; i<=p-1; i++)
            sum += f(x0 + i*delta)*delta

        return f_ ? new Array(sum, f_(x0, x)) : sum
    }
}