/*
eg:
_.difference([3, 2, 1], [4, 2]);
// => [3, 1]

创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
与pullAll不同的是，该方法会返回一个新数组
*/
/**
 * 
 * @param {*} array 
 * @param {*} source 
 */
function compare(array, source) {
    let arr = [],
        index = 0
    array.forEach(arrItem => {
        if (source.indexOf(arrItem) == -1) {
            arr[index++] = arrItem
        }
    })
    return arr
}


function difference() {
    let length = arguments.length
    let array = length ? arguments[0] : []
    if (length > 1) {
        for (let i = 1; i < length; i++) {
            array = compare(array, arguments[i])
        }
    }
    return array
}

let ans = difference([1, 2, 3], [1], [3])

console.log(ans)


//lodash

