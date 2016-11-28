import test from 'tape';
import Cookies from 'js-cookie';
import sinon from 'sinon';
import Visit from '../src/visit';
import config from '../src/config';

const xhr = sinon.useFakeXMLHttpRequest();

test('Removes ahoy_track cookie when initializing', (t) => {
  t.plan(2);

  Cookies.set('ahoy_track', true);

  t.notEqual(Cookies.get('ahoy_track'), undefined);

  const visit = new Visit(config);

  t.equal(Cookies.get('ahoy_track'), undefined);
});

test('Sets visit and visitor cookies', (t) => {
  t.plan(2);

  const visit = new Visit(config);

  t.notEqual(Cookies.get('ahoy_visit'), undefined);
  t.notEqual(Cookies.get('ahoy_visitor'), undefined);
});

test('POSTs the visit to the backend', (t) => {
  t.plan(3);

  const requests = [];
  xhr.onCreate = function(req) { requests.push(req); };

  const visit = new Visit(config);

  t.equal(requests.length, 1);
  t.equal('test-token', requests[0].requestHeaders['X-CSRF-Token']);
  t.equal('/ahoy/visits', requests[0].url);
});
