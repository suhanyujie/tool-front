<template>
    <Menu name="menu-1" active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="turnToPage">
        <Submenu name="1" @on-select="turnToPage">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                工具集合
            </template>
            <MenuItem name="toolImageService">图片服务</MenuItem>
            <MenuItem name="toolImage2">Option 2</MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
    export default {
        name: "side-menu",
        methods: {
            turnToPage (name) {
                this.$emit('on-select', name)
            }
        }
    }
</script>

<style scoped>

</style>