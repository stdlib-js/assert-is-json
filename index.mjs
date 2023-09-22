// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
var r=/^\{[\s\S]*\}$|^\[[\s\S]*\]$/;function t(t){if("string"!=typeof t)return!1;if(!r.test(t))return!1;try{JSON.parse(t)}catch(r){return!1}return!0}export{t as default};
//# sourceMappingURL=index.mjs.map
