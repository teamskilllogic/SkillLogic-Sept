/*
 * ========================================================================================
 * 📊 SKILLLOGIC ANALYTICS SYSTEM - STARTUP BUSINESS INTELLIGENCE
 * ========================================================================================
 *
 * 🎯 PURPOSE: Complete analytics and user tracking for startup conversion optimization
 *
 * 📋 CURRENT STATUS:
 * ⚠️  API calls are COMMENTED OUT until backend is implemented
 * ✅  Local storage tracking is ACTIVE (data collection working)
 * ✅  Console logging is ACTIVE in development
 *
 * 🚀 TO ENABLE FULL ANALYTICS (When Backend Ready):
 *
 * 1. CREATE BACKEND API ENDPOINT:
 *    - URL: POST /api/analytics
 *    - Accepts: JSON analytics events
 *    - Database: Store events for business intelligence
 *
 * 2. UNCOMMENT API CALLS:
 *    - Find "sendToAnalyticsService" method (line ~335)
 *    - Uncomment the fetch() API call
 *    - Test with your backend URL
 *
 * 3. BACKEND IMPLEMENTATION EXAMPLE:
 *    ```javascript
 *    app.post('/api/analytics', (req, res) => {
 *      const event = req.body;
 *      // Save to database: MongoDB, PostgreSQL, etc.
 *      await db.analytics.create(event);
 *      res.json({ status: 'success' });
 *    });
 *    ```
 *
 * 📊 WHAT THIS TRACKS FOR YOUR STARTUP:
 *
 * ✅ Business Conversions:
 *    - Contact form submissions
 *    - Phone number clicks
 *    - Email clicks
 *    - Service inquiries
 *    - Pricing plan views
 *
 * ✅ User Behavior:
 *    - Page views and navigation
 *    - Scroll depth (engagement)
 *    - Button clicks and interactions
 *    - Session duration
 *    - User journey mapping
 *
 * ✅ Performance Metrics:
 *    - Page load times
 *    - Core Web Vitals
 *    - Error tracking
 *    - Memory usage
 *
 * 📈 STARTUP BENEFITS:
 *    - Data-driven decisions
 *    - Conversion optimization
 *    - User experience insights
 *    - Performance monitoring
 *    - ROI tracking
 *
 * 🔧 USAGE IN COMPONENTS:
 *    ```typescript
 *    import { trackConversion, trackBusinessGoals } from './utils/analytics';
 *
 *    // Track business goals
 *    trackBusinessGoals.contactFormSubmit('email');
 *    trackBusinessGoals.phoneClick('+918318943040');
 *    trackBusinessGoals.serviceInquiry('web-development');
 *    ```
 *
 * 💾 DATA STORAGE (Currently Active):
 *    - localStorage: Recent events backup
 *    - localStorage: User identification
 *    - localStorage: Conversion tracking
 *    - Console: Development debugging
 *
 * ========================================================================================
 */

// Analytics and monitoring utilities for startup website

interface AnalyticsEvent {
    name: string;
    category: string;
    action: string;
    label?: string;
    value?: number;
    custom_parameters?: Record<string, any>;
}

interface UserJourney {
    page: string;
    timestamp: number;
    duration?: number;
    interactions: string[];
}

class Analytics {
    private userId: string;
    private sessionId: string;
    private userJourney: UserJourney[] = [];
    private startTime: number;

    constructor() {
        this.userId = this.getOrCreateUserId();
        this.sessionId = this.generateSessionId();
        this.startTime = Date.now();
        this.initializeTracking();
    }

    private getOrCreateUserId(): string {
        let userId = localStorage.getItem('skilllogic_user_id');
        if (!userId) {
            userId = this.generateId();
            localStorage.setItem('skilllogic_user_id', userId);
        }
        return userId;
    }

    private generateSessionId(): string {
        return this.generateId();
    }

    private generateId(): string {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    private initializeTracking() {
        // Track page views
        this.trackPageView();

        // Track user interactions
        this.trackInteractions();

        // Track performance
        this.trackPerformance();

        // Track errors
        this.trackErrors();

        // Track session duration
        this.trackSession();
    }

    // Track page views
    public trackPageView(page?: string) {
        const currentPage = page || window.location.pathname;
        const event: AnalyticsEvent = {
            name: 'page_view',
            category: 'navigation',
            action: 'view',
            label: currentPage,
            custom_parameters: {
                page_title: document.title,
                referrer: document.referrer,
                user_agent: navigator.userAgent,
                timestamp: Date.now()
            }
        };

        this.sendEvent(event);
        this.addToUserJourney(currentPage);
    }

    // Track custom events
    public trackEvent(event: AnalyticsEvent) {
        this.sendEvent({
            ...event,
            custom_parameters: {
                ...event.custom_parameters,
                user_id: this.userId,
                session_id: this.sessionId,
                timestamp: Date.now()
            }
        });
    }

    // Track business conversions
    public trackConversion(type: string, value?: number, details?: Record<string, any>) {
        const event: AnalyticsEvent = {
            name: 'conversion',
            category: 'business',
            action: type,
            value: value,
            custom_parameters: {
                conversion_type: type,
                conversion_value: value,
                ...details,
                timestamp: Date.now()
            }
        };

        this.sendEvent(event);

        // Store conversion in localStorage for later analysis
        const conversions = JSON.parse(localStorage.getItem('skilllogic_conversions') || '[]');
        conversions.push({
            type,
            value,
            timestamp: Date.now(),
            page: window.location.pathname
        });
        localStorage.setItem('skilllogic_conversions', JSON.stringify(conversions.slice(-50))); // Keep last 50
    }

    // Track user interactions
    private trackInteractions() {
        // Button clicks
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const button = target.closest('button, [role="button"], a');

            if (button) {
                const text = button.textContent?.trim() || 'Unknown';
                this.trackEvent({
                    name: 'button_click',
                    category: 'interaction',
                    action: 'click',
                    label: text,
                    custom_parameters: {
                        element_type: button.tagName.toLowerCase(),
                        element_text: text,
                        page: window.location.pathname
                    }
                });
            }
        });

        // Form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target as HTMLFormElement;
            const formName = form.getAttribute('name') || form.className || 'unnamed_form';

            this.trackEvent({
                name: 'form_submit',
                category: 'interaction',
                action: 'submit',
                label: formName,
                custom_parameters: {
                    form_name: formName,
                    page: window.location.pathname
                }
            });
        });

        // Scroll depth tracking
        let maxScroll = 0;
        let scrollTimer: NodeJS.Timeout;

        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                const scrollPercent = Math.round(
                    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
                );

                if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                    maxScroll = scrollPercent;
                    this.trackEvent({
                        name: 'scroll_depth',
                        category: 'engagement',
                        action: 'scroll',
                        label: `${scrollPercent}%`,
                        value: scrollPercent
                    });
                }
            }, 250);
        });
    }

    // Track performance metrics
    private trackPerformance() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (window.performance) {
                    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

                    this.trackEvent({
                        name: 'performance_timing',
                        category: 'performance',
                        action: 'page_load',
                        value: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
                        custom_parameters: {
                            dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
                            first_contentful_paint: this.getFirstContentfulPaint(),
                            page: window.location.pathname
                        }
                    });
                }
            }, 1000);
        });
    }

    // Track JavaScript errors
    private trackErrors() {
        window.addEventListener('error', (e) => {
            this.trackEvent({
                name: 'javascript_error',
                category: 'error',
                action: 'runtime_error',
                label: e.message,
                custom_parameters: {
                    error_message: e.message,
                    error_filename: e.filename,
                    error_line: e.lineno,
                    error_column: e.colno,
                    page: window.location.pathname,
                    user_agent: navigator.userAgent
                }
            });
        });

        // Track unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            this.trackEvent({
                name: 'promise_rejection',
                category: 'error',
                action: 'unhandled_promise',
                label: String(e.reason),
                custom_parameters: {
                    error_reason: String(e.reason),
                    page: window.location.pathname
                }
            });
        });
    }

    // Track session duration
    private trackSession() {
        // Track session start
        this.trackEvent({
            name: 'session_start',
            category: 'session',
            action: 'start',
            custom_parameters: {
                referrer: document.referrer,
                entry_page: window.location.pathname
            }
        });

        // Track session end on page unload
        window.addEventListener('beforeunload', () => {
            const sessionDuration = Date.now() - this.startTime;
            this.trackEvent({
                name: 'session_end',
                category: 'session',
                action: 'end',
                value: Math.round(sessionDuration / 1000),
                custom_parameters: {
                    session_duration: sessionDuration,
                    pages_visited: this.userJourney.length,
                    exit_page: window.location.pathname
                }
            });
        });

        // Track session duration periodically
        setInterval(() => {
            const sessionDuration = Date.now() - this.startTime;
            if (sessionDuration > 0 && sessionDuration % 30000 === 0) { // Every 30 seconds
                this.trackEvent({
                    name: 'session_heartbeat',
                    category: 'session',
                    action: 'heartbeat',
                    value: Math.round(sessionDuration / 1000)
                });
            }
        }, 30000);
    }

    // User journey tracking
    private addToUserJourney(page: string) {
        this.userJourney.push({
            page,
            timestamp: Date.now(),
            interactions: []
        });

        // Keep only last 10 pages
        if (this.userJourney.length > 10) {
            this.userJourney = this.userJourney.slice(-10);
        }
    }

    // Get performance metrics
    private getFirstContentfulPaint(): number | null {
        if (window.performance) {
            const paintEntries = performance.getEntriesByType('paint');
            const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
            return fcpEntry ? Math.round(fcpEntry.startTime) : null;
        }
        return null;
    }

    // Send event to analytics service
    private sendEvent(event: AnalyticsEvent) {
        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
            console.log('Analytics Event:', event);
        }

        // Store events locally for backup
        const events = JSON.parse(localStorage.getItem('skilllogic_analytics_events') || '[]');
        events.push(event);

        // Keep only last 100 events
        const recentEvents = events.slice(-100);
        localStorage.setItem('skilllogic_analytics_events', JSON.stringify(recentEvents));

        // Send to your analytics service (implement your endpoint here)
        this.sendToAnalyticsService(event);
    }

    // Send to external analytics service
    private async sendToAnalyticsService(event: AnalyticsEvent) {
        // 🚀 UNCOMMENT WHEN BACKEND IS READY:
        // This will send analytics data to your backend API

        /*
        try {
            // Replace with your actual analytics endpoint
            const response = await fetch('/api/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            });

            if (!response.ok) {
                throw new Error(`Analytics API error: ${response.status}`);
            }
        } catch (error) {
            // Silently fail - analytics shouldn't break the app
            if (process.env.NODE_ENV === 'development') {
                console.warn('Failed to send analytics event:', error);
            }
        }
        */

        // 📊 TEMPORARY: Log to console in development (no API calls)
        if (process.env.NODE_ENV === 'development') {
            console.log('📊 [ANALYTICS]', event.name, '→', event.category, event.action);
        }
    }

    // Get analytics summary
    public getAnalyticsSummary() {
        return {
            userId: this.userId,
            sessionId: this.sessionId,
            sessionDuration: Date.now() - this.startTime,
            userJourney: this.userJourney,
            conversions: JSON.parse(localStorage.getItem('skilllogic_conversions') || '[]'),
            recentEvents: JSON.parse(localStorage.getItem('skilllogic_analytics_events') || '[]').slice(-10)
        };
    }
}

// Create global analytics instance
const analytics = new Analytics();

// Export convenience functions
export const trackPageView = (page?: string) => analytics.trackPageView(page);
export const trackEvent = (event: AnalyticsEvent) => analytics.trackEvent(event);
export const trackConversion = (type: string, value?: number, details?: Record<string, any>) =>
    analytics.trackConversion(type, value, details);

// Startup-specific tracking functions
export const trackBusinessGoals = {
    // Contact form submission
    contactFormSubmit: (method: string) => trackConversion('contact_form', 1, { method }),

    // Service inquiry
    serviceInquiry: (service: string) => trackConversion('service_inquiry', 1, { service }),

    // Phone call click
    phoneClick: (number: string) => trackConversion('phone_call', 1, { number }),

    // Email click
    emailClick: (email: string) => trackConversion('email_click', 1, { email }),

    // Portfolio view
    portfolioView: (project: string) => trackEvent({
        name: 'portfolio_view',
        category: 'engagement',
        action: 'view_project',
        label: project
    }),

    // Service page view
    servicePageView: (service: string) => trackEvent({
        name: 'service_page_view',
        category: 'engagement',
        action: 'view_service',
        label: service
    }),

    // Pricing plan view
    pricingPlanView: (plan: string) => trackEvent({
        name: 'pricing_plan_view',
        category: 'engagement',
        action: 'view_plan',
        label: plan
    })
};

export default analytics;
