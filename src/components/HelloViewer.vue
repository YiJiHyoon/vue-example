<template>
  <div class="hello">
    <!-- img tag를 이용한 일반적인 Image 생성. -->
    <header class="logo">
      <img src="../assets/logo.png"/>
    </header>
    <!-- v-viewer를 이용한 Image 생성. -->
    <viewer :images="images">
      <img class="gallary_image" v-for="(item, index) in images" :src="item" :key="index" />
    </viewer>

    button <- images 가 랜덤이 되게 바꿔

    <footer>This is a Footer.</footer>
  </div>
</template>

<script>
export default {
  name:'HelloViewer',
  data() {
    return {
      images: [
        'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/93684/pexels-photo-93684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/35884/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      ]
    }
  }






}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
