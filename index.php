<!------------------------------------------------------------->
<!------------------------------------------------------------->
<!----------------------- QUENTIN LUCAS ----------------------->
<!-------------------- PROJET FINAL : SERRE ------------------->
<!----------------- PAGE INDEX.PHP : ACCUEIL------------------>
<!------------------------------------------------------------->
<!------------------------------------------------------------->


<?php session_start(); ?>
<html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="style.css"/>
        <link rel="icon" href="faviconLAPRO.jpg"/>
        <script src="https://cdn.zingchart.com/zingchart.min.js"></script>
        <title>SERRE - LA PROVIDENCE</title>
    </head>

    <body class='fond'>
        <?php 
            if(isset($_SESSION['logs']))
            {
                include("menuadmin.php");
            }
            else
            {
                include("menu.php");
            }
        ?>
        
        <div class="presentation">
      <div class="texte">
        <h1 class="titre">BIENVENUE SUR LE SITE WEB DEDIER A LA SERRE DE LA PROVIDENCE</h1>
        <h3 class="explication">
          <p>Bienvenue sur la page de visualisation des états de la serre apartenant au l'établissement scolaire La Providence situé au 189 Boulevard de Saint-Quentin (80000 Amiens).</p>
          <p>Cette serre a été construite dans le but d'offrir à l'établissement la possibilité de faire pousser ses propres fruits et légumes.
            Ces derniers sont ainsi utiliés par a cantine de l'établissement afin d'améliorer la qualité des repas.</p>
          <p>La serre est dite "autonome". Cela signifie qu'elle est capable de mettre en œuvre un système de réchauffement ou de refroidissement de l'intérieur de la serre grâce à des actionneurs tel qu'un radiateur, un brumisateur, un arroseur, ainsi qu'un vérin qui ouvre ou ferme la fenêtre de la serre.
            L'activation ou la désactivation des actionneurs s'effectue grâce à un programme qui récupère et analyse les données relevées par les divers capteur d'humidité et de température positionné à l'intérieur et l'extérieur de la serre.</p>
          <p>Le système régule la température, l'humidité, ainsi que l'arrosage des plantations de la serre afin de les faire pousser dans les meilleures conditions possible nous permettant ainsi d'obtenir des fruits et légumes de très bonne qualité.</p>
        </h3>
      </div>
    </div>

    <div class="graph">
          <div id="myChart" class="chart--container">
            <a href="https://www.zingchart.com/" rel="noopener" class="zc-ref">Powered by ZingChart</a>
          </div>
        
          <script>
            ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // CHART CONFIG
            // -----------------------------
            let chartConfig = {
              type: 'line',
              backgroundColor: '#2C2C39',
              title: {
                text: "GRAPHIQUE DE TEMPERATURE ET D'HUMIDITE DE LA SERRE",
                adjustLayout: true,
                marginTop: '7px',
                fontColor: '#E3E3E5'
              },
              legend: {
                align: 'center',
                backgroundColor: 'none',
                borderWidth: '0px',
                item: {
                  cursor: 'hand',
                  fontColor: '#E3E3E5'
                },
                marker: {
                  type: 'circle',
                  borderWidth: '0px',
                  cursor: 'hand'
                },
                verticalAlign: 'top'
              },
              plot: {
                aspect: 'spline',
                lineWidth: '2px',
                marker: {
                  borderWidth: '0px',
                  size: '5px'
                }
              },
              plotarea: {
                margin: 'dynamic 70'
              },
              scaleX: {
                item: {
                  fontColor: '#E3E3E5'
                },
                lineColor: '#E3E3E5',
                minValue: 1459468800000,
                step: 'hour',
                transform: {
                  type: 'date',
                  all: '%h:%i:%s'
                },
                zooming: true,
                zoomTo: [0, 24]
              },
              scaleY: {
                guide: {
                  lineStyle: 'solid'
                },
                item: {
                  fontColor: '#E3E3E5'
                },
                lineColor: '#E3E3E5',
                minorGuide: {
                  alpha: 0.7,
                  lineColor: '#E3E3E5',
                  lineStyle: 'dashed',
                  lineWidth: '1px',
                  visible: true
                },
                minorTick: {
                  lineColor: '#E3E3E5'
                },
                minorTicks: 1,
                tick: {
                  lineColor: '#E3E3E5'
                }
              },
              crosshairX: {
                marker: {
                  alpha: 0.5,
                  size: '7px'
                },
                plotLabel: {
                  borderRadius: '3px',
                  multiple: true
                },
                scaleLabel: {
                  backgroundColor: '#53535e',
                  borderRadius: '3px'
                }
              },
              crosshairY: {
                type: 'multiple',
                lineColor: '#E3E3E5',
                scaleLabel: {
                  bold: true,
                  borderRadius: '3px',
                  decimals: 2,
                  fontColor: '#2C2C39',
                  offsetX: '-5px'
                }
              },
              shapes: [{
                type: 'rectangle',
                id: 'view_all',
                backgroundColor: '#53535e',
                borderColor: '#E3E3E5',
                borderRadius: '3px',
                borderWidth: '1px',
                cursor: 'hand',
                label: {
                  text: 'TOUT VOIR',
                  bold: true,
                  fontColor: '#E3E3E5',
                  fontSize: '12px'
                },
                width: '75px',
                height: '20px',
                x: '85%',
                y: '11%'
              }],
              tooltip: {
                borderRadius: '3px',
                borderWidth: '0px'
              },
              preview: {
                adjustLayout: true,
                borderColor: '#E3E3E5',
                label: {
                  fontColor: '#E3E3E5'
                },
                mask: {
                  backgroundColor: '#E3E3E5'
                }
              },
              series: [{
                  values: [1,2,3,10,80,50,35,20,55,14,60,30],
                  lineColor: '#E34247',
                  marker: {
                    backgroundColor: '#E34247'
                  }
                },
                {
                  values: [60,50,40,35,80,5,1,2,3,40,8,15,32,9],
                  lineColor: '#FEB32E',
                  marker: {
                    backgroundColor: '#FEB32E'
                  }
                }
              ]
            };
        
            // EVENTS
            // -----------------------------
            zingchart.bind('myChart', 'shape_click', function(p) {
              if (p.shapeid == 'view_all') {
                zingchart.exec(p.id, 'viewall');
              }
            })
        
            // RENDER CHARTS
            // -----------------------------
            zingchart.render({
              id: 'myChart',
              data: chartConfig,
              height: '100%',
              width: '100%',
            });
          </script>
    </div>
    </body>
</html>