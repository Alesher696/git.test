var number = function (array) {
    //your awesome code here

        let n = 0;
        let result = [];

        for (let i = 0; i < array.length; i++) {
            n+=1;
            let add = `${n}: ${array[i]}`;
            result.push(add)
        }
        return result;
    }



console.log(number([]));

// ["1: a", "2: b", "3: c"]