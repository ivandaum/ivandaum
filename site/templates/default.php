<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Freelance web developer based in Paris, France. Graduated in 2019 from interactive design and developement at Gobelins School.">
    <meta  name="og:locale" content="fr_FR">
    <meta  name="og:type" content="website">
    <meta  name="og:description" content="Freelance web developer based in Paris, France. Graduated in 2019 from interactive design and developement at Gobelins School.">
    <meta  name="og:url" content="https://ivandaum.dev">
    <meta  name="og:name" content="Ivan Daum — Web developer">
    <meta  name="og:title" content="Ivan Daum — Web developer">

    <title>Ivan Daum</title>
    <link href="<?= asset('dist/index.css') ?>" rel="stylesheet">
    <script type="text/javascript">
        var about = <?= $about ?>;
        var projects = <?= $projects ?>;
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-47064352-3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-47064352-3');
    </script>

</head>
<body>
    <div id="app"></div>
    <script type="text/javascript" src="<?= asset('dist/index.js') ?>"></script>
</body>