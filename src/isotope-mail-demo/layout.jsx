import React from 'react';
import {navigate} from 'gatsby';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material';
import {injectIntl} from 'react-intl';
import {Link} from 'gatsby';
import isotopeLogo from './assets/isotope-logo-white-64.png';
import {localizedPath} from '../i18n/path';
import {lightTheme} from '../styles';
import '../styles/pages/isotope-mail-demo.scss';

const Layout = ({intl, pageContext, children}) => (
  <ThemeProvider theme={lightTheme}>
    <div className="isotope-mail-demo">
      <CssBaseline />
      <AppBar className="isotope-mail-demo__app-bar">
        <Toolbar>
          <Link to={localizedPath(pageContext.locale)('/isotope-mail-demo')}>
            <img
              src={isotopeLogo}
              className="isotope-mail-demo__app-bar-logo"
              alt="Isotope Mail Logo"
            />
          </Link>
          <Link to={localizedPath(pageContext.locale)('/isotope-mail-demo')}>
            <Typography component="h1" variant="h5">
              {intl.formatMessage({id: 'isotopeMailDemo.title'})}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md" className="isotope-mail-demo__main">
        {children}
      </Container>
      <footer className="isotope-mail-demo__footer">
        <Container className="isotope-mail-demo__footer-container" maxWidth="md">
          <Button
            onClick={() => navigate(localizedPath(pageContext.locale)('/isotope-mail-demo/privacy-policy'))}
          >
            {intl.formatMessage({id: 'isotopeMailDemo.privacyPolicy'})}
          </Button>
        </Container>
      </footer>
    </div>
  </ThemeProvider>
);

export default injectIntl(Layout);
