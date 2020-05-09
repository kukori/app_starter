import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  zIndex: {
    appBar: 1100,
    drawer: 1200
  }
});

export default theme;
