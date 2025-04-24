import React, { Component, ErrorInfo, ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Error Boundary to catch errors and display them
class ErrorBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Caught error:", error, errorInfo);
    this.setState({ errorInfo });

    // Log error to console in a more readable format
    console.group('%cApp Error', 'color:red; font-size:16px; font-weight:bold');
    console.error(error);
    console.error(errorInfo.componentStack);
    console.groupEnd();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          background: '#191724', // Rose Pine Base
          color: '#e0def4',     // Rose Pine Text
          fontFamily: 'sans-serif',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ color: '#eb6f92' }}>Something went wrong</h1>
          <details style={{ whiteSpace: 'pre-wrap', margin: '10px 0', cursor: 'pointer' }}>
            <summary style={{ 
              padding: '8px',
              background: '#1f1d2e', // Rose Pine Surface
              borderRadius: '4px',
              color: '#e0def4',     // Rose Pine Text
              fontWeight: 'bold',
              marginBottom: '10px'
            }}>
              View Error Details
            </summary>
            <pre style={{ 
              background: '#26233a', // Rose Pine Overlay
              padding: '15px', 
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '50vh',
              color: '#c4a7e7'      // Rose Pine Iris
            }}>
              {this.state.error }
              <hr/>
              {this.state.errorInfo }
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#c4a7e7', // Rose Pine Iris
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              color: '#191724',     // Rose Pine Base
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
) 