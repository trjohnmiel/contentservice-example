<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
// import Newsfeed from "./components/Newsfeed";
import HelloWorld from './components/HelloWorld';
import Vue from 'vue';
import SimpleWidget from './widgets/SimpleWidget';
import SimpleWidgetProps from './widgets/SimpleWidgetProps';

export default {
  name: "App",
  components: {
    HelloWorld
    // Newsfeed
  },
  created: function() {
    // Toggle between view and {edit|layout|debug}
    this.$content.setEditMode({ mode: "layout" });

    this.$content.registerWidget(Vue, {
      name: "simpleWidget",
      label: "Simple Widget",
      category: "",
      iconClass: "fa-arrows-h", // This can be customised
      iconClass5: "fas fa-arrows-alt-h", // This can be customised
      dragtype: "component",

      // Register native Vue templates
      componentName: "content-simplewidget",
      component: SimpleWidget,
      propertyComponent: SimpleWidgetProps,

      // Identical structure to a CUT or COPY from edit mode.
      data: {
        type: "contentservice.io",
        version: "1.0",
        source: "toolbox",
        layout: {
          type: "simpleWidget",
          label: "Simple Widget",
          children: [],
        },
      },
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
