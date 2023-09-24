import { Page } from "../Page";
import { ReactComponent as Noun852 } from "../resources/assets/images/noun852.svg";
import { ReactComponent as Noun849 } from "../resources/assets/images/noun849.svg";
import { ReactComponent as Noun837 } from "../resources/assets/images/noun837.svg";
import Noun123 from "../resources/assets/images/noun123.png";

import React, { useEffect, useState } from "react";
import fxData from "../resources/data/fx.json";
import nounIpfs from "../resources/data/ipfs_files.json";
import { ResponsiveLine } from "@nivo/line";
import BlackGlassesIcon from "../resources/assets/images/black160px.png";
import { createStyles } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMessage } from "../context/MessageContext";

interface INounWrapperProps {
  Noun: any;
  description: any;
  position?: "left" | "right";
}

const useStyles = createStyles((theme, _params) => {
  return {
    button: {
      alignSelf: "center",
      borderRadius: 8,
      width: "80%",
      background: "#ff0e0e",
      padding: "14px",
      cursor: "pointer",
      marginTop: 30,
      transition: "all 0.3s",
      fontFamily: "CustomFont",

      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
  };
});

const FxRateChart: React.FC = () => {
  const data = fxData.observations.map(({ FXUSDCAD, d }) => ({
    x: d.replaceAll("-", "/"),
    y: Number(FXUSDCAD.v),
  }));

  return (
    <ResponsiveLine
      data={[
        {
          id: "USD/CAD",
          color: "hsl(162, 70%, 50%)",
          data,
        },
      ]}
      colors="hsl(162, 70%, 50%)"
      enableArea
      areaOpacity={0.1}
      margin={{ top: 40, left: 58, bottom: 10 }}
      xScale={{
        type: "time",
        format: "%Y/%m/%d",
        useUTC: false,
        precision: "day",
      }}
      xFormat="time:%b %d, %Y"
      yScale={{
        type: "linear",
        min: "auto",
      }}
      axisBottom={null}
      axisLeft={{
        tickSize: 0,
        tickPadding: 24,
        format: value =>
          Number(value).toLocaleString("en", {
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
          }),
      }}
      enablePoints={false}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
    />
  );
};

const NounWrapper: React.FC<INounWrapperProps> = ({
  Noun,
  description,
  position = "left",
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 48,
        width: "100%",
      }}
    >
      {position === "left" ? (
        <>
          {Noun}
          {description}
        </>
      ) : (
        <>
          {description}
          {Noun}
        </>
      )}
    </div>
  );
};

const Graph: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: 100,
        marginBottom: 100,
      }}
      id="graph"
    >
      <p
        style={{
          marginBottom: 28,
          fontSize: 18,
        }}
      >
        Checkout the exchange rate between{" "}
        <span style={{ fontWeight: 600 }}>USDC</span> and{" "}
        <span style={{ fontWeight: 600 }}>QCAD</span>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h6
          style={{
            fontSize: 24,
            margin: "0 0 14px",
          }}
        >
          USDC / QCAD Chart
        </h6>
        <p
          style={{
            fontSize: 12,
          }}
        >
          1 USDC ={" "}
          <span
            style={{
              fontWeight: 400,
              fontSize: 18,
            }}
          >
            1.3464
          </span>{" "}
          QCAD
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: 300,
          marginBottom: 40,
          background: "#fff",
          borderRadius: 8,
          paddingLeft: 4,
          borderBottom: "4px #26D9A3 solid",
          borderRight: "4px #26D9A3 solid",
        }}
      >
        <FxRateChart />
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const { classes, cx } = useStyles();
  const { openInbox } = useMessage();

  const [nouns, setNouns] = useState<Array<SVGSVGElement> | null>(null);

  function shuffleArray(array: Array<string>) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements to shuffle
    }
    return array;
  }

  useEffect(() => {
    async function fetchIpfsNouns() {
      const addrArray = shuffleArray(nounIpfs.noun).splice(0, 3);
      const resArray: Array<any> = [];

      Promise.all(addrArray.map(addr => fetch(addr).then(res => res.text())))
        .then(responses => {
          for (const res of responses) {
            const holder = document.createElement("div");
            holder.innerHTML = res;
            const svg = holder.querySelector("svg");

            if (svg) {
              svg.style.borderRadius = "8px";
              svg.style.minWidth = "320px";
            }
            resArray.push(svg);
          }

          console.log("RES ARRAY", resArray);
        })
        .catch(err => {
          console.error(`Error fetching Noun from IPFS`, err);
        });
    }

    fetchIpfsNouns();
  }, []);

  const scrollToGraph = () => {
    var elmntToView = document.getElementById("graph");
    if (elmntToView) {
      elmntToView.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Page
      title="Home"
      description="Send cross-border payments to your employees cheaply, quickly, and securely"
    >
      <NounWrapper
        Noun={<img src={Noun123} alt="noun hero" width={450} />}
        description={
          <div
            style={{
              minWidth: 400,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              fontFamily: "CustomFont",
            }}
          >
            <h1
              style={{
                fontFamily: "LondrinaSolidShadow",
                fontSize: 56,
              }}
            >
              <span
                style={{
                  color: "#26D9A3",
                }}
              >
                Payrolls
              </span>{" "}
              have never been easier.
            </h1>
            <p>Onramp • Swap • Send • Offramp</p>
            <button className={cx(classes.button)} onClick={scrollToGraph}>
              Get Started
              <img
                src={BlackGlassesIcon}
                alt="black glasses"
                width={32}
                style={{
                  marginLeft: 12,
                }}
              />
            </button>
          </div>
        }
      />
      <Graph />
      <div
        style={{
          fontFamily: "LondrinaSolid",
          width: "fit-content",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 64,
          paddingBottom: 100,
        }}
      >
        <NounWrapper
          Noun={nouns?.[0]}
          description={
            <div
              style={{
                textAlign: "center",
                fontFamily: "CustomFont",
              }}
            >
              <h1
                style={{
                  fontFamily: "LondrinaSolidShadow",
                  fontSize: 48,
                }}
              >
                Onramp{" "}
                <span
                  style={{
                    color: "#26D9A3",
                  }}
                >
                  fiat
                </span>{" "}
                with a few clicks
              </h1>
              <p>Exchange fiat currency for cryptocurrencies</p>
              <Link to="/onramp">
                <button
                  className={cx(classes.button)}
                  style={{
                    width: "40%",
                  }}
                >
                  Explore Onramp
                  <img
                    src={BlackGlassesIcon}
                    alt="black glasses"
                    width={32}
                    style={{
                      marginLeft: 12,
                    }}
                  />
                </button>
              </Link>
            </div>
          }
        />
        <NounWrapper
          Noun={
            <Noun849
              style={{
                borderRadius: 8,
                minWidth: 320,
              }}
            />
          }
          description={
            <div
              style={{
                textAlign: "center",
                fontFamily: "CustomFont",
              }}
            >
              <h1
                style={{
                  fontFamily: "LondrinaSolidShadow",
                  fontSize: 48,
                }}
              >
                Discover the most{" "}
                <span
                  style={{
                    color: "#26D9A3",
                  }}
                >
                  efficient
                </span>{" "}
                path for token swaps
              </h1>
              <p
                style={{
                  padding: "0 80px",
                }}
              >
                Enables splits between different protocols and gas optimization
                to ensure the best possible exchange rates.
              </p>
              <Link to="/swap">
                <button
                  className={cx(classes.button)}
                  style={{
                    width: "30%",
                  }}
                >
                  Explore Swap
                  <img
                    src={BlackGlassesIcon}
                    alt="black glasses"
                    width={32}
                    style={{
                      marginLeft: 12,
                    }}
                  />
                </button>
              </Link>
            </div>
          }
          position="right"
        />
        <NounWrapper
          Noun={
            <Noun837
              style={{
                borderRadius: 8,
                minWidth: 320,
              }}
            />
          }
          description={
            <div
              style={{
                textAlign: "center",
                fontFamily: "CustomFont",
              }}
            >
              <h1
                style={{
                  fontFamily: "LondrinaSolidShadow",
                  fontSize: 48,
                }}
              >
                Connect with employees regarding{" "}
                <span
                  style={{
                    color: "#26D9A3",
                  }}
                >
                  transactions
                </span>{" "}
              </h1>
              <p
                style={{
                  padding: "0 80px",
                }}
              >
                Integrated Web3 messaging system over XMTP
              </p>
              <button
                className={cx(classes.button)}
                style={{
                  width: "40%",
                }}
                onClick={openInbox}
              >
                Open Message Inbox
                <img
                  src={BlackGlassesIcon}
                  alt="black glasses"
                  width={32}
                  style={{
                    marginLeft: 12,
                  }}
                />
              </button>
            </div>
          }
        />
      </div>
    </Page>
  );
};

export default HomePage;
