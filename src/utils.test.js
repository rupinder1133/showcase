import { classNames } from './utils';

test('classnames to concatenate truthy values', () => {
  expect(classNames(1, 'some', null, undefined, false, 0, 'class')).toBe('1 some class');
})
