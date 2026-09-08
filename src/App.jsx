import { useEffect, useState } from 'react'
import './App.css'

function getCurrentView() {
  if (window.location.pathname === '/home') return 'home'
  if (window.location.pathname === '/signup') return 'signup'
  return 'login'
}

function App() {
  const [view, setView] = useState(() => getCurrentView())

  useEffect(() => {
    function handlePopState() {
      setView(getCurrentView())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigateTo(path, nextView) {
    window.history.pushState({}, '', path)
    setView(nextView)
  }

  function handleSignIn(event) {
    event.preventDefault()
    navigateTo('/home', 'home')
  }

  function handleCreateAccount(event) {
    event.preventDefault()
    navigateTo('/home', 'home')
  }

  function handleOpenSignup(event) {
    event.preventDefault()
    navigateTo('/signup', 'signup')
  }

  function handleOpenLogin(event) {
    event.preventDefault()
    navigateTo('/', 'login')
  }

  if (view === 'home') {
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

  if (view === 'signup') {
    return (
      <main className="signup-page">
        <section className="signup-card" aria-labelledby="signup-title">
          <div className="brand-mark" style={{ color: '#181611' }}>PULSE<span>/</span>FIT</div>
          <div className="login-heading" style={{ marginTop: '24px' }}>
            <p className="eyebrow">CREATE ACCOUNT</p>
            <h1 id="signup-title">Welcome to PulseFit.</h1>
            <p>Set up your profile to start training smarter.</p>
          </div>

          <form className="login-form signup-form" onSubmit={handleCreateAccount}>
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" name="fullName" type="text" autoComplete="name" placeholder="Jamie Doe" required />

            <label htmlFor="signup-email">Email address</label>
            <input id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />

            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" name="password" type="password" autoComplete="new-password" placeholder="Create a password" required />

            <label htmlFor="confirm-password">Confirm password</label>
            <input id="confirm-password" name="confirmPassword" type="password" autoComplete="new-password" placeholder="Confirm your password" required />

            <button type="submit">Create account <span aria-hidden="true">-&gt;</span></button>
          </form>

          <p className="signup-prompt">Already have an account? <a href="/" onClick={handleOpenLogin}>Sign in</a></p>
          <p className="login-footer">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
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

        <p className="signup-prompt">New to PulseFit? <a href="/signup" onClick={handleOpenSignup}>Create an account</a></p>
        <p className="login-footer">By continuing, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</p>
      </section>
    </main>
  )
}

export default App
