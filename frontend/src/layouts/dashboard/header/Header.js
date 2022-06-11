import { IconButtonAnimate } from '@/components/animate';
import Iconify from '@/components/Iconify';
import { HEADER, NAVBAR } from '@/config';
import {
  AppBar,
  Badge,
  CssBaseline,
  IconButton,
  Stack,
  styled,
  Toolbar,
} from '@mui/material';
import React from 'react';
import AccountPopover from './AccountPopover';
// ----------------------------------------------------------

const RootStyles = styled(AppBar)(({ theme }) => ({
  left: NAVBAR.widthDrawer,
  width: 'calc(100% - ' + NAVBAR.widthDrawer + 'px)',
  height: HEADER.dashboardHeight,
  color: theme.palette.common.black,
  backgroundColor: theme.palette.grey[0],
}));
const Header = () => {
  return (
    <>
      <CssBaseline />
      <RootStyles>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ flexGrow: 1 }}
          >
            <IconButton>
              <Iconify icon="mdi-menu" />
            </IconButton>

            <Stack direction="row" spacing={1}>
              <IconButtonAnimate size="medium" color="default">
                <Badge
                  badgeContent={9}
                  color="error"
                  sx={{
                    '& .MuiBadge-anchorOriginTopRight': {
                      top: 1,
                      right: 3,
                    },
                  }}
                >
                  <Iconify icon="ion:notifications" />
                </Badge>
              </IconButtonAnimate>

              <IconButtonAnimate size="medium" color="default">
                <Iconify icon="ant-design:setting-twotone" />
              </IconButtonAnimate>

              <AccountPopover />
            </Stack>
          </Stack>
        </Toolbar>
      </RootStyles>
    </>
  );
};

export default Header;
