<template>
    <div>
        Home组件--{{title}}

        <br>
        <button @click="setTitle">改变title</button>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
let title:string="我是一个home组件";
export default defineComponent({
    data(){
        return{
            title,
            userinfo:{
                username:"张三"
            },
            age:20,
            sex:"男"
        }
    },methods:{
        setTitle():void{
            this.title="this is title"
        }
    }

})
</script>

<style lang="scss">
//cnpm install -D sass-loader node-sass

    
</style>