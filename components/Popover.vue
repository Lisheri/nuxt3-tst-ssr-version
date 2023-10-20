<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Popover",
  setup() {
    const showPopover = ref(false);

    // 通过 actions 属性来定义菜单选项
    const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];
    const onSelect = (action) => (window as any).vant.showToast(action.text);
    return () => (
      <van-popover
        v-model:show={showPopover.value}
        actions={actions}
        select={onSelect}
        v-slots={{
          reference: () => <van-button type="primary">浅色风格</van-button>
        }}
      ></van-popover>
    );
  }
});
</script>
<style lang="scss" scoped></style>
