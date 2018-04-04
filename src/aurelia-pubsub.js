import { Messenger } from './messenger';
import { Connector } from './connectors/connector';
import { Config } from './config';

/**
 * Function called automatically by aurelia
 * @param  {Aurelia} aurelia : The aurelia object.
 * @param  {Function} configCallback : the function provided when using aurelia.plugin()
 */
export function configure(aurelia, configCallback) {
  let config = aurelia.container.get(Config);

  if (configCallback === undefined || typeof(configCallback) !== 'function') {
    let error = 'You need to provide a callback method to properly configure the library';
    throw error;
  }

  configCallback(config);
}

export {
  Messenger,
  Connector,
  Config
};
