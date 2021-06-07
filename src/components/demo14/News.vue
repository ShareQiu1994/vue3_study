<template>
<div class="home">
    <button @click="getData()">Axios获取数据</button>
    <br>
    <hr>
    <br>
    <ul>
        <li v-for="(item,index) in list" :key="index">{{item.title}}-{{item.aid}}</li>
    </ul>

</div>
</template>

<script>
export default {
  data () {
    return {
      list: []

    }
  },
  methods: {
    getData () {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
      this.Axios.get(api).then((response) => {
        console.log(response.data.result)
        this.list = response.data.result
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    // this.Storage.set("usrename", "zhangsan 111")
    // alert(this.Storage.get("usrename"))
  }

}
</script>

<style lang="scss">
.home {
    padding: 20px;
}
</style>
