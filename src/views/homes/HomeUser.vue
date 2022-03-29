<template>
  <div>
    <div class="div">
    <el-button type="primary" class="addbtn" @click="addfn(1)">
      编辑添加.字段各种规则验证示例
    </el-button>
    <div>
      <div class="demo-input-size ccc">
        <el-input
          placeholder="请输入文章标题"
          suffix-icon="el-icon-date"
          v-model="input1"
          class="www"
        >
        </el-input>
        <el-input
          size=" large"
          placeholder="请选择类型"
          suffix-icon="el-icon-date"
          v-model="input2"
          class="www"
        >
        </el-input>
        <el-tag type="success ">查询</el-tag>
        <el-tag type="warning">重置</el-tag>
      </div>
    </div>
    </div>
    <el-table :data="arrs">
      <el-table-column prop="id" label="文字标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="text" label="浏览量"> </el-table-column>
      <el-table-column prop="title" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑删除 -->
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 增加按钮 -->

    <!-- 弹出 -->
    <el-dialog
      :title="i === 1 ? '添加用户' : '编辑'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="文字标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="浏览量" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="回复" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fnsure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import instance from "../../api/index";
export default {
  name: "HomeIndex",
  data() {
    return {
      arrs: null,
      debouceedit: null, //新业务防抖封装
      deboucedelete: null,
      dialogFormVisible: false, //弹窗的显示和不显示
      form: {
        id: "0",
        name: "张三",
        text: "哈哈哈哈哈哈哈",
      },
      formLabelWidth: "120px",
      i: 0, //区分是否是添加业务 还是修改业务
    };
  },
  methods: {
    addfn(i) {
      // 添加业务
      this.i = i;
      console.log(i);
      this.form.name = "";
      this.form.text = "";
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    fnsure() {
      this.dialogFormVisible = false;
      if (this.i === 1) return this.handleAdd();
      this.editHomeIndex(); //修改业务
    },
    async handleAdd() {
      //添加业务
      let name = this.form.name;
      let text = this.form.text;
      console.log(name, text);
      let { data } = await instance.post("/homeindex", { name, text });
      console.log(data);
      this.getHomeIndex();
    },
    handleEdit(a, b) {
      //用户行为
      console.log(a, b);
      this.i = 0;
      this.dialogFormVisible = !this.dialogFormVisible;
      this.form.name = b.name;
      this.form.text = b.text;
      this.form.id = b.id;
    },
    handleDelete(a, b) {
      //用户行为
      console.log(a, b);

      this.$confirm("您确定删除该条信息么？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //确定的回调函数
          console.log("删除了");
          this.deletehomeindex(a);
        })
        .catch(() => {
          console.log("取消");
        });
    },
    async getHomeIndex() {
      let { data } = await instance.get("/homeindex");
      console.log(data);
      this.arrs = data;
    },
    //删除业务
    async deletehomeindex(index) {
      let { data } = await instance.delete("/homeindex/" + index);
      console.log(data);
      this.getHomeIndex();
    },
  },
  created() {
    this.getHomeIndex();
  },
};
</script>
<style scoped>
.addbtn {
  float: right;
  margin-right: 140px;
  /* margin-top: 40px; */
  width: 300px;
  height: 40px;
}
.www {
  width: 150px;
  height: 40px;
  padding-left: 10px;
}
.div{
  display: flex;
  justify-content: space-between;
}
/* .ccc{
  margin-left: 700px;
} */
</style>