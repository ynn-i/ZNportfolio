const headerHTML = `
<header class="header">
  <div class="container">
    <h1 onclick="window.location.href='${
      window.location.pathname.endsWith('/') ||
      window.location.pathname.endsWith('index.html') ||
      window.location.pathname.endsWith('about.html')
        ? './index.html'
        : '../index.html'
    }'" class="h1">
      <img 
        src="${
          window.location.pathname.endsWith('/') ||
          window.location.pathname.endsWith('index.html') ||
          window.location.pathname.endsWith('about.html')
            ? './public/icon/ZN-LOGO.svg'
            : '../public/icon/ZN-LOGO.svg'
        }" 
        alt="" 
      />UXUI PORTFOLIO
    </h1>
    <div class="btn-container">
      <button
        onclick="window.location.href='${
          window.location.pathname.includes('works')
            ? './list.html'
            : './works/list.html'
        }'"
        class="btn-page title-m"
        aria-label="WORKS"
      >
        WORKS(24)
      </button>
      <button
        onclick="window.location.href='${
          window.location.pathname.includes('works')
            ? '../about.html'
            : './about.html'
        }'"
        class="btn-page title-m"
        aria-label="ABOUT"
      >
        ABOUT
      </button>
    </div>
  </div>
</header>`;

document.getElementById('header').innerHTML = headerHTML;
