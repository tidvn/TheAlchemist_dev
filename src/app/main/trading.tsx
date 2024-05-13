import * as React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import AdvancedTvChart from "~/components/app/Charts/AdvancedTvChart";
import { Text } from "~/components/ui/text";



export default function TradingScreen() {
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
    <View >
      {/* <Card className='w-full max-w-sm p-6 rounded-2xl'> */}
      <Text>Trading Screen</Text>
      <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
      {/* </Card> */}
    </View>
  );
}
