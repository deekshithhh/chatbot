import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Sidebar from './Components/SideBar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#D7C7F4',
      light: '#fff',
      dark: '#AF9FCD',
      bglight: '#fafafa',
      bgtheme: '#FAF7FF',
      bg: '#AF9FCD'
  },
  text: {
      primary: '#000000',
      secondary: 'rgba(0,0,0,0.5)',
  },
    
  }
});

function App() {
  const [chat, setChat] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid container sx={{ background: 'linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))' }} >
          <Grid
            item xs={12}
            md={2.5}
            sx={{
              bgcolor: 'primary.light',
              '@media (max-width:800px)': {
                width: '70%',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
              },
            }}
            position={{ xs: 'fixed', md: 'relative' }}
            height={'100vh'}
            zIndex={{ xs: 9999, md: 1 }}
            boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}
          >
            <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
          </Grid>
          <Grid item xs={12} md={9.5}>
            <Outlet context={{ chat: chat, setChat: setChat, handleMobileMenu: setMenuOpen }} />
          </Grid>
        </Grid>

      </ThemeProvider>
   
  );
}

export default App;