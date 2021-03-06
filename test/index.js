import test from 'tape';
import Ahoy from '../src';
import config from '../src/config';

test('ahoy client exposes config', (t) => {
  t.plan(1);

  const client = new Ahoy();

  t.deepEqual(client.config, config, 'client exposes config');
});

test('client allows overriding config in constructor', (t) => {
  t.plan(1);

  const domain = 'https://www.cityspotters.com';
  const client = new Ahoy({ cookieDomain: domain });

  t.equal(client.config.cookieDomain, domain, 'overrides default cookieDomain');
});

test('client instantiates visit', (t) => {
  t.plan(1);

  const client = new Ahoy();

  t.notEqual(client.visit, 'undefined', 'visit should not be undefined');
});
