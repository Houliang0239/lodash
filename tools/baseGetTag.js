/**
 * 获取数据类型
 */

const objectPrototype = Object.prototype
const toString = objectPrototype.toString
const hasOwnProperty = objectPrototype.hasOwnProperty
const symbolToStringTag = typeof Symbol == 'undefined' ? undefined : Symbol.toStringTag

 function baseGetTag(value){
    if(value == null || value == undefined){
        return value == undefined ? '[object Undefined]' : '[object Null]'
    }
    if(!(symbolToStringTag && symbolToStringTag in Object(value))){
        return toString.call(value)
    }
    if(symbolToStringTag){
        
    }
}

 const value = 1
 console.log(baseGetTag(value))
//  export default baseGetTag