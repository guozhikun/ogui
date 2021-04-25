<template>
  <div class="widget-form-container">
    <div v-if="!data.list.length"
         class="form-empty">从左侧拖拽来添加模块</div>
    <draggable v-model="data.list"
               style="width:100%;height:100%"
               v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget'}"
               @add="handleWidgetAdd">
      <template v-for="(element, index) in data.list">

        <template v-if="element.type === 'container-default'">
          <div style="position:relative;height:100%"
               :key="index">
            <el-container :key="index"
                          :class="{active: selectWidget.type === element.type}"
                          @click.native="handleSelectWidget(index)">
              <el-header>
                <draggable v-model="element.header"
                           @add="handleWidgetAdd"
                           v-bind="{ group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget' }">

                </draggable>
              </el-header>
              <el-main></el-main>
            </el-container>
            <div class="widget-view-action"
                 :key="index"
                 v-if="selectWidget.key === element.key">
              <i class="el-icon-delete"
                 @click.stop="handleWidgetDelete(index)"></i>
            </div>
          </div>
        </template>

        <template v-else-if="element.type === 'container-spacial'">
          <el-container :key="index"
                        :class="{active: selectWidget.type === element.type}"
                        @click.native="handleSelectWidget(index)">
            container-spacial
          </el-container>
        </template>
      </template>

    </draggable>

  </div>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
  name: "widgetForm",
  components: {
    Draggable
  },
  data () {
    return {
      selectWidget: ''
    }
  },
  props: ['data', "select"],
  watch: {
    select (val) {
      this.selectWidget = val
    },
    selectWidget: {
      deep: true,
      handler (val) {
        this.$emit('update:select', val)
      }
    }
  },
  methods: {
    handleSelectWidget (index) {
      this.selectWidget = this.data.list[index]
      this.$emit('onSelect', this.selectWidget)
    },
    handleWidgetAdd (evt) {
      const newIndex = evt.newIndex
      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      this.$set(this.data.list, newIndex, {
        ...this.data.list[newIndex],
        options: {
          ...this.data.list[newIndex].options,
          remoteFunc: 'func_' + key
        },
        isAdd: true,
        key,
        // 绑定键值
        model: this.data.list[newIndex].type + '_' + key,
        rules: []
      })
      this.selectWidget = this.data.list[newIndex]
    },
    handleWidgetDelete (index) {
      const deleted = this.selectWidget
      if (this.data.list.length - 1 === index) {
        if (index === 0) {
          this.selectWidget = {}
        } else {
          this.selectWidget = this.data.list[index - 1]
        }
      } else {
        this.selectWidget = this.data.list[index + 1]
      }
      this.$nextTick(() => {
        this.data.list.splice(index, 1)
        this.$emit('onDelete', deleted, this.selectWidget)
      })
    }
  }
}
</script>

