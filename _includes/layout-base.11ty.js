exports.data = {
    title: "Benicio Isandro Site"
}

exports.render = () => {

return `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${data.title}</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=IM+Fell+English+SC&family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet">
    <script src="https://use.fontawesome.com/9ed5569ec8.js"></script>
</head>

<body>
    <header class="nav-container">
        <nav class="navbar">
            <h1 id="navbar-logo">Benicio Isandro</h1>
            <div class="menu-toggle" id="mobile-menu">
                <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
            <div class="nav-menu">
                <a href="/" class="nav-link">About</a>
                <a href="/writing.html" class="nav-link">Writing</a>
                <a href="/contact.html" class="nav-link">Contact</a>
            </div>
        </nav>
    </header>

    <main class="content-container" >
        <section class="content about-content">
        <h1>{{title}}</h1>
            {{content}}
        </section>
    </main>

    <footer class="footer-container">
        <section class="footer-content">
            <section class="copyright">
                Copyright &copy; 2020-<script>document.write(new Date().getFullYear())</script> Benicio Isandro
            </section>
            <section class="social-media-links">
                <a href="mailto:benicio.isandro@gmail.com"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/benicioisandro"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.twitter.com/benicioisandro"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
            </section>
        </section>
    </footer>
    <script src="./app.js"></script>
</body>

</html>`;
};