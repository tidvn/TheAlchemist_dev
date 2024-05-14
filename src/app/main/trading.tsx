import { Image,TouchableWithoutFeedback, View } from "react-native";
import WebView from "react-native-webview";
import useTvChartStyles from "~/components/app/chart/TvChartsStyles";

export default function TradingScreen() {
  const styles = useTvChartStyles();
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>TradingView Widget</title>
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
      </head>
      <body>
      <div class="tradingview-widget-container" style="height:100%;width:100%">
      <div class="tradingview-widget-container__widget_btc_usdt" style="height:calc(100% - 32px);width:100%"></div>
        <script type="text/javascript" >
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = 'true';
        script.src= 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.innerHTML = JSON.stringify({
              symbol: "USDTBTC",
              width: "100%",
              height: "100%,
              locale: "en",
              interval: "60",
              theme: "dark",
              autosize: true,
              backgroundColor: "rgba(255, 255, 255, 0)",
              upColor: "#22ab94",
              downColor: "#f7525f",
              enable_publishing: false,
              hide_volume: true,
          });
          document.querySelector(".tradingview-widget-container__widget_btc_usdt")
        .appendChild(script)
        </script>
      </body>
    </html>`;

    return (
      <View style={styles.container}>
      <WebView
        source={{html: htmlContent, originWhitelist: ['*']}}
        scalesPageToFit={false}
        viewportContent={'width=device-width, user-scalable=no'}
      />
    </View>
    );
};


