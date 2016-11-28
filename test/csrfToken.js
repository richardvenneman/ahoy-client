import test from 'tape';
import csrfToken from '../src/csrfToken';

test('Returns token from meta tag', (t) => {
  t.plan(1);

  const elem = document.createElement('meta');
  elem.id = 'csrf-token-meta-tag';
  elem.content = 'test-token';
  document.head.appendChild(elem);

  t.equal(csrfToken(), 'test-token');
});
