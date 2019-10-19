<template>
    <div class="home">
        <TestEditor
                ref="editor"
                v-model="msg"
                :disabled="disabled"
                @onClick="onClick"/>
        <button @click="publish">发布</button>
        <button @click="clear">清空内容</button>
        <button @click="disabled = true">禁用</button>

        <div v-html="msg">
        </div>
    </div>

</template>

<script>

    import TestEditor from "./TestEditor";

    export default {
        name: "Test",
        components: {TestEditor},
        data() {
            return {
                msg: 'Welcome to Use Tinymce Editor',
                disabled: false
            }
        },
        methods: {
            publish() {
                console.log(this.msg)
            },
            // 鼠标单击的事件
            onClick(e, editor) {
                console.log('Element clicked')
                console.log(e)
                console.log(editor)
            },
            // 清空内容
            clear() {
                this.$refs.editor.clear()
            }
        }
    }
</script>

<style scoped>

</style>


<!--<template>-->
<!--<TestEditor id="tinymce" @release="release"> </TestEditor>-->
<!--</template>-->

<!--<script>-->

<!--import TestEditor from "./TestEditor";-->
<!--export default {-->
<!--name: "Test",-->
<!--components: {TestEditor},-->
<!--data () {-->
<!--return {-->

<!--};-->
<!--},-->
<!--methods:{-->
<!--release(content){-->
<!--console.log(content);-->
<!--}-->
<!--},-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
