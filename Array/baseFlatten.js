/**
 * 目标：数组扁平化，对任意深度的数组扁平
 * @param {Array}   需要被扁平化的数组
 * @param {Number}  扁平深度
 */

function baseFlatten(array,deep=1,result) {
    result || (result = [])
    if(deep > 1) {
        baseFlatten(array,deep-1,result)
    }else {
        arrayPush(result,array)
    }
    return result
}
function arrayPush(array, values) {
    console.log(values)
    let index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
        console.log(index)
        array[offset + index] = values[index];
    }
    console.log(array)
    return array;
}

let text_arr = [
    [1, 2],
    [123],
    1,
    {
        obj: 'test',
        obj2: [1,2,3]
    },
    'null',
    undefined, 
    [null, undefined]
]

let ans = baseFlatten(text_arr,5)
console.log(ans)