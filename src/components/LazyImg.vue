<template>
  <div class="lazy-img">
    <div class="my-img" v-for="item in 6" :key="item">
      <img src="" alt="" data-src="./src/assets/yyy.png" class="photo">
    </div>
  </div>
</template>

<script>

export default {
  name: "LazyImg",
  setup () {
    window.onload = () =>{
      // 加载时判断一次
      imgLoad()
      window.onscroll = ()=> {
        imgLoad()
      }
    }
    // 加载图片
    function imgLoad () {
      // 获取所有的图片
      [...document.querySelectorAll('.photo')].forEach((item)=>{
        // 判断当前图片是否在当前视口
        if (isOnScreen(item)) {
          // 拿到data-src上的地址赋值给src
          setImgSrc(item)
        }
      })
    }
    // 判断图片的位置是否在当前视口
    function isOnScreen (el) {
      let elementClient = el.getBoundingClientRect()
      return elementClient.top <= window.innerHeight
    }
    // 拿到data-src上的地址赋值给src
    function setImgSrc (el) {
      if (el.src) {
        let mySrc = el.dataset.src
        el.src = mySrc
      }
    }
  }
}
</script>

<style scoped lang="scss">
.lazy-img {
  .my-img {
    width: 500px;
    height: 300px;
    margin-bottom: 100px;
    .photo {
      width: 100%;
      height: 100%;
    }
  }
}
</style>