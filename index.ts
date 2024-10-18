// import nameFunction, { sum, subtract, multiply, divide} from "./function"

// console.log(sum(1,2))
// console.log(subtract(1,2))
// console.log(multiply(1,2))
// console.log(divide(1,2))
// console.log(nameFunction("paiss"))

// let obj = {
//     name:"John",
//     age: 20, 
//     isMarried: false
// }

// console.log(obj.age)

// let a = undefined 
// if (!a) {
//     throw new Error("a is undefined")
// }


function add(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('a and b must be numbers');
    }
    return a + b;
}

function average(a: number, b: number) : number {
    try{
        const sum = add(a,b)
        return sum / 2
    } catch (error : unknown) {
        if (error instanceof Error) {
            console.log("error maessage", error.message)
            console.log("error name", error.name)
            console.log ("stack trace", error.stack)
            throw Error
        } else {
            console.error("error is not an instance of Error", error)
            throw new Error("unknown error")
        }
    } finally {
        console.log("finally block")
    }
}


function main(): void {
    try { 
        const x = average(10,20);
        console.log("average is", x)

        const y = average(10, "20" as any)
        console.log("average is", y)
    } catch (error: unknown) {
        console.error("error in main", error)
    } finally {
        console.log("finally block in main")
    }
}

main()