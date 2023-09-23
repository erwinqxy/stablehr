import { createStyles, Title, Text, Container, Flex, Button } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import WalletConnectButton from './WalletConnectButton';
import Passkey from './Passkey';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',

    '@media (max-width: 755px)': {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
    },
  },

  highlight: {
    color: 'rgb(201, 247, 58)',
  },
}));

export function Login() {
  const { classes } = useStyles();

  return (
    <Container h={'100vh'}>
      <Flex
        justify={'center'}
        align={'center'}
        mih={'100%'}
        direction={'column'}
        gap={30}
      >
        <Title className={classes.title} style={{ textAlign: 'center' }}>
          {' '}
          {/* Centered text */}
          <Text component='span' className={classes.highlight} inherit>
            Not an Existing Web3 User?
          </Text>
          <br />
          Use Unlimit to login!
        </Title>
        <div>
          <ConnectButton label={'Login'} /> {/* Added margin for spacing */}
        </div>
        <Title className={classes.title} style={{ textAlign: 'center' }}>
          {' '}
          {/* Centered text */}
          <Text component='span' className={classes.highlight} inherit>
            Already an Existing Web3 User?
          </Text>
          <br />
          Use WalletConnect to Login!
        </Title>
        <div>
          <WalletConnectButton label='Login' /> {/* Added margin for spacing */}
        </div>
      </Flex>
    </Container>
  );
}
