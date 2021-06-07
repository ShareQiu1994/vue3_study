<template>
    <div>
       News组件--{{title}}

       <br>
       <br>
       count={{count}}

       <br>
       <br>
       <button @click="setCount">改变Count</button>
       <br>
       <br>

        <br>
       <br>
       <button @click="setTitle(123)">改变Title</button>
       <br>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
//data数据的接口
interface News{
    title:string,
    description:string,
    count:number|string,
    content?:string
}
let newsData={
    title:"我是一个新闻",
    description:"我是一个新闻的描述",
    count:12
} as News

export default defineComponent({
    data(){
        return newsData
    },methods:{
        setCount():void{
          this.count="1236"
        },
        setTitle(title:string):void{
            this.title=title;
        }
    },computed:{
        reverseTitle():string{
            return this.title.split("").reverse().join("")
        }
    },mounted(){
        this.setTitle("我是生命周期函数改变的title")
    }

})
</script>

<style lang="scss">
//cnpm install -D sass-loader node-sass

    
</style>