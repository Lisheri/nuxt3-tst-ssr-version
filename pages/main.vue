<script lang="tsx">
import { defineComponent } from "vue";
import Section from "~/components/Section.vue";
import Popover from "~/components/Popover.vue";
import TabContainer from "~/components/TabContainer/TabContainer.vue";

export default defineComponent({
  name: "Main",
  setup() {
    const username = ref("");
    const password = ref("");
    const onSubmit = (values) => {
      console.log("submit", values);
    };
    const valueRef = ref("");
    const onInput = (newVal: any) => {
      const prevVal = valueRef.value;
      valueRef.value = newVal;
      if (newVal.length > 11) {
        valueRef.value = prevVal;
      }
    };
    const offset = ref({ x: 200, y: 400 });
    const loading = ref(false);
    const count = ref(0);
    const onRefresh = () => {
      setTimeout(() => {
        (window as any).vant.showToast("刷新成功");
        loading.value = false;
        count.value++;
      }, 1000);
    };
    return () => (
      <van-pull-refresh v-model={loading.value} onRefresh={onRefresh} style={{ height: "100vh", overflow: 'auto' }}>
        {/* <p>刷新次数: {count.value}</p> */}
        <van-form onSubmit={onSubmit}>
          <van-cell-group inset>
            <van-field
              v-model={username.value}
              name="用户名"
              label="用户名"
              placeholder="用户名"
              rules={[{ required: true, message: "请填写用户名" }]}
            />
            <van-field
              v-model={password.value}
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              rules={[{ required: true, message: "请填写密码" }]}
            />
          </van-cell-group>
          <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
        <van-divider />
        <Section />
        <van-divider />
        <Popover />
        <van-cell-group inset>
          <van-field model-value={valueRef.value} label="文本" onUpdate:model-value={onInput} />
        </van-cell-group>
        <van-floating-bubble v-model:offset={offset.value} axis="xy" icon="chat" />
        <TabContainer />
      </van-pull-refresh>
    );
  }
});
</script>
<style lang="scss" scoped></style>
