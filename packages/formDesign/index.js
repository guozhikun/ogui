import FormDesign from "./src/index.vue";
import './src/style/index.less'

FormDesign.install = function (Vue) {
  Vue.component(FormDesign.name, FormDesign)
}

export default FormDesign