"use strict";

System.register(["aurelia-dependency-injection", "./config"], function (_export, _context) {
  "use strict";

  var resolver, Config, _dec, _class, Messenger;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_aureliaDependencyInjection) {
      resolver = _aureliaDependencyInjection.resolver;
    }, function (_config) {
      Config = _config.Config;
    }],
    execute: function () {
      _export("Messenger", Messenger = (_dec = resolver(), _dec(_class = function () {
        function Messenger(key) {
          _classCallCheck(this, Messenger);

          this._key = key;
        }

        _createClass(Messenger, [{
          key: "get",
          value: function get(container) {
            return container.get(Config).getConnector(this._key);
          }
        }], [{
          key: "of",
          value: function of(key) {
            return new Messenger(key);
          }
        }]);

        return Messenger;
      }()) || _class));
    }
  };
});