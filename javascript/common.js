const headerHTML = `
<header class="header">
      <div class="container">
        <h1 onclick="window.location.href='../../index.html'" class="h1">
          <img src="/public/icon/ZN-LOGO.svg" alt="" />UXUI PORTFOLIO
        </h1>
        <div class="btn-container">
          <button
            onclick="window.location.href='works/list.html'"
            class="btn-page title-m"
            aria-label="WORKS"
          >
            WORKS(24)
          </button>
          <button onclick="window.location.href='../../about.html'"  class="btn-page title-m" aria-label="ABOUT">ABOUT</button>
        </div>
      </div>
    </header>`;

document.getElementById('header').innerHTML = headerHTML;
