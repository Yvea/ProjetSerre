<html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="stylemenus.css"/>
    </head>

    <body>
        <div class="bandeau">
            <a href="http://www.la-providence.net/" class="centrageimglp"><img src="logoLAPRO.jpg" class="lp"/></a>
            <a href="http://progreenparty.fr/" class="centrageimgpgp"><img src="logoPGP.png" class ="pgp"/></a>
            <div class="centragebouton">
                <a href="#" id="form" onclick="AfficheForm()" class="connexion">CONNEXION</a>
            </div>        

            <script>
                var done = false;
                function AfficheForm() 
                {
                    if(!done)
                        {
                            document.getElementById("form").innerHTML = '<div class="FormConnexion"><form method="POST" action="action.php"><input type="text" name="pseudo" placeholder="PSEUDO"/><input type="submit" name="connexion" value="CONNEXION" class="espacebouton"/><p><input type="password" name="password" placeholder="MOT DE PASSE"/><input type="submit" name="fermer" value="FERMER" class="espacebouton"/></form></div>';
                            done = true;
                        }
                }
            </script>
        </div>
    </body>
</html>