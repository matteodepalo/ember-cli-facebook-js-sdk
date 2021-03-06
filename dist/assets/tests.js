define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, _emberResolver, _dummyConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/services/fb-skip-init-test', ['exports', 'ember-qunit', 'ember-getowner-polyfill', 'ember'], function (exports, _emberQunit, _emberGetownerPolyfill, _ember) {

  (0, _emberQunit.moduleFor)('service:fb', 'Unit | Service | fb', {
    beforeEach: function beforeEach() {
      var owner = (0, _emberGetownerPolyfill['default'])(this.subject());
      owner.register('config:environment', _ember['default'].Object.extend({
        FB: {
          skipInit: true
        }
      }));
    }
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  (0, _emberQunit.test)('init get skipped', function (assert) {
    assert.expect(2);

    this.subject().FBInit().then(function (response) {
      assert.ok(response);
      assert.equal(response, 'skip init');
    });
  });
});
define('dummy/tests/unit/services/fb-skip-init-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/fb-skip-init-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/fb-skip-init-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/services/fb-test', ['exports', 'ember-qunit', 'ember-getowner-polyfill', 'ember'], function (exports, _emberQunit, _emberGetownerPolyfill, _ember) {

  (0, _emberQunit.moduleFor)('service:fb', 'Unit | Service | fb', {
    beforeEach: function beforeEach() {
      var owner = (0, _emberGetownerPolyfill['default'])(this.subject());
      owner.register('config:environment', _ember['default'].Object.extend({
        FB: {
          init: {
            appId: '1565218020393850',
            version: 'v2.5'
          }
        }
      }));
      this.subject().setAccessToken('CAAWPjrgaA3oBAAWhkqZCZBufzhrei4fv7YNWJhDYBDBHFpoY4QPx6TAsnZAxE6qIVHD7NWQh3du6V5rVkVNKrG4QYL3IGfPCdJg456ZCIILLr2WmcdkKmwM9mGpHgPg1E4dZBhxpFtrp8sEf6WKF04g4ewVKddzwg4nphsmtnXDoU9cOTZB919IwScOnZClC5pu5k9hCIFZAuaRw6LDXl8sWoq6hSBZBzvrEZD');
    }
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  (0, _emberQunit.test)('get user data', function (assert) {
    assert.expect(1);

    return this.subject().api('/me').then(function (response) {
      assert.ok(response);
    });
  });

  (0, _emberQunit.test)('fail to fetch user data with a bad token', function (assert) {
    this.subject().setAccessToken('foo');
    assert.expect(1);

    return this.subject().api('/me').then(function () {
      assert.ok(false, "promise should not be fulfilled");
    })['catch'](function (reason) {
      assert.ok(reason);
    });
  });
});
define('dummy/tests/unit/services/fb-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/fb-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/fb-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map