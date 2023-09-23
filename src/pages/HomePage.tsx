import { Page } from "../Page";
import { ReactComponent as Noun852 } from "../resources/assets/images/noun852.svg";
import { ReactComponent as Noun849 } from "../resources/assets/images/noun849.svg";
import { ReactComponent as Noun837 } from "../resources/assets/images/noun837.svg";
import React from "react";
import fxData from "../resources/data/fx.json";
import { ResponsiveLine } from "@nivo/line";

interface INounWrapperProps {
  Noun: JSX.Element;
  description: any;
  position?: "left" | "right";
}

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
        marginBottom: 48,
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
    <div>
      <h6
        style={{
          fontSize: 24,
          margin: "0 0 14px",
        }}
      >
        USD / CAD Chart
      </h6>
      <div
        style={{
          width: "100%",
          height: 300,
          marginBottom: 40,
          background: "#fff",
          borderRadius: 8,
          paddingLeft: 4,
          borderBottom: "3px #26D9A3 solid",
        }}
      >
        <FxRateChart />
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  console.log(FxRateChart);

  return (
    <Page title="Home">
      <Graph />
      <div
        style={{
          fontFamily: "LondrinaSolid",
        }}
      >
        <NounWrapper
          Noun={
            <Noun852
              style={{
                borderRadius: 8,
              }}
            />
          }
          description={
            <div
              style={{
                minWidth: 320,
                textAlign: "center",
              }}
            >
              <p>Insert text here</p>
            </div>
          }
        />
        <NounWrapper
          Noun={
            <Noun849
              style={{
                borderRadius: 8,
              }}
            />
          }
          description={
            <div
              style={{
                minWidth: 320,
                textAlign: "center",
              }}
            >
              <p>Insert text here</p>
            </div>
          }
          position="right"
        />
        <NounWrapper
          Noun={
            <Noun837
              style={{
                borderRadius: 8,
              }}
            />
          }
          description={
            <div
              style={{
                minWidth: 320,
                textAlign: "center",
              }}
            >
              <p>Insert text here</p>
            </div>
          }
        />
      </div>
    </Page>
  );
};

export default HomePage;
