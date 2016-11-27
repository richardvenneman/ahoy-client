import test from 'tape';
import generateId from '../src/utils';

test('generateId returns uuid string', (t) => {
  t.plan(2);

  const uuid = generateId();

  t.equal('string', typeof uuid);
  t.notEqual(uuid, generateId());
});
