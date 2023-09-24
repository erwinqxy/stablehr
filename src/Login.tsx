import {
  createStyles,
  Title,
  Text,
  Container,
  Flex,
  Button,
} from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WalletConnectButton from "./WalletConnectButton";
import Passkey from "./Passkey";
import logo from "./resources/assets/images/stablehr_logo.png";
import { useState } from "react";

const useStyles = createStyles(theme => ({
  wrapper: {
    position: "relative",
    height: "100vh",
    background:
      "radial-gradient(circle, rgba(24,22,63,1) 0%, rgba(27,24,65,1) 35%);",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  modal: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    minWidth: 320,
    background: "#fff",
    padding: "14px 30px",
    borderRadius: 8,
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
    },
  },

  highlight: {
    color: "rgb(201, 247, 58)",
  },

  logo: {
    position: "absolute",
    top: "5%",
    left: "50%",
    marginLeft: "-120px",
  },
}));

export function Login() {
  const { classes } = useStyles();

  const [wallet, setWallet] = useState<"walletconnect" | "web3auth">(
    "walletconnect"
  );

  return (
    <div className={classes.wrapper}>
      <img className={classes.logo} src={logo} alt="Logo" width={240} />
      <div className={classes.modal}>
        <p
          style={{
            margin: 0,
          }}
        >
          Login with WalletConnect
        </p>
        <div>
          <WalletConnectButton label="WalletConnect" />
        </div>
        <p>
          Not an existing Web3 user? <ConnectButton label="Web3Auth" />
        </p>
      </div>
      {/* <Flex
        justify={"center"}
        align={"center"}
        mih={"100%"}
        direction={"column"}
        gap={30}
      >
        <Title className={classes.title} style={{ textAlign: "center" }}>
          <Text component="span" className={classes.highlight} inherit>
            Not an Existing Web3 User?
          </Text>
          <br />
          Use Unlimit to login!
        </Title>
        <div>
          <ConnectButton label={"Login with Web3Auth"} />{" "}
        </div>
        <Title className={classes.title} style={{ textAlign: "center" }}>
          <Text component="span" className={classes.highlight} inherit>
            Already an Existing Web3 User?
          </Text>
          <br />
          Use WalletConnect to Login!
        </Title>
        <div>
          <WalletConnectButton label="Login with WalletConnect" />{" "}
        </div>
      </Flex> */}
    </div>
  );
}
