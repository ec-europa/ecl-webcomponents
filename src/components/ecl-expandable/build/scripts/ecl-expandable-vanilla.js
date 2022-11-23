var ECL = (function (exports) {
  'use strict';

  var queryOne = function queryOne(selector, context) {
    if (context === void 0) {
      context = document;
    }
    return context.querySelector(selector);
  };

  /**
   * @param {HTMLElement} element DOM element for component instantiation and scope
   * @param {Object} options
   * @param {String} options.toggleSelector Selector for toggling element
   * @param {String} options.labelSelector Selector for label
   * @param {String} options.labelExpanded Label state
   * @param {String} options.labelCollapsed Label collapsed state
   * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
   */
  var Expandable = /*#__PURE__*/function () {
    /**
     * @static
     * Shorthand for instance creation and initialisation.
     *
     * @param {HTMLElement} root DOM element for component instantiation and scope
     *
     * @return {Expandable} An instance of Expandable.
     */
    Expandable.autoInit = function autoInit(root, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        _ref$EXPANDABLE = _ref.EXPANDABLE,
        defaultOptions = _ref$EXPANDABLE === void 0 ? {} : _ref$EXPANDABLE;
      var expandable = new Expandable(root, defaultOptions);
      expandable.init();
      root.ECLExpandable = expandable;
      return expandable;
    };
    function Expandable(element, _temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$toggleSelector = _ref2.toggleSelector,
        toggleSelector = _ref2$toggleSelector === void 0 ? '[data-ecl-expandable-toggle]' : _ref2$toggleSelector,
        _ref2$labelSelector = _ref2.labelSelector,
        labelSelector = _ref2$labelSelector === void 0 ? '[data-ecl-label]' : _ref2$labelSelector,
        _ref2$labelExpanded = _ref2.labelExpanded,
        labelExpanded = _ref2$labelExpanded === void 0 ? 'data-ecl-label-expanded' : _ref2$labelExpanded,
        _ref2$labelCollapsed = _ref2.labelCollapsed,
        labelCollapsed = _ref2$labelCollapsed === void 0 ? 'data-ecl-label-collapsed' : _ref2$labelCollapsed,
        _ref2$attachClickList = _ref2.attachClickListener,
        attachClickListener = _ref2$attachClickList === void 0 ? true : _ref2$attachClickList;
      // Check element
      if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        throw new TypeError('DOM element should be given to initialize this widget.');
      }
      this.element = element;

      // Options
      this.toggleSelector = toggleSelector;
      this.labelSelector = labelSelector;
      this.labelExpanded = labelExpanded;
      this.labelCollapsed = labelCollapsed;
      this.attachClickListener = attachClickListener;

      // Private variables
      this.toggle = null;
      this.forceClose = false;
      this.target = null;
      this.label = null;

      // Bind `this` for use in callbacks
      this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    }

    /**
     * Initialise component.
     */
    var _proto = Expandable.prototype;
    _proto.init = function init() {
      this.toggle = queryOne(this.toggleSelector, this.element);

      // Get target element
      this.target = document.querySelector("#" + this.toggle.getAttribute('aria-controls'));

      // Get label, if any
      this.label = queryOne(this.labelSelector, this.element);

      // Exit if no target found
      if (!this.target) {
        throw new TypeError('Target has to be provided for expandable (aria-controls)');
      }

      // Bind click event on toggle
      if (this.attachClickListener && this.toggle) {
        this.toggle.addEventListener('click', this.handleClickOnToggle);
      }

      // Set ecl initialized attribute
      this.element.setAttribute('data-ecl-auto-initialized', 'true');
    }

    /**
     * Destroy component.
     */;
    _proto.destroy = function destroy() {
      if (this.attachClickListener && this.toggle) {
        this.toggle.removeEventListener('click', this.handleClickOnToggle);
      }
      if (this.element) {
        this.element.removeAttribute('data-ecl-auto-initialized');
      }
    }

    /**
     * Toggles between collapsed/expanded states.
     */;
    _proto.handleClickOnToggle = function handleClickOnToggle() {
      // Get current status
      var isExpanded = this.forceClose === true || this.toggle.getAttribute('aria-expanded') === 'true';

      // Toggle the expandable/collapsible
      this.toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      if (isExpanded) {
        this.target.hidden = true;
      } else {
        this.target.hidden = false;
      }

      // Toggle label if possible
      if (this.label && !isExpanded && this.toggle.hasAttribute(this.labelExpanded)) {
        this.label.innerHTML = this.toggle.getAttribute(this.labelExpanded);
      } else if (this.label && isExpanded && this.toggle.hasAttribute(this.labelCollapsed)) {
        this.label.innerHTML = this.toggle.getAttribute(this.labelCollapsed);
      }
      return this;
    };
    return Expandable;
  }();

  exports.Expandable = Expandable;
  exports["default"] = Expandable;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
