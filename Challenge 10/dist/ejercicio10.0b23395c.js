// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/ejercicio10.js":[function(require,module,exports) {
var pregunta = prompt('¿Que parte del himno deseas escuchar?');
var himno = ["\xA1Oh gloria inmarcesible!,\n\xA1Oh j\xFAbilo inmortal!, \n\xA1En surcos de Dolores el bien germina ya!\n", "\xA1Ces\xF3 la horrible noche!,\nLa libertad sublime\nderrama las auroras\nde su invencible luz.\nLa humanidad entera,\nque entre cadenas gime,\ncomprende las palabras\ndel que muri\xF3 en la cruz.\n", "\"\xA1Independencia!\" grita\nel mundo americano;\nse ba\xF1a en sangre de h\xE9roes\nla tierra de Col\xF3n.\nPero este gran principio:\n\"El rey no es soberano\",\nResuena, y los que sufren\nBendicen su pasi\xF3n.\n", "Del Orinoco el cauce\nse colma de despojos;\nde sangre y llanto un r\xEDo\nse mira all\xED correr.\nEn B\xE1rbula no saben\nlas almas ni los ojos,\nsi admiraci\xF3n o espanto\nsentir o padecer.\n", "A orillas del Caribe\nhambriento un pueblo lucha,\nhorrores prefiriendo\na p\xE9rfida salud.\n\xA1Oh, s\xED! De Cartagena\nla abnegaci\xF3n es mucha,\ny escombros de la muerte\ndesprecia su virtud.\n", "De Boyac\xE1 en los campos\nel genio de la gloria\ncon cada espiga un h\xE9roe\ninvicto coron\xF3.\nSoldados sin coraza\nganaron la victoria;\nsu varonil aliento\nde escudo les sirvi\xF3.\n", "Bol\xEDvar cruza el Ande\nque riega dos oc\xE9anos;\nespadas cual centellas\nfulguran en Jun\xEDn.\nCentauros indomables\ndescienden a los Llanos,\ny empieza a presentirse\nde la epopeya el fin.\n", "La trompa victoriosa\nen Ayacucho truena;\ny en cada triunfo crece\nsu formidable son.\nEn su expansivo empuje\nla libertad se estrena,\ndel cielo americano\nformando un pabell\xF3n.\n", "La Virgen sus cabellos\narranca en agon\xEDa\ny de su amor viuda\nlos cuelga del cipr\xE9s.\nLamenta su esperanza\nque cubre losa fr\xEDa,\npero glorioso orgullo\ncircunda su alba tez.\n", "La patria as\xED se forma,\nTerm\xF3pilas brotando;\nconstelaci\xF3n de c\xEDclopes\nsu noche ilumin\xF3.\nLa flor estremecida,\nmortal el viento hallando,\ndebajo los laureles\nseguridad busc\xF3.\n", "Mas no es completa gloria\nvencer en la batalla,\nque el brazo que combate\nlo anima la verdad.\nLa independencia sola\nal gran clamor no acalla;\nsi el sol alumbra a todos,\njusticia es libertad.\n", "Del hombre los derechos\nNari\xF1o predicando,\nel alma de la lucha\nProf\xE9tico ense\xF1\xF3.\nRicaurte en San Mateo\nen \xE1tomos volando,\n\"Deber antes que vida\",\ncon llamas escribi\xF3."];

switch (pregunta) {
  case 'todo':
    console.log("Coro:\n ".concat(himno[0], "\n  I:\n ").concat(himno[1], "\n II:\n ").concat(himno[2], "\n III:\n ").concat(himno[3], "\n IV:\n ").concat(himno[4], "\n V:\n ").concat(himno[5], "\n  VI:\n ").concat(himno[6], "\n VII:\n ").concat(himno[7], "\n VIII:\n ").concat(himno[8], "\n IX:\n ").concat(himno[9], "\n X:\n ").concat(himno[10], "\n XI:\n ").concat(himno[11]));
    break;

  case 'coro':
    console.log(himno[0]);
    break;

  case '1':
    console.log(himno[1]);
    break;

  case '2':
    console.log(himno[2]);
    break;

  case '3':
    console.log(himno[3]);
    break;

  case '4':
    console.log(himno[4]);
    break;

  case '5':
    console.log(himno[5]);
    break;

  case '6':
    console.log(himno[6]);
    break;

  case '7':
    console.log(himno[7]);
    break;

  case '8':
    console.log(himno[8]);
    break;

  case '9':
    console.log(himno[9]);
    break;

  case '10':
    console.log(himno[10]);
    break;

  case '11':
    console.log(himno[11]);
    break;

  default:
    console.log('Valor no valido.');
    break;
}
},{}],"../../../../AppData/Roaming/nvm/v14.5.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63340" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/nvm/v14.5.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/ejercicio10.js"], null)
//# sourceMappingURL=/ejercicio10.0b23395c.js.map