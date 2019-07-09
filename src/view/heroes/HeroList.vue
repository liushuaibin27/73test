<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    
    <router-link class="btn btn-success" to="/hero/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="javascript:window.confirm('Are you sure?')"  @click="del(item.id)">删除</a>
              &nbsp;&nbsp;
              <router-link :to="'/hero/edit/' + item.id">修改</router-link>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  data(){
    return{
      list:[],
      id:''
    }
  },
  mounted(){
    this.readdata()
  },
  methods:{
    readdata(){
      axios
      .get('http://localhost:3000/heroes')
      .then((res)=>{
        if(res.status==200){
          this.list=res.data
        }
      })
    },
    del(id){
      axios
      .delete(`http://localhost:3000/heroes/${id}`)
      .then((res)=>{
        

          if(res.status==200){
            this.readdata()
          }else{
            alert('删除失败')
          }
       
      })
    },
    edit(id){
      axios
      .put(`http://localhost:3000/heroes/${id}`)
      .then((res)=>{
        console.log(res)
      })
    }
  }
};
</script>
 
<style>
</style>