// 定义全局的变量来保存开启的定时器
let timer;
function mySetInterval() {
    function fn () {
        console.log(new Date());
        timer = setTimeout(()=> {
            fn()
        }, 1000)
    }
    timer = setTimeout(fn)
}

mySetInterval()
setTimeout(()=>{
    clearTimeout(timer)
}, 2000)