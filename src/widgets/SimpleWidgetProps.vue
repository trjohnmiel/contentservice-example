<template lang="pug">
  .c-property-element(:class="propertyClass")
    .tt-property-header(@click="setExpandedElement")
        | Test Header

    // Transition is for animation only and can be removed if not needed
    transition(name="c-property-list-transition")
      .c-element-properties(v-show="isExpandedElement")
        .tt-property
            .c-property-label Class
            .c-property-value
              input.input(v-model="clas")
        .tt-property
            .c-property-label Style
            .c-property-value
              input.input(v-model="style")
        .tt-property
            .c-property-label Sample
            .c-property-value
              input.input(v-model="sample")
        .tt-property
            .c-property-label New Property
            .c-property-value
              input.input(v-model="prop")
        // Use this template to define a new property you want to add,
        // and create matching getter/setter as a computed field, similar
        // to those for clas and style.
        //- .tt-property
        //-   .c-property-label <<NameOfProperty>>
        //-   .c-property-value
        //-     input.input(v-model="<<TargetModel>>")
</template>

<script>
import PropertyMixins from 'vue-contentservice/src/mixins/PropertyMixins'

export default {
  name: 'simple-widget', // Rename this to the name of your Widget
  mixins: [ PropertyMixins ],
  computed: {

    // We cannot update the element directly - it must be updated
    // with this.$content.setProperty( ).
    clas: {
      get () {
          let value = this.element['class']
          return value ? value : ''
      },
      set (value) {
          this.$content.setProperty({ vm: this, element: this.element, name: 'class', value })
      }
    },
    style: {
      get () {
          let value = this.element['style']
          return value ? value : ''
      },
      set (value) {
          this.$content.setProperty({ vm: this, element: this.element, name: 'style', value })
      }
    },

    sample: {
      get () {
          let value = this.element['sample']
          return value ? value : ''
      },
      set (value) {
          this.$content.setProperty({ vm: this, element: this.element, name: 'sample', value })
      }
    },
    prop: {
      get () {
          let value = this.element['prop']
          return value ? value : ''
      },
      set (value) {
          this.$content.setProperty({ vm: this, element: this.element, name: 'prop', value })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.c-property-value {
    input.input {
    margin-top: 2px;
    font-size: 9px;
    }
}
</style>