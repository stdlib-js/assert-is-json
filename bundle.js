// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isJSON=t()}(this,(function(){"use strict";var e=/^\{[\s\S]*\}$|^\[[\s\S]*\]$/;return function(t){if("string"!=typeof t)return!1;if(!e.test(t))return!1;try{JSON.parse(t)}catch(e){return!1}return!0}}));
//# sourceMappingURL=bundle.js.map
