// ---------- REMPLACER innerHTML POUR <template> ----------

const displayHeader = () => {
    let headerTag = document.querySelector('header');
    headerTag.innerHTML = 
        `<div class="header-brand">
            <a class="header-brand__logo" href="index.html">RETROCam</a>

            <nav class="header-brand__main-nav">
                <ul>
                    <li class="header-brand-item"><a href="#">À propos</a></li>
                    <li class="header-brand-item"><a href="#">F.A.Q.</a></li>
                    <li class="header-brand-item"><a href="#">Contactez-Nous</a></li>
                </ul>
            </nav>
        </div>

        <a href="cart.html" class="cart-icon" id="cart-icon"><i class="fas fa-shopping-cart"></i></a>`;
        
};

const displayFooter = () => {
    let footerTag = document.querySelector('footer');
    footerTag.innerHTML = 
        `<nav class="footer-nav">
            <ul>
                <li class="footer-nav__item"><a href="#">À propos</a></li>
                <li class="footer-nav__item"><a href="#">F.A.Q.</a></li>
                <li class="footer-nav__item"><a href="#">Contactez-Nous</a></li>
            </ul>
            <ul>
                <li class="footer-nav__item"><a href="#">C.G.V.</a></li>
                <li class="footer-nav__item"><a href="#">Mentions Légales</a></li>
                <li class="footer-nav__item"><a href="#">Politique de Confidentialité</a></li>
            </ul>
        </nav>
        <div class="footer-social">
            <a class="footer-social__icon" href=""><i class="fab fa-instagram"></i></a>
            <a class="footer-social__icon" href=""><i class="fab fa-pinterest"></i></a>
            <a class="footer-social__icon" href=""><i class="fab fa-facebook"></i></a>
            <a class="footer-social__icon" href=""><i class="fab fa-twitter"></i></a>
        </div>`;
};

displayHeader();
displayFooter();