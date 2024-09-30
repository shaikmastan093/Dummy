AFRAME.registerComponent('gesture-detector', {
    schema: {
      element: { default: '' }
    },
  
    init: function () {
      this.targetElement = this.data.element && document.querySelector(this.data.element) || this.el;
  
      this.internalState = {
        previousState: null,
        fingers: 0
      };
  
      this.emitGestureEvent = this.emitGestureEvent.bind(this);
  
      this.targetElement.addEventListener('touchstart', this.emitGestureEvent);
      this.targetElement.addEventListener('touchend', this.emitGestureEvent);
      this.targetElement.addEventListener('touchmove', this.emitGestureEvent);
    },
  
    remove: function () {
      this.targetElement.removeEventListener('touchstart', this.emitGestureEvent);
      this.targetElement.removeEventListener('touchend', this.emitGestureEvent);
      this.targetElement.removeEventListener('touchmove', this.emitGestureEvent);
    },
  
    emitGestureEvent: function (event) {
      const currentFingers = event.touches.length;
      const previousFingers = this.internalState.fingers;
  
      if (currentFingers !== previousFingers) {
        if (currentFingers === 1 && previousFingers === 0) {
          this.el.emit('onefingerstart');
        } else if (currentFingers === 0 && previousFingers === 1) {
          this.el.emit('onefingerend');
        }
      }
  
      this.internalState.fingers = currentFingers;
    }
  });
  