var Home={
    template:`
    <div class="ui container">
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">首页</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">新闻条目</p>
                 </div>
                 <div class="ui segment">
                    <p class=" ui brown header">新闻条目</p>                                  
                 </div>
                  <div class="ui segment">
                    <p class=" ui brown header">新闻条目</p>                                  
                 </div>         
             </div>
              <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">视频</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">视频</p>
                 </div>
                 <div id="segmen" class="ui segment">                    
                    <h1>视频内容</h1>                   
                 </div>
             </div>
        </div>
        
    `

}
var City={
    template:`
    <div class="ui container">
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">新闻</font> </h3>
             <div class="ui segments ">              
                 <div class="ui segment"> 
                 <p class=" ui brown header">新闻条目</p>                                                     
                 </div>
                 <div class="ui segment"> 
                 <p class=" ui brown header">新闻条目</p>                                                     
                 </div>
                 <div class="ui segment"> 
                 <p class=" ui brown header">新闻条目</p>                                                     
                 </div>
             </div>
        </div>
    `
}
var Town={
    template:`
    <div class="ui container">
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">视频</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">视频</p>
                 </div>
                 <div id="segmen" class="ui segment">                    
                    <h1>视频内容</h1>                   
                 </div>
             </div>
        </div>
    `
}
var routes=[
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/city',
        component:City,
    },
    {
        path:'/town',
        component:Town,
    },
]
var router=new VueRouter({
    //routes:routes 两者一样
    routes
})

// 定义一个Vue实例
// 添加Vuerouter
var vm = new Vue({
    el:"#app",
    router
})