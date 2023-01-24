import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { worker } from './mocks/worker';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
