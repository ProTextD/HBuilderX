export default  {
    template:`
    <div>
      <h2 v-show="isActive">{{message}}</h2>
      <button @click="toggle()">按钮</button>
    </div>
    `,
    data(){
      return{
        message:'hello Vue , helloWorld',
        isActive : true
      }
    },
    methods:{
      toggle(){
        this.isActive = !this.isActive
      }
    }
  }
