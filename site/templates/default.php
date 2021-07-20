<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Freelance web developer based in Paris, France, graduated in 2019 from interactive design and developement at Gobelins School.">
    <meta data-n-head="ssr" name="og:locale" content="fr_FR">
    <meta data-n-head="ssr" name="og:type" content="website">
    <meta data-n-head="ssr" name="og:description" content="Freelance web developer based in Paris, France, graduated in 2019 from interactive design and developement at Gobelins School.">
    <meta data-n-head="ssr" name="og:url" content="https://ivandaum.dev">
    <meta data-n-head="ssr" name="og:name" content="Ivan Daum — Web developer">
    <meta data-n-head="ssr" name="og:title" content="Ivan Daum — Web developer">

    <title>Ivan Daum</title>
    <link href="<?= asset('dist/index.css') ?>" rel="stylesheet">
    <script type="text/javascript">
        var about = <?= $about ?>;
        var projects = <?= $projects ?>;
    </script>
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript" src="<?= asset('dist/index.js') ?>"></script>
</body>