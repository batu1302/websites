"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error reporting service (e.g., Sentry, LogRocket)
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-800">
            <div className="text-center space-y-4 px-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Etwas ist schiefgelaufen
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Bitte laden Sie die Seite neu oder kontaktieren Sie uns, wenn das Problem weiterhin besteht.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
              >
                Seite neu laden
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

