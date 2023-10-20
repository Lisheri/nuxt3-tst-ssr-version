<script lang="tsx">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return () => (
      <van-swipe-cell>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          v-slots={{
            right: () => <van-button square text="删除" type="danger" class="delete-button" />
          }}
        />
      </van-swipe-cell>
    );
  }
});
</script>
<style lang="scss" scoped></style>
