import { Box, Container, Grid, Stack } from '@mui/material'
import Link from 'next/link'
import styles from '../../styles/navbar.module.css'
import Logo from '../logo'
import { NavbarText } from '../typography'

interface NavbarProps {
  setBackgroundColor: string
  setPosition: string
  setLogoFilter: string
  setTextColor: string
  setShadow: string
}
const Navbar = ({
  setBackgroundColor,
  setPosition,
  setLogoFilter,
  setTextColor = 'var(--black)',
  setShadow = '0',
}: NavbarProps) => {
  return (
    <Container
      maxWidth={false}
      style={{ backgroundColor: setBackgroundColor }}
      sx={{ position: setPosition, boxShadow: setShadow }}
      className={styles.navbar}
    >
      {/* <Logo /> */}
      <Container maxWidth="xl" className={styles.navbarcontent}>
        <Grid container md={12}>
          <Grid md={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link href="/">
                <a>
                  <div className="logo" style={{ filter: setLogoFilter }}>
                    <Logo width="300vw" height="85vh" />
                  </div>
                </a>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Navbar
