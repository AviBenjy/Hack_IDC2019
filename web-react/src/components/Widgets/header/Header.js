import React from 'react';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../../assets/images/logo.png'

// theme
import * as colors from '../../../theme/colors'


class PrimarySearchAppBar extends React.Component {

  render() {

    return (
      <Container>
        {/* <img alt='logo' src={logo}/> */}
            <Typography variant="h6" color="inherit" noWrap>
              MIZRAHI TEFAHOT
            </Typography>
            <AppBarBtn >
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </AppBarBtn>
      </Container>
    );
  }
}


export default PrimarySearchAppBar

const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    color: ${colors.secondary};
    background: ${colors.primaryDark};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 4px 16px;
    box-shadow: 0px 0px 8px rgba(0,0,0,.6);
    `

const AppBarBtn = styled.div`
    color: ${colors.secondary};
`