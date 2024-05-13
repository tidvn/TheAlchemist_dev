import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
// import useTvChartStyles from './TvChartsStyles';
// import { useColorScheme } from '~/lib/useColorScheme';


const AdvancedTvChart = () => {
  // const styles = useTvChartStyles();
  // const htmlContent = `
  //   <!DOCTYPE html>
  //   <html>
  //     <head>
  //       <title>TradingView Widget</title>
  //       <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  //     </head>
  //     <body>
  //     <div class="tradingview-widget-container" style="height:100%;width:100%">
  //     <div class="tradingview-widget-container__widget_btcusdt1" style="height:calc(100% - 32px);width:100%"></div>
  //       <script type="text/javascript" >
  //       const script = document.createElement('script');
  //       script.type = 'text/javascript';
  //       script.async = 'true';
  //       script.src= 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
  //       script.innerHTML = JSON.stringify({
  //             symbol: "btcusdt",
  //             width: "100%",
  //             height: "100%",
  //             locale: "en",
  //             interval: "60",
  //             theme: "dark",
  //             autosize: true,
  //             backgroundColor: "rgba(255, 255, 255, 0)",
  //             upColor: "#22ab94",
  //             downColor: "#f7525f",
  //             enable_publishing: false,
  //             hide_volume: true,
  //         });
  //         document.querySelector(".tradingview-widget-container__widget_btcusdt1")
  //       .appendChild(script)
  //       </script>
  //     </body>
  //   </html>
  // `;

  const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width">
    <title>TradingView Chart</title>
    <script src="https://s3.tradingview.com/tv.js"></script>
    <style>
    .tv-header__title {
        font-size: 120px !important;
    }
    #tv_chart_container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 45px !important;
      }
    .tv-header__top-line {
        height: 250px !important;
    }
  </style>
  </head>
  <body>
    <div id="tv_chart_container"></div>
    <script>
      const tvChart = new TradingView.widget({
        symbol: 'BTCUSD',
        interval: '5',
        timezone: 'Etc/UTC',
        theme: 'dark',
        width: '100%',
        height: '99.5%',
        style: '1',
        theme: 'light',
        save_image: false,
        locale: 'en',
        hide_side_toolbar: false,
        toolbar_bg: '#f1f3f6',
        container_id: 'tv_chart_container'
      });
      tvChart.onChartReady(function() {
        tvChart.addCustomCSSFile('./tradingView.css')
      })
    </script>
  </body>
</html> `;

  return (
    <View>
      <WebView
        source={{ html: htmlContent }}
      // scalesPageToFit={false}
      // viewportContent={'width=device-width, user-scalable=no'}
      />
    </View>
  );
};

export default AdvancedTvChart;
