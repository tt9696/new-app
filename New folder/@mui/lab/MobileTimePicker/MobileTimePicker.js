'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
let warnedOnce = false;
const warn = () => {
  if (!warnedOnce) {
    console.warn(['MUI: The MobileTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.', '', "You should use `import { MobileTimePicker } from '@mui/x-date-pickers'`", "or `import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'`", '', 'More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.'].join('\n'));
    warnedOnce = true;
  }
};
/**
 * @deprecated The MobileTimePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`. More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/.
 * @ignore - do not document.
 */
const MobileTimePicker = /*#__PURE__*/React.forwardRef(function DeprecatedMobileTimePicker() {
  warn();
  return null;
});
export default MobileTimePicker;