import OgButton from "./button/index.js"
import FormDesign from "./formDesign/index.js"
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Icon, Form, FormItem, Input, Container, Header, Main, Tabs, TabPane } from 'element-ui'

const components = [
  OgButton,
  FormDesign
]
const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.use(Button)
  Vue.use(Icon)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Input)
  Vue.use(Container)
  Vue.use(Header)
  Vue.use(Main)
  Vue.use(Tabs)
  Vue.use(TabPane)

  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  OgButton,
  FormDesign
}