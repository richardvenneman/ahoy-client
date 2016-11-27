import defaultConfig from './config';

/**
 * @param {Type}
 * @return {Type}
 */
class Ahoy {
  constructor(config) {
    this.config = Object.assign(defaultConfig, config);
  }
}

export default Ahoy;
