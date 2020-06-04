<?php
    session_start();
    try
    {
        $_pseudo = $_POST['pseudo'];
        $_mdp = $_POST['password'];
        $_valeurfenetre= isset($_POST['valeurfenetre']);
        $_valeurarroseur= isset($_POST['valeurarroseur']);
        $_valeurbrumi= isset($_POST['valeurbrumi']);
        $_valeurchauffage= isset($_POST['valeurchauffage']);
        if(isset($_POST['fermer']))
                {
                    header('Location: index.php');
                }

        if(isset($_POST['connexion']))
        {
            if($_pseudo&&$_mdp)
            {
                $_BDD = new PDO('mysql:host=localhost;dbname=modulesihmfinale', "root", "");
                $req = "SELECT * from logs WHERE utilisateur ='$_pseudo' && mdp = '$_mdp'";
                $logs = $_BDD->prepare($req);
                $logs->execute();

                if($logs->rowcount() > 0)
                {
                    $_SESSION['logs'] = $_pseudo;
                    header("Location: index.php");
                }
                else
                {
                    echo "Les logs sont incorrectes";
                    header("Location: index.php");
                }
            }
            
            else
            {
                echo "Les champs ne sont pas tous remplis !";
                header("Location: index.php");
            }
        }

        if(isset($_POST['fenetre']))
        {
            $_BDD = new PDO('mysql:host=localhost;dbname=modulesihmfinale', "root", "");
            $req = "INSERT INTO modulesihmfinale . valeurs (fenetre, arroseur, brumisateur, chauffage) VALUES ('$_valeurfenetre', '', '', '')";
            $logs = $_BDD->prepare($req);
            $logs->execute();
        }

        if(isset($_POST['arroseur']))
        {
            $_BDD = new PDO('mysql:host=localhost;dbname=modulesihmfinale', "root", "");
            $req = "INSERT INTO modulesihmfinale . valeurs (fenetre, arroseur, brumisateur, chauffage) VALUES ('', '$_valeurarroseur', '', '')";
            $logs = $_BDD->prepare($req);
            $logs->execute();
        }

        if(isset($_POST['brumi']))
        {
            $_BDD = new PDO('mysql:host=localhost;dbname=modulesihmfinale', "root", "");
            $req = "INSERT INTO modulesihmfinale . valeurs (fenetre, arroseur, brumisateur, chauffage) VALUES ('', '', '$_valeurbrumi', '')";
            $logs = $_BDD->prepare($req);
            $logs->execute();
        }

        if(isset($_POST['chauffage']))
        {
            $_BDD = new PDO('mysql:host=localhost;dbname=modulesihmfinale', "root", "");
            $req = "INSERT INTO modulesihmfinale . valeurs (fenetre, arroseur, brumisateur, chauffage) VALUES ('', '', '', '$valeurchauffage')";
            $logs = $_BDD->prepare($req);
            $logs->execute();
        }
    }
    
    catch (PDOExeption $e)
    {
        print "Erreur !: " . $e->getMessafe();
        die();
    }  
?>