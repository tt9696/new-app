"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withTheme;
var _formatMuiErrorMessage2 = _interopRequireDefault(require("@mui/utils/formatMuiErrorMessage"));
function withTheme() {
  throw new Error(process.env.NODE_ENV !== "production" ? `MUI: withTheme is no longer exported from @mui/material/styles.
You have to import it from @mui/styles.
See https://mui.com/r/migration-v4/#mui-material-styles for more details.` : (0, _formatMuiErrorMessage2.default)(16));
}