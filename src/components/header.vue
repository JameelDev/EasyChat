<template>
    <div class="layout">
        <div class="title">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true }
    }
}
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    .title {
        font-size: 30px;
    }
}
</style>