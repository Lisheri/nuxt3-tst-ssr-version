<script lang='tsx'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Main',
  setup() {
    return () => <el-container>
      <el-header>标题</el-header>
      <el-button>按钮测试</el-button>
    </el-container>
  }
})
</script>
<style lang='scss' scoped>
</style>
