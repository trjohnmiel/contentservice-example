<template>

</template>

<script>
export default {
  name: 'HelloWorld',
  created: function (){
    // Toggle between view and {edit|layout|debug}
    this.$content.setEditMode({ mode: 'layout'})
  },
  data: function () {
   
  }
}
</script>