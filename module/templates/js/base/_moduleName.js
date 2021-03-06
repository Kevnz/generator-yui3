/**
*
* @module <%= name %>
*/

/**
* <%= _.capitalize(name) %>
*
* @class <%= _.capitalize(_.camelize(name)) %>
<% if (namespace) { %>* @namespace  <%= _.capitalize(_.camelize(namespace)) %>
*/<% } else { %>*/<% } %>

var <%= _.capitalize(_.camelize(name)) %> = Y.Base.create("<%= name %>", Y.Base, [], {
   /**
    * @method initializer
    *
    */
   initializer: function() {},
   /**
    * @method destructor
    *
    */
   destructor: function() {}
},
{
   // ATTRS : {}
});


<%= "Y." + _.capitalize(_.camelize(name)) %> = <%= _.capitalize(_.camelize(name)) %>;
