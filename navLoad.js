function addNav() {
    let nav = document.querySelector('.navbar')
    let html = `<div class="navbar">
                    <a href="../index.html">
                        <div class="logo-text">
                            Brainwave.io
                        </div>
                    </a>
                    <div class="nav-content">
                        <div class="nav-item"><a href="pages/pricing.html">Pricing</a></div>
                        <div class="nav-item"><a href="">Pages</a></div>
                        <div class="nav-item"><a href="">Support</a></div>
                        <div class="nav-item"><a href="">Contact</a></div>
                    </div>
                    <div class="get-started-nav">
                        <a href="pages/login.html">
                            <button id="gs-nav">Get started free</button>
                        </a>
                    </div>
                </div>`
    nav.innerHTML = html
}


window.onload = addNav