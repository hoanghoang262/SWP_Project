import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

export default function Iconify( icon:any, ...rest:any) {
  return <Box component={Icon} icon={icon} width={20} height={20} {...rest} />;
}
