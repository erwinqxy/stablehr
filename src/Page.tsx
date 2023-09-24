import {
  createStyles,
  Title,
  Text,
  Container,
  Flex,
  Box,
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const useStyles = createStyles((theme, _params) => {
  return {
    title: {
      textAlign: "center",
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: -1,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      marginBottom: theme.spacing.xs,
      //   fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontFamily: "CustomFont",
      "@media (max-width: 520px)": {
        fontSize: 28,
      },

      "& img": {
        marginRight: 12,
      },
    },

    highlight: {
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    },
    description: {
      textAlign: "center",
      whiteSpace: "pre-line",
      fontFamily: "CustomFont",
      "@media (max-width: 520px)": {
        fontSize: theme.fontSizes.md,
      },
    },
  };
});

export interface DashboardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  docs?: string;
  icon?: any;
}

export function Page({
  children,
  title,
  description,
  docs,
  icon,
}: DashboardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

  return (
    <Flex
      direction={"column"}
      mih={"100%"}
      align={"center"}
      justify={"flex-start"}
      mt={30}
    >
      {matches && <ConnectButton />}
      <Container style={{ flex: 1, marginTop: 30 }}>
        <Box mb={50} style={{ textAlign: "center" }}>
          <Title className={classes.title}>
            {icon && (
              <img
                src={icon}
                alt="noun"
                width={48}
                style={{ borderRadius: 8 }}
              />
            )}
            {title}
          </Title>
          <Container p={0} size={650}>
            <Text size="lg" color="dimmed" className={classes.description}>
              {description}
            </Text>
          </Container>
          {docs && (
            <Anchor href={docs} target={"_blank"}>
              Check out the docs
            </Anchor>
          )}
        </Box>
        {children}
      </Container>
    </Flex>
  );
}
