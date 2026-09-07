import './App.css'

function App() {
  return (
    <main className="login-page">
      <div className="login-aside" aria-hidden="true">
        <div className="brand-mark">PULSE<span>/</span>FIT</div>
        <div className="aside-copy">
          <p className="eyebrow">TRAIN WITH INTENTION</p>
          <h2>Your strongest self is built one session at a time.</h2>
          <div className="aside-line" />
          <p>Track your progress, book your next class, and keep moving forward.</p>
        </div>
        <div className="aside-number">01 <span>/ 04</span></div>
      </div>

      <section className="login-panel" aria-labelledby="login-title">
        <div className="mobile-brand brand-mark">PULSE<span>/</span>FIT</div>
        <div className="login-heading">
          <p className="eyebrow">WELCOME BACK</p>
          <h1 id="login-title">Ready when you are.</h1>
          <p>Sign in to continue your training journey.</p>
        </div>

        <form className="login-form">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />

          <div className="field-heading">
            <label htmlFor="password">Password</label>
            <a href="#forgot-password">Forgot password?</a>
          </div>
          <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />

          <button type="submit">Sign in <span aria-hidden="true">-&gt;</span></button>
        </form>

        <p className="signup-prompt">New to PulseFit? <a href="#create-account">Create an account</a></p>
        <p className="login-footer">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
      </section>
    </main>
  )
}

export default App
