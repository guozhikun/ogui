import OgButton from "./src/button.vue";

OgButton.install = function (Vue) {
  Vue.component(OgButton.name, OgButton)
}

export default OgButton