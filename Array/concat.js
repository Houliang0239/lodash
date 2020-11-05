// Tools func
/**
 * 
 * @param {*} array 
 */
function isArray(array) {
    return Object.prototype.toString.call(array) == "[object Array]"
}
/**
 * 拷贝一个数组
 * @param {*} source 
 */
function copyArray(source) {
    let length = source.length
    let index = -1
    let array = []
    while (++index < length) {
        array[index] = source[index]
    }
    return array
}
/**
 * 数组扁平化
 * @param {*} array 
 * @param {*} depth 
 * @param {*} predicate 
 * @param {*} isStrict 
 * @param {*} result 
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
                arrayPush(result, value);
            }
        } else if (!isStrict) {
            result[result.length] = value;
        }
    }
    return result;
}

/**
 * 
 * @param {Array} array 
 * @param {*} values 
 * 将两个数组合并为一个，利用末尾拼接的方式
 */
function arrayPush(array, values) {
    let index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}

function concat() {
    let length = arguments.length;
    console.log(arguments)
    if (!length) {
        return [];
    }
    var args = Array(length - 1),
        array = arguments[0],
        index = length;

    while (index--) {
        args[index - 1] = arguments[index];
    }
    //拼接数组，如果第一个是数组就返回这个数组的拷贝，如果不是就变成数组，
    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

let test_array = [1]

let ans = concat(test_array, [2], [
    [3]
])