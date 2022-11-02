import { Link as RouterLink } from 'react-router-dom';
// @mui
import {
  Box,
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from '@mui/material';

function Breadcrumbs({ links, activeLast = false, isLight = true, ...other }) {
  const currentLink = links[links.length - 1].name;

  const listDefault = links.map((link) => (
    <LinkItem key={link.name} link={link} isLight={isLight} />
  ));

  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem isLight={isLight} link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: isLight ? 'text.disabled' : 'grey.300',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs
      separator={
        <Box
          component="span"
          sx={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            bgcolor: isLight ? 'text.disabled' : 'grey.200',
          }}
        />
      }
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

function LinkItem({ link, isLight = true }) {
  const { href, name, icon } = link;
  return (
    <Link
      key={name}
      variant="body2"
      component={RouterLink}
      to={href || '#'}
      sx={{
        lineHeight: 2,
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: isLight ? 'text.primary' : 'white',
        '& > div': { display: 'inherit' },
      }}
    >
      {icon && (
        <Box sx={{ mr: 1, '& svg': { width: 20, height: 20 } }}>{icon}</Box>
      )}
      {name}
    </Link>
  );
}

export default function HeaderBreadcrumbs({
  links,
  action,
  heading,
  moreLink = '' || [],
  mode = 'light',
  sx,
  ...other
}) {
  const isLight = mode === 'light';
  return (
    <Box sx={{ mb: 5, color: isLight ? undefined : 'white', ...sx }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
          <Breadcrumbs links={links} {...other} isLight={isLight} />
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      <Box>
        {typeof moreLink === 'string' ? (
          <Link href={moreLink} target="_blank" rel="noopener" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
}
