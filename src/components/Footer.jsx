import { Link, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        bgcolor: 'black',
        color: 'white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <Link href="mailto:djseber61@gmail.com" color="inherit">
            djseber61@gmail.com
        </Link>
        <Typography color="inherit"
            >Developed By <Link href="mailto:xtreemetechofficial@gmail.com" color="inherit">Xtreeme Tech</Link>
        </Typography>
    </Stack>
  );
};

export default Footer;