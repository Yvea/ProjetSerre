-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  jeu. 19 mars 2020 à 13:56
-- Version du serveur :  10.3.22-MariaDB-0+deb10u1
-- Version de PHP :  7.3.11-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projetserre`
--

-- --------------------------------------------------------

--
-- Structure de la table `Datalog`
--

CREATE TABLE `Datalog` (
  `ID` int(11) NOT NULL,
  `Heure` timestamp NOT NULL DEFAULT current_timestamp(),
  `Eventtype` enum('SensorData','Chauffage','Aeration','Arrosage','Brumisation','ConsigneTemp','ConsigneHumidite','AlerteMail','ConsignePlageHoraire') NOT NULL,
  `TempInt` float NOT NULL,
  `TempExt` float NOT NULL,
  `HumiditeAir` float NOT NULL,
  `HumiditeTerre` float NOT NULL,
  `Eventvalue` int(11) DEFAULT NULL,
  `ID_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ParametreRegulation`
--

CREATE TABLE `ParametreRegulation` (
  `Str_key` varchar(255) NOT NULL,
  `Value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `PlageHoraire`
--

CREATE TABLE `PlageHoraire` (
  `Heure_debut` time NOT NULL,
  `Heure_fin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `ID` int(11) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Login` varchar(255) NOT NULL,
  `Mdp` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Datalog`
--
ALTER TABLE `Datalog`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_user` (`ID_user`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Datalog`
--
ALTER TABLE `Datalog`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Datalog`
--
ALTER TABLE `Datalog`
  ADD CONSTRAINT `Datalog_ibfk_1` FOREIGN KEY (`ID_user`) REFERENCES `User` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
