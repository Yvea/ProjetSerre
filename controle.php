<!--------------------------------------------------------------->
<!--------------------------------------------------------------->
<!----------------------- QUENTIN LUCAS ------------------------->
<!-------------------- PROJET FINAL : SERRE --------------------->
<!------------------- PAGE : parametrage.php -------------------->
<!--------------------------------------------------------------->
<!--------------------------------------------------------------->
<?php session_start(); ?>
<!DOCTYPE html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="style.css"/>
        <link rel="stylesheet" href="stylemenus.css"/>
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
                    <h1 class="titre">CONTROLE DE LA FENETRE</h1>
                    <form method="POST" action="controle.php">
                        <input type="submit" value="OUVRIR" id="marche" name="ouvrirfenetre"/>
                        <?php 
                            if(isset($_POST['ouvrirfenetre']))
                                {
                                    echo"La fenêtre est ouverte";
                                }
                        ?>
                        <p>
                            <input type="submit" value="FERMER" id="arret" name="fermerfenetre"/><?php 
                            if(isset($_POST['fermerfenetre']))
                                {
                                    echo"La fenêtre est fermée";
                                }
                        ?>
                        <p>
                    </form>
                </div>

                <div class="gestion">
                    <h1 class="titre">CONTROLE DE L'ARROSEUR</h1>
                    <form method="POST" action="controle.php">
                        <input type="submit" value="MARCHE" id="marche" name="allumerarrosage"/>
                        <?php 
                            if(isset($_POST['allumerarrosage']))
                                {
                                    echo"L'arroseur est allumé";
                                }
                        ?>
                        <p>
                            <input type="submit" value="ARRET" id="arret" name="eteindrearroseur"/>
                            <?php 
                            if(isset($_POST['eteindrearroseur']))
                                {
                                    echo"L'arroseur est éteind";
                                }
                        ?>
                        <p>
                    </form>
                </div>

                <div class="gestion">
                    <h1 class="titre">CONTROLE DU BRUMATISEUR</h1>
                    <form method="POST" action="controle.php">
                        <input type="submit" value="MARCHE" id="marche" name="allumerbrumi"/>
                        <?php 
                            if(isset($_POST['allumerbrumi']))
                                {
                                    echo"Le brumisateur est allumé";
                                }
                        ?>
                        <p>
                            <input type="submit" value="ARRET" id="arret" name="eteindrebrumi"/>
                            <?php 
                            if(isset($_POST['eteindrebrumi']))
                                {
                                    echo"Le brumisateur est éteind";
                                }
                        ?>
                        <p>
                    </form>
                </div>

                <div class="gestion">
                    <h1 class="titre">CONTROLE DU CHAUFFAGE</h1>
                    <form method="POST" action="controle.php">
                        <input type="submit" value="MARCHE" id="marche" name="allumerchauffage"/>
                        <?php 
                            if(isset($_POST['allumerchauffage']))
                                {
                                    echo"Le chauffage est allumé";
                                }
                        ?>
                        <p>
                            <input type="submit" value="ARRET" id="arret" name="eteindrechauffage"/>
                            <?php 
                            if(isset($_POST['eteindrechauffage']))
                                {
                                    echo"Le chauffage est eteind";
                                }
                        ?>
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