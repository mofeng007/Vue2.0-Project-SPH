<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo',pageNo - 1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>

    <!-- 中间部分 -->
    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-if="page >= startNumAndEndNum.start"
      @click="$emit('getPageNo',page)"
      :class="{active:pageNo==page}"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage" @click="$emit('getPageNo',totalPage)" :class="{active:pageNo==totalPage}">{{ totalPage }}</button>
    <button  :disabled="pageNo == totalPage" @click="$emit('getPageNo',pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  // pageNo（当前页码）、pageSize(每页展示多少数据)、
  // total(一共多少数据)、continues（连续展示的页码）
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总共多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },

    //计算连续页码起始数字于结束数字，eg：当前页数为8，那么起始为7.结束为9
    startNumAndEndNum() {
      const { pageNo, continues, pageSize, total, totalPage } = this;
      let start = 1,
        end = 1;
      //   连续页码数字（至少5页），如果不够
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // 正常现象
        // 起始数字
        start = pageNo - parseInt(continues / 2);
        // 结束数字
        end = pageNo + parseInt(continues / 2);
        // 异常情况，start出现负数、0
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 异常情况，end出现大于totalPage的情况
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
        return { end, start };
      }
      return { end, start };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active{
  background: skyblue;
}
</style>
