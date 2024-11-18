<template>
  <div class="header-layout">
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.header-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 20px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: rgb(185, 185, 185);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}

@media (max-width: 768px) {
  .title {
    font-size: 24px;
  }
}
</style>
