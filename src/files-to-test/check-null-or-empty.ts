import { anyPass, isNil, isEmpty } from 'ramda';

const isNullOrEmpty = anyPass([isNil, isEmpty]);

export default isNullOrEmpty;
