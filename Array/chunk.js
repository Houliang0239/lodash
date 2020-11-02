/**
 * @param {Array} array
 * @param {Number} [size = 1]
 * 
 * Target: 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 */

function chunk(array, size = 1) {
    let length = array.length

    if (length == 0) return []

    if (length <= size) return [array]

    let maxSize = Math.ceil(length / size)
    let newIndex = 0
    let result = []
    while (newIndex < maxSize) {
        result[newIndex] = array.slice(newIndex * size, (++newIndex) * size)
    }
    return result
}


let test_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let test_size = 3
const ans = chunk(test_array, test_size)
console.log(ans)

/**
 * lodash版本
 */

import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)   //对size参数异常的处理，预先对负数情况，非整数情况做了处理
  const length = array == null ? 0 : array.length   //对array参数异常的处理
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))   //预先创建了一个固定长度的数组

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk