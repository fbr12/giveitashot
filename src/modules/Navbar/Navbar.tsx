'use client'

import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { styles } from './Navbar.styles';

const Navbar = () => {
  return (
    <AppBar position="static" sx={styles.container}>
      <Toolbar>
        <Box>
          <Link href="/" passHref>
            <Typography component="a" sx={styles.link}>Home</Typography>
          </Link>
          <Link href="/movies" passHref>
            <Typography component="a" sx={styles.link}>Movies</Typography>
          </Link>
          <Link href="/series" passHref>
            <Typography component="a" sx={styles.link}>Series</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
