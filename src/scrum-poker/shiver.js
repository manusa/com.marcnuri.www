import defaults from 'lodash/defaults';

const shiver = (callback, options = {}) => {
  const lastRecording = {
    x: null,
    y: null,
    z: null,
    time: new Date()
  };
  defaults(options, {
    threshold: 15,
    timeout: 400
  });
  const onDeviceMotion = event => {
    const {threshold, timeout} = options;
    const {x: lastX, y: lastY, z: lastZ, time: lastTime} = lastRecording;
    lastRecording.time = new Date();
    lastRecording.x = event.acceleration.x;
    lastRecording.y = event.acceleration.y;
    lastRecording.z = event.acceleration.z;
    const {x, y, z, time} = lastRecording;
    if (time - lastTime < timeout) {
      if (Math.abs(x - lastX) > threshold
        || Math.abs(y - lastY) > threshold
        || Math.abs(z - lastZ) > threshold) {
        callback();
      }
    }
  };
  return onDeviceMotion;
};

export default shiver;
