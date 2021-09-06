<template>
  <div>
    <div class="myDiv" ref="myDiv">
      <div v-for="(item,index) in arr" :key="index">{{ item }}</div>
    </div>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import {ref, onMounted, reactive} from "vue";

export default {
  name: "Mutation",
  setup () {
    const myDiv = ref(null)
    let index = ref(2)
    function change (a,b) {
      console.log(a, b);
    }
    onMounted(()=>{
      let Mutation = new MutationObserver(change)
      Mutation.observe(myDiv.value, {
        attributes: true,
        addedNode: true,
        childList: true,
        characterData: true
      })
    })
    let arr = reactive([1])
    function add () {
      arr.push(index.value++)
    }
    return {
      myDiv,
      arr,
      add
    }
  }
}
</script>

<style scoped>

</style>