<!DOCTYPE html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="stylemenus.css"/>
        <link rel="icon" href="faviconLAPRO.jpg"/>
        <title>SERRE - LA PROVIDENCE</title>
    </head>
    <body class="fond">
        <div class="bandeau">
            <table class="elementsBandeau">
                <tr>
                    <td class="logoLP"> <a href="http://www.la-providence.net/"><img src="logoLAPRO.jpg" class="lp"/></a></td>
                    <td class="logoPGP"><a href="http://progreenparty.fr/"><img src="logoPGP.png" class ="pgp"/></a></td>
                    <form method="POST" class="onglets">
                        <td class="onglets"><input type="submit" name="accueil" value="ACCUEIL" class="onglet"/></td>
                        <td class="onglets"><input type="submit" name="controle" value="CONTROLE" class="onglet"/></td>
                        <td class="onglets"><input type="submit" name="parametrage" value="PARAMETRAGE" class="onglet"/></td>
                        <td class="onglets"><input type="submit" name="deconnexion" value="DECONNEXION" class="onglet"/></td>
                    </form>
                </tr>
            </table>
        </div>

        <?php
            if(isset($_POST['accueil']))
            {
                header("Location: index.php");
            }

            if(isset($_POST['controle']))
            {
                header("Location: controle.php");
            }

            if(isset($_POST['parametrage']))
            {
                header("Location: parametrage.php");
            }

            if(isset($_POST['deconnexion']))
            {
                session_destroy();
                header("Location: index.php");
            }
        ?>
    </body>
</html>