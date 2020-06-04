<!--------------------------------------------------------------->
<!--------------------------------------------------------------->
<!----------------------- QUENTIN LUCAS ------------------------->
<!-------------------- PROJET FINAL : SERRE --------------------->
<!-- PAGE PARAMETRAGE.HTML : ACCUEIL / FORMULAIRE DE CONNEXION -->
<!--------------------------------------------------------------->
<!--------------------------------------------------------------->

<?php session_start(); ?>
<!DOCTYPE html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="style.css"/>
        <link rel="icon" href="faviconLAPRO.jpg"/>
        <title>SERRE - LA PROVIDENCE</title>
    </head>
    <body class="fond">
    <?php 
            if(isset($_SESSION['logs']))
            {
                include("menuadmin.php");
        ?>

            <div class="gestion">
                <h1 class="titre">GESTION DE LA FENETRE</h1>
                <form method="POST" action="action.php">
                    <input type="text" id="valeur" placeholder="Ex: Heures:Minutes:Secondes" name="valeurfenetre"/>
                    <p>
                        <input type="submit" value="APPLIQUER" id="appliquer" name="fenetre"/>
                    <p>
                </form>
            </div>

            <div class="gestion">
                <h1 class="titre">GESTION DE L'ARROSEUR</h1>
                <form method="POST" action="action.php">
                    <input type="text" id="valeur" placeholder="Ex: Heures:Minutes:Secondes" name="valeurarroseur"/>
                    <p>
                        <input type="submit" value="APPLIQUER" id="appliquer" name="arroseur"/>
                    <p>
                </form>
            </div>

            <div class="gestion">
                <h1 class="titre">GESTION DU BRUMATISEUR</h1>
                <form method="POST" action="action.php"> 
                    <input type="text" id="valeur" placeholder="Ex: Heures:Minutes:Secondes" name="valeurbrumi"/>
                    <p>
                        <input type="submit" value="APPLIQUER" id="appliquer" name="brumi"/>
                    <p>
                </form>
            </div>

            <div class="gestion">
                <h1 class="titre">GESTION DU CHAUFFAGE</h1>
                <form method="POST" action="action.php">
                    <input type="text" id="valeur" placeholder="Ex: Heures:Minutes:Secondes" name="valeurchauffage"/>
                    <p>
                        <input type="submit" value="APPLIQUER" id="appliquer" name="chauffage"/>
                    <p>
                </form>
            </div>
            <?php
            }

            else
            {
                header('Location: index.php');
            }
        ?>
    </body>
</html>