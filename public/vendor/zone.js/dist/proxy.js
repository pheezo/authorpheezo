/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	(function () {
	    var ProxyZoneSpec = (function () {
	        function ProxyZoneSpec(defaultSpecDelegate) {
	            if (defaultSpecDelegate === void 0) { defaultSpecDelegate = null; }
	            this.defaultSpecDelegate = defaultSpecDelegate;
	            this.name = 'ProxyZone';
	            this.properties = { 'ProxyZoneSpec': this };
	            this.propertyKeys = null;
	            this.setDelegate(defaultSpecDelegate);
	        }
	        ProxyZoneSpec.get = function () {
	            return Zone.current.get('ProxyZoneSpec');
	        };
	        ProxyZoneSpec.isLoaded = function () {
	            return ProxyZoneSpec.get() instanceof ProxyZoneSpec;
	        };
	        ProxyZoneSpec.assertPresent = function () {
	            if (!this.isLoaded()) {
	                throw new Error("Expected to be running in 'ProxyZone', but it was not found.");
	            }
	            return ProxyZoneSpec.get();
	        };
	        ProxyZoneSpec.prototype.setDelegate = function (delegateSpec) {
	            var _this = this;
	            this._delegateSpec = delegateSpec;
	            this.propertyKeys && this.propertyKeys.forEach(function (key) { return delete _this.properties[key]; });
	            this.propertyKeys = null;
	            if (delegateSpec && delegateSpec.properties) {
	                this.propertyKeys = Object.keys(delegateSpec.properties);
	                this.propertyKeys.forEach(function (k) { return _this.properties[k] = delegateSpec.properties[k]; });
	            }
	        };
	        ProxyZoneSpec.prototype.getDelegate = function () {
	            return this._delegateSpec;
	        };
	        ProxyZoneSpec.prototype.resetDelegate = function () {
	            this.setDelegate(this.defaultSpecDelegate);
	        };
	        ProxyZoneSpec.prototype.onFork = function (parentZoneDelegate, currentZone, targetZone, zoneSpec) {
	            if (this._delegateSpec && this._delegateSpec.onFork) {
	                return this._delegateSpec.onFork(parentZoneDelegate, currentZone, targetZone, zoneSpec);
	            }
	            else {
	                return parentZoneDelegate.fork(targetZone, zoneSpec);
	            }
	        };
	        ProxyZoneSpec.prototype.onIntercept = function (parentZoneDelegate, currentZone, targetZone, delegate, source) {
	            if (this._delegateSpec && this._delegateSpec.onIntercept) {
	                return this._delegateSpec.onIntercept(parentZoneDelegate, currentZone, targetZone, delegate, source);
	            }
	            else {
	                return parentZoneDelegate.intercept(targetZone, delegate, source);
	            }
	        };
	        ProxyZoneSpec.prototype.onInvoke = function (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
	            if (this._delegateSpec && this._delegateSpec.onInvoke) {
	                return this._delegateSpec.onInvoke(parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source);
	            }
	            else {
	                return parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
	            }
	        };
	        ProxyZoneSpec.prototype.onHandleError = function (parentZoneDelegate, currentZone, targetZone, error) {
	            if (this._delegateSpec && this._delegateSpec.onHandleError) {
	                return this._delegateSpec.onHandleError(parentZoneDelegate, currentZone, targetZone, error);
	            }
	            else {
	                return parentZoneDelegate.handleError(targetZone, error);
	            }
	        };
	        ProxyZoneSpec.prototype.onScheduleTask = function (parentZoneDelegate, currentZone, targetZone, task) {
	            if (this._delegateSpec && this._delegateSpec.onScheduleTask) {
	                return this._delegateSpec.onScheduleTask(parentZoneDelegate, currentZone, targetZone, task);
	            }
	            else {
	                return parentZoneDelegate.scheduleTask(targetZone, task);
	            }
	        };
	        ProxyZoneSpec.prototype.onInvokeTask = function (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
	            if (this._delegateSpec && this._delegateSpec.onFork) {
	                return this._delegateSpec.onInvokeTask(parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs);
	            }
	            else {
	                return parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs);
	            }
	        };
	        ProxyZoneSpec.prototype.onCancelTask = function (parentZoneDelegate, currentZone, targetZone, task) {
	            if (this._delegateSpec && this._delegateSpec.onCancelTask) {
	                return this._delegateSpec.onCancelTask(parentZoneDelegate, currentZone, targetZone, task);
	            }
	            else {
	                return parentZoneDelegate.cancelTask(targetZone, task);
	            }
	        };
	        ProxyZoneSpec.prototype.onHasTask = function (delegate, current, target, hasTaskState) {
	            if (this._delegateSpec && this._delegateSpec.onHasTask) {
	                this._delegateSpec.onHasTask(delegate, current, target, hasTaskState);
	            }
	            else {
	                delegate.hasTask(target, hasTaskState);
	            }
	        };
	        return ProxyZoneSpec;
	    }());
	    // Export the class so that new instances can be created with proper
	    // constructor params.
	    Zone['ProxyZoneSpec'] = ProxyZoneSpec;
	})();


/***/ }
/******/ ]);