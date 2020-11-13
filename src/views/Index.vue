<template>
  <div>
    <div>首页</div>
    <mt-button type="primary" size="large" @click="flower">鲜花预定</mt-button>
  </div>
</template>

<script>
export default {
  methods: {
    flower() {
      this.$router.push("/flower");
    },
  },
};
</script>

<style>
</style>