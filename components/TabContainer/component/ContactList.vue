<script lang="tsx">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "ContactList",
  setup() {
    const showToast = (msg: string) => {
      (window as any).vant.showToast(msg);
    };
    const chosenContactId = ref("1");
    const list = ref([
      {
        id: "1",
        name: "张三",
        tel: "13000000000",
        isDefault: true
      },
      {
        id: "2",
        name: "李四",
        tel: "1310000000"
      }
    ]);

    const onAdd = () => showToast("新增");
    const onEdit = (contact) => showToast("编辑" + contact.id);
    const onSelect = (contact) => showToast("选择" + contact.id);
    return () => (
      <van-contact-list
        v-model={chosenContactId.value}
        list={list.value}
        default-tag-text="默认"
        onAdd={onAdd}
        onEdit={onEdit}
        onSelect={onSelect}
      />
    );
  }
});
</script>
<style lang="scss" scoped></style>
