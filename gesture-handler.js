AFRAME.registerComponent('gesture-handler', {
    init: function () {
      const el = this.el;
  
      el.addEventListener('onefingerstart', function (evt) {
        console.log('One finger start');
      });
  
      el.addEventListener('onefingerend', function (evt) {
        console.log('One finger end');
      });
    }
  });
  