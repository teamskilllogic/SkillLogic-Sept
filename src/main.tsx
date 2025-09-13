import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializePWA } from './utils/pwa'
import { initializeAccessibility } from './utils/seo'
import { initializeSecurity } from './utils/security'
import { initializeDevTools } from './utils/devTools'
import analytics from './utils/analytics'

// Initialize all utilities for startup website
initializePWA();
initializeAccessibility();
initializeSecurity();
initializeDevTools();

// Initialize analytics tracking
analytics.trackPageView();

createRoot(document.getElementById("root")!).render(<App />);
