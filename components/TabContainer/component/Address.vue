<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Address",
  setup() {
    const searchResult = ref<any[]>([]);
    const showToast = (msg: string) => {
      (window as any).vant.showToast(msg);
    };

    const onSave = () => showToast("save");
    const onDelete = () => showToast("delete");
    const onChangeDetail = (val) => {
      if (val) {
        searchResult.value = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        searchResult.value = [];
      }
    };
    const areaList = ref([]);
    return () => (
      <van-address-edit
        area-list={areaList.value}
        show-delete
        show-set-default
        show-search-result
        search-result={searchResult}
        area-columns-placeholder={["请选择", "请选择", "请选择"]}
        onSave={onSave}
        onDelete={onDelete}
        onChange-detail={onChangeDetail}
      />
    );
  }
});
</script>
<style lang="scss" scoped></style>
