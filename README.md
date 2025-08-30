# Crypto Price Map

A React-based cryptocurrency dashboard application for tracking and visualizing cryptocurrency prices and historical data. Built with React, styled-components, and integrated with the CryptoCompare API for real-time price data and historical charts.

The application features a responsive dashboard with customizable favorite coins, interactive price charts with multiple time intervals, and a comprehensive coin selection interface with search functionality.

## Features

- **Real-time Price Tracking**: Live cryptocurrency prices for selected favorite coins
- **Interactive Charts**: Historical price data visualization with Highcharts integration
- **Customizable Favorites**: Select up to 10 favorite cryptocurrencies to track
- **Time Interval Selection**: View historical data by days, weeks, or months
- **Coin Search**: Search and filter through available cryptocurrencies
- **Responsive Design**: Modern UI with CSS Grid and styled-components
- **Local Storage**: Persistent user preferences and favorite coin selections
- **Coin Spotlight**: Detailed view of currently selected cryptocurrency

## Development Instructions

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crypto-price-map
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

**Development mode:**
```bash
npm start
```
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Production build:**
```bash
npm run build
```
Builds the app for production to the `build` folder.

**Testing:**
```bash
npm test
```
Launches the test runner in interactive watch mode.

## Project Structure

```
crypto-price-map/
├── public/
│   └── index.html              # Main HTML template
├── src/
│   ├── App/
│   │   ├── App.css            # Main application styles
│   │   ├── AppBar.js          # Navigation bar component
│   │   ├── AppLayout.js       # Main layout wrapper
│   │   ├── AppProvider.js     # Context provider for state management
│   │   └── index.js           # Main App component
│   ├── Dashboard/
│   │   ├── ChartSelect.js     # Time interval selector
│   │   ├── CoinSpotlight.js   # Featured coin display
│   │   ├── HighchartsConfig.js # Chart configuration
│   │   ├── HighchartsTheme.js # Chart theming
│   │   ├── PriceChart.js      # Historical price chart
│   │   ├── PriceGrid.js       # Price tiles grid layout
│   │   ├── PriceTile.js       # Individual price display tile
│   │   └── index.js           # Dashboard main component
│   ├── Settings/
│   │   ├── CoinGrid.js        # Grid of available coins
│   │   ├── CoinHeaderGrid.js  # Header for coin selection
│   │   ├── CoinTile.js        # Individual coin selection tile
│   │   ├── ConfirmButton.js   # Confirm favorites button
│   │   ├── Search.js          # Coin search functionality
│   │   ├── WelcomeMessage.js  # First-time user welcome
│   │   └── index.js           # Settings main component
│   ├── shared/
│   │   ├── CoinImage.js       # Cryptocurrency logo component
│   │   ├── Content.js         # Content wrapper component
│   │   ├── Page.js            # Page layout component
│   │   ├── Tile.js            # Reusable tile component
│   │   └── Styles.js          # Shared styled-components
│   ├── index.js               # React app entry point
│   └── serviceWorker.js       # PWA service worker
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Key Dependencies

- **React 16.5.2**: Core React library for UI components
- **styled-components**: CSS-in-JS styling solution
- **react-highcharts**: Interactive charting library integration
- **cryptocompare**: API client for cryptocurrency data
- **moment**: Date/time manipulation library
- **lodash**: Utility library for data manipulation
- **fuzzy**: Fuzzy search functionality for coin filtering

## Application Flow

1. **First Visit**: Users are directed to the Settings page to select favorite cryptocurrencies
2. **Coin Selection**: Browse and search through available coins, add/remove favorites (max 10)
3. **Dashboard**: View real-time prices, interactive charts, and coin spotlight
4. **Navigation**: Switch between Dashboard and Settings using the top navigation bar
5. **Data Persistence**: User preferences are saved to localStorage for future visits

## API Integration

The application integrates with the CryptoCompare API to fetch:
- **Coin List**: Available cryptocurrencies and their metadata
- **Real-time Prices**: Current USD prices for selected favorites
- **Historical Data**: Price history for chart visualization over different time intervals

## Styling Architecture

- **CSS Grid**: Used for responsive layouts in price grids and coin grids
- **styled-components**: Component-scoped styling with dynamic theming
- **Responsive Design**: Mobile-friendly layouts that adapt to different screen sizes

## State Management

The application uses React Context API through `AppProvider` for centralized state management:
- User preferences and favorite coins
- Current page navigation
- Cryptocurrency data and prices
- Chart time interval selection
- Search and filter states

## Local Storage

User data is persisted using localStorage:
- Favorite cryptocurrency selections
- Currently selected coin for detailed view
- First-visit status for onboarding flow
