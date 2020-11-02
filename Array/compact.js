/**
 * @param {Array} array
 * 
 * Target: 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”
 */

function compact(array) {
    const result = []
    if (array == null || array == undefined) {
        return result
    }
    if (array instanceof Array) {
        for (let value in array){
            console.log(array[value])
            if(array[value]){
                result.push(array[value])
            }
        }
        return result
    } else {
        throw new Error("please pass Array on to 'compact'")
    }
}


let test_array = [1, '1', 0, '-1', null, undefined, '', NaN, false]
let ans = compact(test_array)
console.log(ans)


// lodash 

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact(array) {
    let resIndex = 0  // 这里经过测试，千万级的数据下，利用数组下标的方式直接赋值的效率是要超过arrayrouter.push()方法
    const result = []
  
    if (array == null) {
      return result
    }
  
    for (const value of array) {
      if (value) {
        result[resIndex++] = value
      }
    }
    return result
  }
  
  export default compact