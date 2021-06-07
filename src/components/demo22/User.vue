<template>
    <div>
       User组件
       <br>
       username={{username}}
       <br>
       <br>
       <button @click="setUsername('旺旺')">改变username</button>
        <br>
        <br>
        {{getUsername()}}
        <br>
        <br>
        count={{count}}
        <br>
        <br>
        计算属性：{{reverseUsername}}
    </div>
</template>

<script lang="ts">

import { defineComponent, reactive, toRefs,ref, computed} from 'vue';

interface User{
    username:string,
    age:number|string,
    setUsername(username:string):void,
    getUsername():string
}

export default defineComponent({
   
    setup(){
        //1、实现接口的第一种写法
        // let user:User=reactive({
        //     username:"张三",
        //     age:"20",
        //     setUsername(username:string){
        //         this.username=username
        //     },
        //     getUsername(){
        //         return this.username
        //     }
        // })

        //2、实现接口的第二种写法

        //   let user=reactive<User>({
        //     username:"张三",
        //     age:"20",
        //     setUsername(username:string){
        //         this.username=username
        //     },
        //     getUsername(){
        //         return this.username
        //     }
        // })

         //3、实现接口的第三种写法

        let user=reactive({
            username:"张三",
            age:"20",
            setUsername(username:string){
                this.username=username
            },
            getUsername():string{
                return this.username
            }
        }) as User

        let count=ref<number|string>("20")
        // let num:string=ref("20")

      

        let reverseUsername=computed(():string=>{
            return user.username.split("").reverse().join("")
        })
        
        return{
            ...toRefs(user),
            count,
            reverseUsername
        }
    }
})
</script>

<style lang="scss">
//cnpm install -D sass-loader node-sass

    
</style>