var ECL = (function (exports) {
  'use strict';

  var queryAll = function queryAll(selector, context) {
    if (context === void 0) {
      context = document;
    }
    return [].slice.call(context.querySelectorAll(selector));
  };
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
   * @param {String} options.iconSelector Selector for icon element
   * @param {Boolean} options.attachClickListener Whether or not to bind click events on toggle
   */
  var Accordion = /*#__PURE__*/function () {
    /**
     * @static
     * Shorthand for instance creation and initialisation.
     *
     * @param {HTMLElement} root DOM element for component instantiation and scope
     *
     * @return {Accordion} An instance of Accordion.
     */
    Accordion.autoInit = function autoInit(root, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
        _ref$ACCORDION = _ref.ACCORDION,
        defaultOptions = _ref$ACCORDION === void 0 ? {} : _ref$ACCORDION;
      var accordion = new Accordion(root, defaultOptions);
      accordion.init();
      root.ECLAccordion = accordion;
      return accordion;
    };
    function Accordion(element, _temp2) {
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$toggleSelector = _ref2.toggleSelector,
        toggleSelector = _ref2$toggleSelector === void 0 ? '[data-ecl-accordion-toggle]' : _ref2$toggleSelector,
        _ref2$iconSelector = _ref2.iconSelector,
        iconSelector = _ref2$iconSelector === void 0 ? '[data-ecl-accordion-icon]' : _ref2$iconSelector,
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
      this.iconSelector = iconSelector;
      this.attachClickListener = attachClickListener;
      this.labelExpanded = labelExpanded;
      this.labelCollapsed = labelCollapsed;

      // Private variables
      this.toggles = null;
      this.forceClose = false;
      this.target = null;
      this.label = null;

      // Bind `this` for use in callbacks
      this.handleClickOnToggle = this.handleClickOnToggle.bind(this);
    }

    /**
     * Initialise component.
     */
    var _proto = Accordion.prototype;
    _proto.init = function init() {
      var _this = this;
      this.toggles = queryAll(this.toggleSelector, this.element);

      // Get label, if any
      this.label = queryOne(this.labelSelector, this.element);

      // Bind click event on toggles
      if (this.attachClickListener && this.toggles) {
        this.toggles.forEach(function (toggle) {
          toggle.addEventListener('click', _this.handleClickOnToggle.bind(_this, toggle));
        });
      }

      // Set ecl initialized attribute
      this.element.setAttribute('data-ecl-auto-initialized', 'true');
    }

    /**
     * Destroy component.
     */;
    _proto.destroy = function destroy() {
      if (this.attachClickListener && this.toggles) {
        this.toggles.forEach(function (toggle) {
          toggle.replaceWith(toggle.cloneNode(true));
        });
      }
      if (this.element) {
        this.element.removeAttribute('data-ecl-auto-initialized');
      }
    }

    /**
     * @param {HTMLElement} toggle Target element to toggle.
     */;
    _proto.handleClickOnToggle = function handleClickOnToggle(toggle) {
      // Get target element
      var target = queryOne("#" + toggle.getAttribute('aria-controls'), this.element);

      // Exit if no target found
      if (!target) {
        throw new TypeError('Target has to be provided for accordion (aria-controls)');
      }

      // Get current status
      var isExpanded = this.forceClose === true || toggle.getAttribute('aria-expanded') === 'true';

      // Toggle the expandable/collapsible
      toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      if (isExpanded) {
        target.hidden = true;
      } else {
        target.hidden = false;
      }

      // Toggle icon
      var iconElement = queryOne(this.iconSelector, toggle);
      if (iconElement) {
        var useNode = queryOne('use', iconElement);
        if (useNode) {
          var originalXlinkHref = useNode.getAttribute('xlink:href');
          if (!originalXlinkHref) {
            originalXlinkHref = useNode.getAttribute('href');
          }
          var newXlinkHref = '';
          if (isExpanded) {
            newXlinkHref = originalXlinkHref.replace('minus', 'plus');
          } else {
            newXlinkHref = originalXlinkHref.replace('plus', 'minus');
          }
          if (useNode.getAttribute('xlink:href')) {
            useNode.setAttribute('xlink:href', newXlinkHref);
          } else {
            useNode.setAttribute('href', newXlinkHref);
          }
        }
      }

      // Toggle icon label
      var iconLabelElement = queryOne('.ecl-accordion__toggle-label', toggle);
      if (iconLabelElement) {
        if (isExpanded) {
          iconLabelElement.textContent = toggle.getAttribute(this.labelCollapsed);
        } else {
          iconLabelElement.textContent = toggle.getAttribute(this.labelExpanded);
        }
      }
      return this;
    };
    return Accordion;
  }();

  exports.Accordion = Accordion;
  exports["default"] = Accordion;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
