<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" id="txtName" v-model="formdata.name" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formdata.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- prevent 阻止默认行为的执行 -->
      <button class="btn btn-success" @click.prevent="updata()">提交</button>
    </form>
  </div>
</template>

<script>

export default {
  props:['id'],
  data(){
    return{
      formdata:{
        name:'',
        gender:''
      }
    }
  },
  mounted(){
    this.readedit()
  },
  methods:{
    readedit(){
      
      this.axios
      .get(`heroes/${this.id}`)
      .then((res)=>{
        
        if(res.status==200){
          this.formdata.name=res.data.name
          this.formdata.gender=res.data.gender
        }
      })
      
    },
    updata(){
      this.axios
      .put(`heroes/${this.id}`,this.formdata)
      .then((res)=>{
        if(res.status==200){
          this.$router.push('/hero')
        }
        
      })
    }
    
  }
  
}
</script>

<style>
</style>
