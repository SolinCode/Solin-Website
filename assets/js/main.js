if (localStorage.getItem('lang') === 'rus') {
    lang = {
        github: `GitHub`,
        projects: `Проекты`,
        news: `Twitter`,
        contact: `Связаться`,

        siteMap: `Карта сайта`,
        links: `Ссылки`,
        libraries: `Библиотеки`,

        designed: `Дизайнеры `,
        and: ` и `,
        coded: `Накодил `,

        donate: `Донат`
    }
}

else if (localStorage.getItem('lang') === 'fr') {
    lang = {
        github: `GitHub`,
        projects: `Projets`,
        news: `Twitter`,
        contact: `Contacts`,

        siteMap: `Plan du site`,
        links: `Liens`,
        libraries: `Bibliothèques`,

        designed: `Designers `,
        and: ` et `,
        coded: `Code `,

        donate: `faire un don `
    }
}

else {
    lang = {
        github: `GitHub`,
        projects: `Projects`,
        news: `Twitter`,
        contact: `Contact`,

        siteMap: `Site map`,
        links: `Links`,
        libraries: `Libraries`,

        designed: `Designed by `,
        and: ` and `,
        coded: `Coded `,

        donate: `Donate`
    }
}

header.innerHTML = `
<div class="container">
    <nav class="navbar">
        <a href="home.html">
            <div class="logo">
                <svg width="200px" class="logo logo-wide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 289.7 75.21"><g id="solin-logo-wide" data-name="solin-logo-wide"><path d="M56.5,13.65A16.89,16.89,0,0,0,51.85,7.7,22.16,22.16,0,0,0,44.4,3.8a32.85,32.85,0,0,0-10-1.4A37.36,37.36,0,0,0,22.75,4.05a24.65,24.65,0,0,0-8.5,4.6,19.11,19.11,0,0,0-5.2,7A21.75,21.75,0,0,0,7.3,24.4a18.22,18.22,0,0,0,1.6,8A17.63,17.63,0,0,0,13.1,38a19.62,19.62,0,0,0,6,3.6A30.75,30.75,0,0,0,26,43.4q7.4,1.1,10.55,3.2a6.68,6.68,0,0,1,3.15,5.9A8.89,8.89,0,0,1,36,60.05Q32.2,62.8,25.6,62.8q-6.1,0-9.15-2.7a9.54,9.54,0,0,1-3-7.5,20.74,20.74,0,0,1,.4-4.3l.4-1.7H1L.5,48.9a20.44,20.44,0,0,0-.4,2.7A22.6,22.6,0,0,0,0,54.2a22.31,22.31,0,0,0,1.5,8.2,18.24,18.24,0,0,0,4.55,6.65,21.65,21.65,0,0,0,7.75,4.5l.9.29,29.06-3.72a24.48,24.48,0,0,0,2-1.52,22.05,22.05,0,0,0,5.8-7.7,24.17,24.17,0,0,0,2-10.2q0-8.51-5.35-13T33.6,31.8q-6.6-1.1-9.55-3.1a6.28,6.28,0,0,1-2.95-5.5,6.8,6.8,0,0,1,1-3.7,8.24,8.24,0,0,1,2.7-2.65,12.68,12.68,0,0,1,3.9-1.55,20.69,20.69,0,0,1,4.5-.5c3.87,0,6.73.82,8.6,2.45a8,8,0,0,1,2.8,6.35,13.62,13.62,0,0,1-.3,2.7L44,27.6H57.2l.4-1.8a21,21,0,0,0,.4-2.5c.07-.73.1-1.47.1-2.2A17.43,17.43,0,0,0,56.5,13.65Z"/><path d="M113.12,34.6a17.94,17.94,0,0,0-4.45-6.3,20.31,20.31,0,0,0-6.85-4.05,25.27,25.27,0,0,0-8.7-1.45A33.26,33.26,0,0,0,81,25a28,28,0,0,0-9.8,6.4,30.44,30.44,0,0,0-6.55,10.25,37.11,37.11,0,0,0-2.4,13.75A19.13,19.13,0,0,0,66,67.28l44-5.64a30.37,30.37,0,0,0,2.68-5.89,40.13,40.13,0,0,0,2-13A20.53,20.53,0,0,0,113.12,34.6Zm-12.5,17.5a17.69,17.69,0,0,1-3.35,5.75,16.5,16.5,0,0,1-5.2,3.95,15.79,15.79,0,0,1-6.65,1.6,10.44,10.44,0,0,1-7.5-2.65C76.06,59,75.12,56.4,75.12,53a20,20,0,0,1,1.2-6.9,18.77,18.77,0,0,1,3.4-5.85,17.27,17.27,0,0,1,5.2-4.1,14.27,14.27,0,0,1,6.6-1.55A10.48,10.48,0,0,1,99,37.25c1.87,1.77,2.8,4.38,2.8,7.85A20.39,20.39,0,0,1,100.62,52.1Z"/><path d="M72.68,72.82a20.22,20.22,0,0,0,2.59,1.08,25.7,25.7,0,0,0,8.25,1.3,34.88,34.88,0,0,0,13.55-2.45,28.18,28.18,0,0,0,6.71-3.91Z"/><path d="M161,61.52,128.3,65.7a10.74,10.74,0,0,0,.81,3.35,9.54,9.54,0,0,0,2.35,3.3,7.11,7.11,0,0,0,.6.49h0l18.42-2.35h0l11.36-7.68Z"/><path d="M151.59,8.55a9.29,9.29,0,0,0-2.35-3.3,10.68,10.68,0,0,0-3.5-2.1,11.81,11.81,0,0,0-4.2-.75,15,15,0,0,0-4.1.6,13.94,13.94,0,0,0-4.1,2l-14.5,9.8,6.3,9.4,13.4-9.2,1,.7L129.12,59.19l13.07-1.67L152,16.4a16.48,16.48,0,0,0,.4-3.5A10.65,10.65,0,0,0,151.59,8.55Z"/><path d="M212.85,5.75a9,9,0,0,0-2-3,10.33,10.33,0,0,0-3-2A9.24,9.24,0,0,0,204.1,0a9.07,9.07,0,0,0-3.7.75,10.43,10.43,0,0,0-3,2,9,9,0,0,0-2.05,3,9.48,9.48,0,0,0-.75,3.75,9.48,9.48,0,0,0,.75,3.75,9,9,0,0,0,2.05,3,10.43,10.43,0,0,0,3,2,9.38,9.38,0,0,0,7.35,0,10.14,10.14,0,0,0,3.05-2,9,9,0,0,0,2-3,9.48,9.48,0,0,0,.75-3.75A9.29,9.29,0,0,0,212.85,5.75Z"/><path d="M214,54.73l-3.47.44L199.7,62.6l-1-.7,1.3-5.38L186.92,58.2l-.72,3a14.24,14.24,0,0,0-.4,3.5,8.52,8.52,0,0,0,.06,1.25l32.84-4.2Z"/><path d="M204.25,29a9.54,9.54,0,0,0-2.35-3.3,10.85,10.85,0,0,0-3.5-2.1,11.81,11.81,0,0,0-4.2-.75,15,15,0,0,0-4.1.6,13.7,13.7,0,0,0-4.1,2l-14.5,9.8,6.3,9.4,13.4-9.2,1,.7-3.7,15.49L201.56,50,204.7,36.8a14.24,14.24,0,0,0,.4-3.5A10.58,10.58,0,0,0,204.25,29Z"/><polygon points="232.07 69.7 231.2 73.8 243.8 73.8 245.02 68.04 232.07 69.7"/><path d="M279.05,26.6q-3.75-3.8-10.05-3.8a17.61,17.61,0,0,0-8.75,2.2,15.69,15.69,0,0,0-6.35,7.2h-1.8l1.7-8H241.7l-4.48,21.15,13.09-1.68A15.24,15.24,0,0,1,254,37.4a10.53,10.53,0,0,1,7.7-3.2,7.94,7.94,0,0,1,5.7,2,7.1,7.1,0,0,1,2.08,5l13.21-1.69c.07-.7.11-1.44.11-2.23Q282.8,30.39,279.05,26.6Z"/><polygon points="268.5 47.75 266.8 55.59 279.81 53.92 281.48 46.09 268.5 47.75"/><polygon points="235.83 51.93 234.17 59.77 247.13 58.11 248.79 50.27 235.83 51.93"/><path d="M285.58,62.85l-20.35,2.61a10,10,0,0,0,3.27,6.89,11,11,0,0,0,3.5,2.1,11.81,11.81,0,0,0,4.2.75,14.1,14.1,0,0,0,8.1-2.6l5.4-3.6Z"/></g></svg>
                <svg width="200px" class="logo logo-small"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.1 71.45"><g id="solin-logo-small" data-name="solin-logo-small"><path class="cls-1" d="M56.5,11.26a16.8,16.8,0,0,0-4.65-5.95,22,22,0,0,0-7.45-3.9A32.54,32.54,0,0,0,34.4,0,37.15,37.15,0,0,0,22.75,1.66a24.67,24.67,0,0,0-8.5,4.6,19,19,0,0,0-5.2,7A21.88,21.88,0,0,0,7.3,22a18.39,18.39,0,0,0,1.6,8,17.89,17.89,0,0,0,4.2,5.6,19.82,19.82,0,0,0,6,3.6A31.17,31.17,0,0,0,26,41q7.41,1.1,10.55,3.2a6.66,6.66,0,0,1,3.15,5.9A8.9,8.9,0,0,1,36,57.66q-3.8,2.75-10.4,2.75-6.09,0-9.15-2.7a9.56,9.56,0,0,1-3-7.5,21.31,21.31,0,0,1,.4-4.3l.4-1.7H1l-.5,2.3a22.24,22.24,0,0,0-.4,2.7,25,25,0,0,0-.1,2.6A22.35,22.35,0,0,0,1.5,60a18.45,18.45,0,0,0,4.55,6.65,22,22,0,0,0,7.75,4.5l.9.29,29.06-3.72a25,25,0,0,0,2-1.52,22.05,22.05,0,0,0,5.8-7.7,24,24,0,0,0,2-10.2q0-8.52-5.35-13T33.6,29.41q-6.6-1.11-9.55-3.1a6.29,6.29,0,0,1-2.95-5.5,6.86,6.86,0,0,1,1-3.7,8.24,8.24,0,0,1,2.7-2.65,12.63,12.63,0,0,1,3.9-1.55,20.09,20.09,0,0,1,4.5-.5c3.87,0,6.73.82,8.6,2.45a8,8,0,0,1,2.8,6.35,13.7,13.7,0,0,1-.3,2.7l-.3,1.3H57.2l.4-1.8a19.41,19.41,0,0,0,.4-2.5c.07-.73.1-1.47.1-2.2A17.22,17.22,0,0,0,56.5,11.26Z"/></g></svg>
            </div>
        </a>
        <div class="nav-links">
        <a class="nav-link" href="projects.html">${lang.projects}</a>
        <a class="nav-link" href="https://github.com/SolinCode">${lang.github}</a>
        <a class="nav-link" href="https://twitter.com/Solin4035">${lang.news}</a>
        <a class="nav-link" href="mailto:thesolincontact@gmail.com">${lang.contact}</a>
        </div>
    </nav>
</div>
`

footer.innerHTML = `
<div class="footer-curves">
    <div class="footer-curve-right">
        <div class="footer-circle-right"></div>
    </div>
    <div class="footer-curve-left">
        <div class="footer-circle-left"></div>
    </div>
    </div>
    <div class="footer-wrapper">
    <div class="container-small">
        <div class="footer-content">
            <div class="footer-faq">
                <dl class="footer-dl">
                    <dt>
                        <a class="footer-dt-title">${lang.siteMap}</a>
                    </dt>
                    <dt>
                        <a class="footer-dt-link" href="home.html">Home</a>
                    </dt>
                    <dt>
                        <a class="footer-dt-link" href="donate.html">Donate</a>
                    </dt>
                    <dt>
                        <a class="footer-dt-link" href="projects.html">Projects</a>
                    </dt>
                </dl>
                <dl class="footer-dl">
                    <dt>
                        <a class="footer-dt-title">${lang.links}</a>
                    </dt>
                    <dt>
                        <a class="footer-dt-link" href="mailto:thesolin@pm.me">Secure mail</a>
                    </dt>
                    <dt>
                        <a class="footer-dt-link" href="https://github.com/SolinCode/Solin-Website">Guthub page</a>
                    </dt>
                    <dt>
                        <a class="footer-dt-link" href="https://beta.solin.website/main/home.html">Beta branch</a>
                    </dt>
                </dl>
                <dl class="footer-dl">
                    <dt>
                        <a class="footer-dt-title">${lang.libraries}</a>
                    </dt>
                    <dt>
                        <a class="footer-dt-link" href="https://swiperjs.com/">Swiper</a>
                    </dt>
                </dl>
            </div>
            <div class="footer-credits">
                <div>
                    <span class="footer-credits-text">${lang.designed}<a class="footer-credits-link" href="https://twitter.com/Solin4035">Solin4035</a>${lang.and}<a class="footer-credits-link" href="https://vk.com/nik_the_vaga">Telephonkin</a></span>
                </div>
                <div>
                    <span class="footer-credits-text">${lang.coded}<a class="footer-credits-link" href="https://twitter.com/Solin4035">Solin4035</a></span>
                </div>
            </div>
            <div class="copyright-wrapper" style="width: 100%; display: flex; justify-content: center;">
                <span class="copyright">Copyright © Solin4035</span>
                <span class="copyright dash">-</span>
                <a class="copyright" href="donate.html">${lang.donate}</a>
            </div>
            <span onclick="modal.open()" class="settings material-symbols-outlined">settings</span>
        </div>
    </div>
</div>
`