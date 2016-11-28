import test from 'tape';
import generateId from '../src/utils';

test('generateId returns uuid string', (t) => {
  t.plan(2);

  const uuid = generateId();

  t.equal(typeof uuid, 'string');
  t.notEqual(generateId(), uuid);
});
