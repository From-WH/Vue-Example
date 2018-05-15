let view = new Vue({
    el:"#app",
    data:{
        transformValue:''
    },
    //模块：
    template:`
    <div class="main">
        <div class="window">
            <div class="side" v-bind:style="{transform:transformValue}"></div>
        </div>
        <button v-on:click="go(0)">1</button>
        <button v-on:click="go(1)">2</button>
        <button v-on:click="go(2)">3</button>
    </div>
    `,
    //方法：
    methods:{
        go(index){
            this.transformValue = `translateX(${-100*index}px)`
        }
    }
})