module.exports = async function($) {
  $.page.title = 'Javascript Jamstack web app development framework'

  return /* html */`
    <style>
      main {
        padding: 2rem 0;
        text-align: center;
        max-width: 100%;
      }
      .intro {
        margin-bottom: 3rem;
        max-width: 600px;
        margin: 0 auto;
        padding: 0 0.5rem 2rem;
      }
      .github {
        padding-top: 1.5rem;
      }
      .why {
        margin-bottom: 4rem;
        background: #118080;
        color: white;
        padding: 2rem 0 3rem;
      }
      .action {
        margin-bottom: 4rem;
      }
    </style>
    <div class="intro">
      <img src="/img/waveorb-logo-full.svg" alt="waveorb-logo" height="174" style="min-height:174px">
      <h1>Create incredible applications</h1>
      <p>
        Javascript Jamstack web app development framework.
      </p>
      <div class="github">
        <img src="/img/github-badge.svg" alt="Github badge">
      </div>
      <div class="github-links">
        <a href="https://github.com/eldoy/waveorb" title="Source Code">Source Code</a>
        &nbsp; | &nbsp;
        <a href="https://github.com/eldoy/waveorb/issues" title="Report Issue">Report Issue</a>
      </div>
    </div>
    <div class="why">
      <h1>Why use Waveorb?</h1>
      <h3>Speed and availability</h3>
      <p>
        Go serverless with pre-built static HTML pages, fully Jamstack compliant.
      </p>
      <h3>Flexibility</h3>
      <p>
        Build web apps using HTML, Javascript and CSS, or just create a backend service.
      </p>
      <h3>Standard technologies</h3>
      <p>
        The simplicity of our technology stack makes sure your app never expires.
      </p>
      <h3>Ease of use</h3>
      <p>
        Integrate waveorb into your existing web site or build one from scratch.
      </p>
    </div>
    <div class="action">
      <h2>Ready to give it a try?</h2>
      <p>The platform is open source and totally free.</p>
      <p>
        <a class="button" href="/docs.html">Check out the docs</a>
      </p>
      <p class="learn-more">
        or learn more on <a href="/about.html">the about page</a>
      </p>
    </div>
    <div class="signature">
      Made in Norway with passion by <a href="https://eldoy.com" title="Eldøy Projects home page">Eldøy Projects</a>
    </div>
  `
}
