// theme.js — light/dark mode toggle for ExposeFact.com
// Inline init script (in <head>) sets data-theme before first paint to prevent flash.
// This file handles the toggle button behaviour.

(function () {
  function getTheme() {
    var stored = localStorage.getItem('ef-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ef-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  window.toggleTheme = function () {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  };

  // Set correct icon once DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = getTheme() === 'dark' ? '☀️' : '🌙';
  });
})();
