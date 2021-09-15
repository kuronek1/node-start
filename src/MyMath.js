class MyMath{
    constructor() {
        this.sum = (a, b) => a + b
    }
    sum = function(a, b) { return a + b}

    static test = 123

    mult(a, b) { return a * b}
    
    devide() {

    }
}

const myConst = 'test'

module.exports.mymath = MyMath
module.exports.constant = myConst
