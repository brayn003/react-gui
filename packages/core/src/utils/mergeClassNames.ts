/**
 * Merge multiple classnames
 * @param classNames - Array of classnames to be merged
 * @returns Merged Classname String
 */
const mergeClassNames = (...classNames: any[]): string => {
  let mergedClassName = '';
  classNames.forEach((className) => {
    if(className) {
      mergedClassName += ` ${className.toString()}`;
    }
  })
  return mergedClassName;
};

export default mergeClassNames;
