<template>
<button>
    <slot>Default</slot>
</button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.default {
    padding: 5px 10px;
    background: orange;
    color: #fff;
    border: none;

}

.primary {
    padding: 5px 10px;
    background: blue;
    color: #fff;
    border: none;
}

.black {
    padding: 5px 10px;
    background: black;
    color: #fff;
    border: none;
}
</style>
