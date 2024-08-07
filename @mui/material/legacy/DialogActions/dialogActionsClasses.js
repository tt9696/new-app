import generateUtilityClasses from '@mui/utils/generateUtilityClasses';
import generateUtilityClass from '@mui/utils/generateUtilityClass';
export function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass('MuiDialogActions', slot);
}
var dialogActionsClasses = generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);
export default dialogActionsClasses;