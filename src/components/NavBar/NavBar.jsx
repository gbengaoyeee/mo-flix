import React, {useState} from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'
import { useTheme } from '@mui/material/styles'
import {Sidebar} from '../'
import { Search } from '../'

const NavBar = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 600px)')
  const theme = useTheme()
  const isAuthenticated = true
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{
                outline: 'none',
              }}
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color='inherit' sx={{ml: 1}} onClick={() => {}} >
            {
              theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />
            }
          </IconButton>
          {!isMobile && <Search />}
            <div>
              {
                !isAuthenticated ? (
                  <Button color='inherit' onClick={() => {}}>
                    Login &nbsp; <AccountCircle />
                  </Button>
                ) : (
                  <Button color='inherit' component={Link} to={`/profile/:id`} className={classes.linkButton} onClick={() => {}} >
                    {!isMobile && <>My Movies &nbsp;</>}
                    <Avatar alt='Profile' src='https://www.w3schools.com/howto/img_avatar.png' style={{width:30, height:30}} />
                  </Button>
                )
              }
            </div>
            {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant='temporary'
              anchor='left'
              open={mobileOpen}
              classes={{paper: classes.drawerPaper}}
              ModalProps={{keepMounted: true}}
              onClose={handleDrawerToggle}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{paper: classes.drawerPaper}}
              variant='permanent'
              open
              anchor='left'
            >
              <Sidebar setMobileOpen={setMobileOpen}/>
            </Drawer>
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar