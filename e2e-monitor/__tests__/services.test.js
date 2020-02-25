const http = require('http');
const https = require('https');

const assertResponseBody = (resolve, response, assertFunction) => {
  let body = '';
  response.on('data', chunk => (body += chunk));
  response.on('end', () => {
    assertFunction(body);
    resolve();
  });
};

describe('Check services are active', () => {
  beforeEach(() => {
    jest.setTimeout(15000);
  });
  test('www.marcnuri.com', done => {
    https.get('https://www.marcnuri.com/', {}, response => {
      expect(response.statusCode).toBe(200);
      assertResponseBody(done, response, body => {
        expect(body).toMatch(
          /[.\r\n]+I like rubber ducks, these are some duck eggs, maybe you can find some more[.\r\n]+/);
      });
    }).end();
  });
  test('www.marcnuri.com/adr-online', done => {
    https.get('https://www.marcnuri.com/en/adr-online', {}, redirectResponse => {
      expect(redirectResponse.statusCode).toBe(302);
      expect(redirectResponse.headers.location).toMatch(/adr-online;jsessionid=[0-9A-F]*?\?0/);
      done();
    }).end();
  });
  test('www.marcnuri.com/uuid', done => {
    const rawService = new Promise(resolve => {
      http.get('http://www.marcnuri.com:8082', {}, response => {
        expect(response.statusCode).toBe(200);
        assertResponseBody(resolve, response, body => {
          expect(body).toMatch(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
        });
      }).end();
    });
    const proxiedService = new Promise(resolve => {
      https.get('https://www.marcnuri.com/api/uuid', {}, response => {
        expect(response.statusCode).toBe(200);
        assertResponseBody(resolve, response, body => {
          expect(body).toMatch(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
        });
      }).end();
    });
    Promise.all([rawService, proxiedService]).then(() => done());
  });
  test('blog.marcnuri.com', done => {
    https.get('https://blog.marcnuri.com/', {}, response => {
      expect(response.statusCode).toBe(200);
      assertResponseBody(done, response, body => {
        expect(body).toMatch('<title>Marc Nuri - Blogging about business and technology</title>');
        expect(body).toMatch('<a class="site-logo" href="https://blog.marcnuri.com/" title="Marc Nuri | Blogging about business and technology">');
      });
    }).end();
  });
});
