<template>
    <div class="tinymce-box">
        <editor v-model="myValue"
                :init="init"
                :disabled="disabled"
                @onClick="onClick">
        </editor>
    </div>
</template>
<script>
    import tinymce from 'tinymce/tinymce' //tinymce默认hidden，不引入不显示
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver'
    // 编辑器插件plugins
    // 更多插件参考：https://www.tiny.cloud/docs/plugins/
    import 'tinymce/plugins/image'// 插入上传图片插件
    import 'tinymce/plugins/media'// 插入视频插件
    import 'tinymce/plugins/table'// 插入表格插件
    import 'tinymce/plugins/lists'// 列表插件
    import 'tinymce/plugins/wordcount'// 字数统计插件
    export default {
        name: "TestEditor",
        components:{
            Editor
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            plugins: {
                type: [String, Array],
                default: 'lists image media table wordcount'
            },
            toolbar: {
                type: [String, Array],
                default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat'
            }
        },
        data(){
            return{
                init: {
                    language_url: 'zh_CN.js',
                    language: 'zh_CN',
                    skin_url: '/tinymce/skins/ui/oxide',
                    // skin_url: 'tinymce/skins/ui/oxide-dark',//暗色系
                    height: 300,
                    plugins: this.plugins,
                    toolbar: this.toolbar,
                    branding: false,
                    menubar: false,
                    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                    }
                },
                myValue: this.value
            }
        },
        mounted () {
            tinymce.init({})
        },
        methods: {
            // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
            // 需要什么事件可以自己增加
            onClick (e) {
                this.$emit('onClick', e, tinymce)
            },
            // 可以添加一些自己的自定义事件，如清空内容
            clear () {
                this.myValue = ''
            }
        },
        watch: {
            value (newValue) {
                this.myValue = newValue
            },
            myValue (newValue) {
                this.$emit('input', newValue)
            }
        }
    }
</script>

<style scoped>

</style>





<!--<template>-->
    <!--<div>-->
        <!--<textarea :id="id"></textarea>-->
        <!--<button class="btn" @click="release">发布文章</button>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--import tinymce from 'tinymce/tinymce'-->
    <!--//这下面是tinymce的插件-->
    <!--import 'tinymce/themes/silver/theme'-->
    <!--import 'tinymce/plugins/image'-->
    <!--import 'tinymce/plugins/link'-->
    <!--import 'tinymce/plugins/code'-->
    <!--import 'tinymce/plugins/table'-->
    <!--import 'tinymce/plugins/lists'-->
    <!--import 'tinymce/plugins/contextmenu'-->
    <!--import 'tinymce/plugins/wordcount'-->
    <!--import 'tinymce/plugins/colorpicker'-->
    <!--import 'tinymce/plugins/textcolor'-->
    <!--//这里写你自己存放语言包的路径-->
    <!--import '../../../public/zh_CN.js'-->
    <!--export default {-->
        <!--name: "TestEditor",-->
        <!--props:{-->
            <!--id:String-->
        <!--},-->
        <!--data () {-->
            <!--return {-->
                <!--init:{-->
                    <!--selector: '#'+this.id,-->
                    <!--language: 'zh_CN',-->
                    <!--skin_url: 'tinymce/skins/ui/oxide',-->
                    <!--height: 500,-->
                    <!--//插件-->
                    <!--plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',-->
                    <!--//工具栏-->
                    <!--toolbar:-->
                        <!--'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',-->
                    <!--//隐藏tinymce的标识-->
                    <!--branding: false,-->
                <!--}-->
            <!--};-->
        <!--},-->
        <!--methods:{-->
            <!--release(){-->
                <!--//content 是文本内容-->
                <!--let content = tinymce.get(this.id).getContent()-->
                <!--this.$emit('release',content)-->
            <!--}-->
        <!--},-->
        <!--mounted () {-->
            <!--//配置的初始化-->
            <!--tinymce.init(this.init)-->
        <!--},-->
        <!--beforeDestroy() {-->
            <!--//销毁-->
            <!--tinymce.get(this.id).destroy();-->
        <!--},-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
