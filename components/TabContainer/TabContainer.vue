<script lang="tsx">
import { defineComponent } from "vue";
import Address from "./component/Address.vue";
import ArresssList from "./component/ArresssList.vue";
import ContactList from './component/ContactList.vue';

export default defineComponent({
  name: "TabContainer",
  setup() {
    const activeName = ref("a");
    return () => (
      <van-tabs v-model:active={activeName.value}>
        <van-tab title="标签 1" name="a">
          <Address />
        </van-tab>
        <van-tab title="标签 2" name="b">
          <ArresssList />
        </van-tab>
        <van-tab title="标签 3" name="c">
          <ContactList />
        </van-tab>
      </van-tabs>
    );
  }
});
</script>
<style lang="scss" scoped></style>
