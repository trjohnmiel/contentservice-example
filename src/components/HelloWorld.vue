<template>
  <div id="app">
    <content-layout-editor
      :pageEditMode="pageEditMode"
      :editable="editable"
      :contentId="contentId"
    >
    </content-layout-editor>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  created: function() {
   
  },
  data: function() {
    return {
      pageEditMode: "layout",
      editable: true,
      contentId: "test",
    };
  },
};
</script>
