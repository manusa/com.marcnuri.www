const tls = require('tls');

const checkHttpsCertificate = (hostname, done) => {
  const socket = tls.connect(443, hostname, () => {
    const certificate = socket.getPeerCertificate();
    expect(certificate.subject.CN).toMatch(/.*marcnuri.com$/);
    const daysToExpiry = (new Date(certificate.valid_to) - new Date()) / (24 * 60 * 60 * 1000);
    expect(daysToExpiry).toBeGreaterThan(7);
    done();
  });
};

describe('Check SSL certificates', () => {
  beforeEach(() => {
    jest.setTimeout(15000);
  });
  test('marcnuri.com', done => checkHttpsCertificate('marcnuri.com', done));
  test('www.marcnuri.com', done => checkHttpsCertificate('www.marcnuri.com', done));
  test('blog.marcnuri.com', done => checkHttpsCertificate('blog.marcnuri.com', done));
  test('isotope.marcnuri.com', done => checkHttpsCertificate('isotope.marcnuri.com', done));
  test('mail.marcnuri.com', done => checkHttpsCertificate('mail.marcnuri.com', done));
});

