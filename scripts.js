// Bayer 
// Advanced chart
// https://www.tradingview.com/widget/advanced-chart/

new TradingView.widget(
{
    "width": 580,
    "height": 300,
    "symbol": "XETR:BAYN",
    "interval": "D",
    "timezone": "Europe/Riga",
    "theme": "light",
    "style": "2",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_7ba58"
});

new TradingView.widget(
{
                    "width": 580,
                    "height": 300,
                    "symbol": "XETR:BAYN",
                    "interval": "M",
                    "timezone": "Europe/Riga",
                    "theme": "light",
                    "style": "2",
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6",
                    "enable_publishing": false,
                    "allow_symbol_change": true,
                    "container_id": "tradingview_7ba59"
});

/*
 Stock only
 https://www.tradingview.com/widget/symbol-overview/

            <script type="text/javascript">
            new TradingView.MediumWidget(
            {
                "symbols": [
                [
                    "Bayer AG",
                    "XETR:BAYN|1M"
                ]
                ],
                "chartOnly": false,
                "width": 600,
                "height": 300,
                "locale": "en",
                "colorTheme": "light",
                "gridLineColor": "#F0F3FA",
                "trendLineColor": "#2196F3",
                "fontColor": "#787B86",
                "underLineColor": "#E3F2FD",
                "isTransparent": false,
                "autosize": false,
                "container_id": "tradingview_7ba59"
            });
            </script>
*/