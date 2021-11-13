import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
