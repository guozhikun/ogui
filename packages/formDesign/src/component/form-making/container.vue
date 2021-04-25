<template>
  <div class="fm-container">
    <div class="container aside-container">
      <div class="case-title">页面布局</div>
      <draggable tag="ul"
                 v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
                 :list="baseComponents">
        <template v-for="(item,index) in baseComponents">
          <li :key="index">
            <div class="item">
              <i class="icon iconfont"
                 :class="item.icon"></i>
              <span>{{item.name}}</span>
            </div>
          </li>
        </template>
      </draggable>
      <div class="case-title">常用组件</div>
    </div>
    <div class="container center-container">
      <div class="center-tool">
        <el-button icon="el-icon-view"
                   type="text"
                   size="small">预览</el-button>
        <el-button icon="el-icon-refresh"
                   type="text"
                   size="small">重置</el-button>
        <el-button icon="el-icon-download"
                   type="text"
                   size="small">导出代码</el-button>
      </div>
      <widget-form :data="widgetForm"
                   @onSelect="onSelect"
                   :select.sync="widgetFormSelect"></widget-form>

    </div>
    <div class="widget-config-container">
      <el-tabs v-model="activeConfigTab">
        <el-tab-pane label="模块属性"
                     name="first">{{widgetFormSelect}}</el-tab-pane>
        <el-tab-pane label="字段管理"
                     name="second">字段管理</el-tab-pane>
        <el-tab-pane label="页面配置"
                     name="third">页面配置</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
import { baseComponents } from '../../config/components-config'
import widgetForm from "../widget/widget-form"
export default {
  components: {
    Draggable,
    widgetForm
  },
  data () {
    return {
      baseComponents,
      widgetForm: {
        list: [],
        config: {
          labelWidth: 100,
          labelPosition: 'right',
          size: 'default'
        }
      },
      widgetFormSelect: null,
      activeConfigTab: 'first'
    }
  },
  methods: {
    onSelect (item) {
      this.$emit('onSelect', item)
    },
  }

}
</script>
