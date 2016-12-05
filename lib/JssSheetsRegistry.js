'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _jss = require('jss');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JssSheetsRegistry = function (_Component) {
  _inherits(JssSheetsRegistry, _Component);

  function JssSheetsRegistry() {
    _classCallCheck(this, JssSheetsRegistry);

    return _possibleConstructorReturn(this, (JssSheetsRegistry.__proto__ || Object.getPrototypeOf(JssSheetsRegistry)).apply(this, arguments));
  }

  _createClass(JssSheetsRegistry, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        jssSheetsRegistry: this.props.registry
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return JssSheetsRegistry;
}(_react.Component);

JssSheetsRegistry.propTypes = {
  registry: _react.PropTypes.instanceOf(_jss.SheetsRegistry).isRequired,
  children: _react.PropTypes.node.isRequired
};
JssSheetsRegistry.childContextTypes = {
  jssSheetsRegistry: _react.PropTypes.instanceOf(_jss.SheetsRegistry).isRequired
};
exports['default'] = JssSheetsRegistry;