import test from 'tape';
import csrfToken from '../src/csrfToken';

test('Returns token from meta tag', (t) => {
  t.plan(1);

  t.equal(csrfToken(), 'test-token');
});
