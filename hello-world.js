var monProto = Object.create(HTMLElement.prototype, {
  createdCallback: { 
    value: function() {
      var monTexte = document.createTextNode("Hello world!"); 
      this.appendChild(monTexte);
    }
  }
});
document.registerElement('hello-world', {
  prototype: monProto
});