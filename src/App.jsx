import { useState } from 'react'
import './App.css'

function App() {
  const [isHome, setIsHome] = useState(() => window.location.pathname === '/home')

  function handleSignIn(event) {
    event.preventDefault()
    window.history.pushState({}, '', '/home')
    setIsHome(true)
  }

  if (isHome) {
    return (
      <main className="home-page">
        <header className="home-header">
          <div className="brand-mark">PULSE<span>/</span>FIT</div>
          <nav aria-label="Main navigation">
            <a className="active" href="/home">Dashboard</a>
            <a href="#workouts">Workouts</a>
            <a href="#progress">Progress</a>
          </nav>
          <button className="profile-button" type="button" aria-label="Open profile">JD</button>
        </header>

        <section className="home-content" aria-labelledby="home-title">
          <p className="eyebrow">MONDAY, SEPTEMBER 7</p>
          <h1 id="home-title">Good morning, Jamie.</h1>
          <p className="home-intro">Your next session is waiting. Keep your momentum going.</p>

          <div className="home-grid">
            <article className="next-workout">
              <div>
                <p className="card-label">NEXT WORKOUT</p>
                <h2>Upper body strength</h2>
                <p>45 min <span>/</span> Intermediate</p>
              </div>
              <button type="button">Start workout <span aria-hidden="true">-&gt;</span></button>
            </article>
            <article className="stat-card">
              <p className="card-label">THIS WEEK</p>
              <strong>3 <span>sessions</span></strong>
              <p>Keep it up. You are on track.</p>
            </article>
            <article className="stat-card progress-card">
              <p className="card-label">WEEKLY PROGRESS</p>
              <strong>72%</strong>
              <div className="progress-track"><span /></div>
              <p>4 of 5 sessions complete</p>
            </article>
          </div>
        </section>
      </main>
    )
  }

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
          <h1 id="login-title">Ready when you are..</h1>
          <p>Sign in to continue your training journey.</p>
        </div>

        <form className="login-form" onSubmit={handleSignIn}>
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
