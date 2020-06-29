<template lang="pug">
  .c-content-simplewidget(:class="editModeClass")
    span(v-if="extraDebug")
      | &lt;simple-widget&gt;
      br

    // For Design and Editing mode display
    // These modes can be separated
    template(v-if="isDesignMode || isEditMode")
      div(v-on:click.stop="select(element)")
        // This element contains the useful icons and functionalities
        // such as remove, copy, and download
        .c-layout-mode-heading
          edit-bar-icons(:element="element")
          | Newspaper

      // Any html that you want to display in Design and Edit mode can go
      // here. Your widget properties may be accessed by creating a computed
      // 'getter'. See the 'style' computed property for an example.
      div(:class="myClass", :style="myStyle", @click.stop="selectThisElement")
        | Hello world, this is a simple widget on editing/designing mode {{element.prop}}

    // For View (Live) mode display
    template(v-else)
      // This is the actual implementation of the widget
      // - what you want to display to the user
      .simple-widget(:class="myClass", :style="myStyle")
        | Hello world, this is a simple widget on editing/designing mode {{element.style}}
</template>

<script>
import ContentMixins from 'vue-contentservice/src/mixins/ContentMixins'
import CutAndPasteMixins from 'vue-contentservice/src/mixins/CutAndPasteMixins'

export default {
  name: 'simple-widget',
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  mixins: [ ContentMixins, CutAndPasteMixins ],
  data: function () {
    return {
    }
  },
  computed: {
    style: {
      get () {
        let value = this.element['style']
        return value ? value : ''
      }
    },

    myClass: function () {
      if (this.element.placeholder && this.element.placeholder.startsWith('tEntryTime')) {
        console.log(`inputClass()`, this.element);
      }

      var obj = { }
      let classesForElement = this.element['class']
      if (classesForElement) {
        // console.log(`classesForElement=${classesForElement}`);
        classesForElement.split(' ').forEach(clas => {
          let classname = clas.trim()
          if (classname) {
              obj[classname] = true
          }
        })
      } else {
        obj['branding-logo-default'] = true
      }
      console.log('obj', obj);
      return obj
    },

    myStyle: function () {
      let style = this.element['style'] + ';'
      // width
      try {
        let num = parseInt(this.element['width'])
        if (num >= 20) {
          style += `width:${num}px;`
        }
      } catch (e) { console.log(e) }

      // height
      try {
        let num = parseInt(this.element['height'])
        if (num >= 20) {
          style += `height:${num}px;`
        }
      } catch (e) { console.log(e) }
      console.log('style', style);
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
</style>