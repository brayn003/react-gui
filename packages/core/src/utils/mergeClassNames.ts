/**
 * Merge multiple classnames
 * @param {[string|number]} classNames - Array of classnames to be merged
 * @returns Merged Classname String
 */
const mergeClassNames = (...classNames: string[] | number[]): string => {
  const stringedClassNames : string[] = classNames.map((cl) => cl.toString());
  const mergedClassName : string = stringedClassNames.join(' ');
  return mergedClassName;
};

export default mergeClassNames;
