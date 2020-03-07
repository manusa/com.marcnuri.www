const tls = require('tls');

const checkCertificate = port => (hostname, done) => {
  const socket = tls.connect(port, hostname, () => {
    const certificate = socket.getPeerCertificate();
    expect(certificate.subject.CN).toMatch(/.*marcnuri.com$/);
    const daysToExpiry = (new Date(certificate.valid_to) - new Date()) / (24 * 60 * 60 * 1000);
    expect(daysToExpiry).toBeGreaterThan(7);
    done();
  });
};

const checkHttpsCertificate = checkCertificate(443);
const checkIMAPSCertificate = checkCertificate(993);
const checkSMTSCertificate = checkCertificate(465);

describe('Check SSL certificates', () => {
  beforeEach(() => {
    jest.setTimeout(15000);
  });
  test('marcnuri.com', done => checkHttpsCertificate('marcnuri.com', done));
  test('www.marcnuri.com', done => checkHttpsCertificate('www.marcnuri.com', done));
  test('blog.marcnuri.com', done => checkHttpsCertificate('blog.marcnuri.com', done));
  test('isotope.marcnuri.com', done => checkHttpsCertificate('isotope.marcnuri.com', done));
  test('mail.marcnuri.com:443', done => checkHttpsCertificate('mail.marcnuri.com', done));
  test('mail.marcnuri.com:993', done => checkIMAPSCertificate('mail.marcnuri.com', done));
  test('mail.marcnuri.com:465', done => checkSMTSCertificate('mail.marcnuri.com', done));
});

