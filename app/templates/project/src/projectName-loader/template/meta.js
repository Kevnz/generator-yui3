/* This file is auto-generated by src/<%= projectName %>-loader/scripts/meta_join.js */

YUI().use(function(Y) {
   var CONFIG = {
      groups: {
         '<%= projectName %>': {
            base: '<%= projectName %>/src/',
            combine: false,
            modules: { /* METAGEN */ }
         }
      }
   };

   /*if (typeof YUI_config === 'undefined') {
      YUI_config = {groups: {}};
   }*/
   if (typeof YUI_config.groups === 'undefined') {
      YUI_config.groups = {};
   }
   Y.mix(YUI_config.groups, CONFIG.groups);
});

