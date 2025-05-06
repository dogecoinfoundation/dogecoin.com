+++
title = "Dogeathon Hackathons"
date = "2022-11-01"
aliases = ["dogeathon"]
draft = false

[_build]
  render = "false"
  list = "false" 
+++

<style>
:root {
  --card-bg-light: #ffffff;
  --card-bg-dark: #1e1e1e;
  --card-border-light: #e0e0e0;
  --card-border-dark: #333;
  --text-main-light: #1a1a1a;
  --text-main-dark: #f0f0f0;
  --text-muted-light: #555;
  --text-muted-dark: #ccc;
  --shadow-light: rgba(0, 0, 0, 0.05);
  --shadow-dark: rgba(0, 0, 0, 0.3);
}

body {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.hackathon-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: 1200px;
}

.hackathon-card {
  border: 1px solid var(--card-border-light);
  border-radius: 20px;
  padding: 1.5rem;
  background: var(--card-bg-light);
  box-shadow: 0 2px 8px var(--shadow-light);
  transition: transform 0.2s, box-shadow 0.3s;
  color: var(--text-main-light);
}

.hackathon-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.hackathon-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
}

.hackathon-card a {
  text-decoration: none;
  color: var(--text-main-light);
}

.hackathon-card p {
  margin: 0;
  color: var(--text-muted-light);
  font-size: 0.95rem;
}

@media (prefers-color-scheme: dark) {
  .hackathon-card {
    background: var(--card-bg-dark);
    border-color: var(--card-border-dark);
    color: var(--text-main-dark);
    box-shadow: 0 2px 5px var(--shadow-dark);
  }

  .hackathon-card a {
    color: var(--text-main-dark);
  }

  .hackathon-card p {
    color: var(--text-muted-dark);
  }
}
</style>

<div class="hackathon-list">
  <div class="hackathon-card">
    <h3><a href="/dogeathon-2025">Ericeira, Portugal</a></h3>
    <p>Date: July 22–24, 2022</p>
  </div>

  <div class="hackathon-card">
    <h3><a href="/dogeathon-2022">Victoria, Australia</a></h3>
    <p>Date: November 15–19, 2022</p>
  </div>
</div>
