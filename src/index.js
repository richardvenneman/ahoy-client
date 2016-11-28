import defaultConfig from './config';
import Visit from './visit';

/**
 * @param {Type}
 * @return {Type}
 */
class Ahoy {
  constructor(config) {
    this.config = Object.assign(defaultConfig, config);
    this.visit = new Visit(this.config);
  }
}

export default Ahoy;
