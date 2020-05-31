<template>
  <div id="app">
      <content-layout-editor :pageEditMode="pageEditMode" :editable="editable" :contentId="contentId">
      </content-layout-editor>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created: function (){
    // Toggle between view and {edit|layout|debug}
    this.$content.setEditMode({ mode: 'layout'})
  },
  data: function () {
    return {
      pageEditMode: "layout",
      editable: true,
      contentId: 'contentservice.example.layout',
    }
  }
}
</script>