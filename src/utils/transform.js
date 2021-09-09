let snake = 'hello_world_xyz'
let hump = 'helloWorld'

// 蛇转驼峰
function snakeChange (str) {
    let map = str.split('_').map((res,index)=>{
        if (index !== 0) {
            return res[0].toUpperCase() + res.slice(1)
        }else {
            return res
        }
    })
    return map.join('')
}

console.log(snakeChange(snake));

// 驼峰转蛇
function humpChange (str) {
    let strs = ''
    str.split('').forEach((res)=>{
        if (res === res.toUpperCase()) {
            strs += '_' + res.toLowerCase()
        }else {
            strs += res
        }
    })
    return strs
}

console.log(humpChange(hump));