-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: issuetracking
-- ------------------------------------------------------
-- Server version	5.7.25-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usercase`
--

DROP TABLE IF EXISTS `usercase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usercase` (
  `idcase` int(11) NOT NULL AUTO_INCREMENT,
  `assignee` int(11) DEFAULT NULL,
  `assigner` int(11) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `importance` varchar(255) DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idcase`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usercase`
--

LOCK TABLES `usercase` WRITE;
/*!40000 ALTER TABLE `usercase` DISABLE KEYS */;
INSERT INTO `usercase` VALUES (15,2,1,'t','dsd','ggfdg','dad','ddd','dad','grdg'),(16,2,1,'t','dsd','ggfdg','dad','ddd','dad','grdg'),(17,2,1,'t','dsd','ggfdg','dad','ddd','dad','grdg'),(18,1,2,'Norouzzadeh][94243065][Hw2]1.pdf',NULL,'dsad','اورژانسی','انتقاد','اورژانسی',NULL),(19,2,1,'Norouzadeh][94243065][bookreview]1.pdf',NULL,'asdf','متوسط','شکایت','متوسط',NULL),(20,2,1,'t','dsd','ggfdg','dad','ddd','dad','grdg'),(21,2,1,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'fdsf','معمولی','انتقاد','معمولی','-1'),(22,2,1,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'fdsf','معمولی','انتقاد','معمولی','-1'),(23,2,1,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','متوسط','پیشنهاد','متوسط','-1'),(24,2,1,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','متوسط','پیشنهاد','متوسط','-1'),(25,2,1,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','متوسط','پیشنهاد','متوسط','-1'),(26,2,1,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','متوسط','پیشنهاد','متوسط','-1'),(27,1,2,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','معمولی','شکایت','معمولی','-1'),(28,1,2,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','معمولی','شکایت','معمولی','-1'),(29,1,2,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','معمولی','شکایت','معمولی','-1'),(30,1,2,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','معمولی','شکایت','معمولی','-1'),(31,1,2,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','معمولی','شکایت','معمولی','-1'),(32,1,2,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','معمولی','شکایت','معمولی','-1'),(33,1,2,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'ds','پیشنهاد','شکایت','پیشنهاد','-1'),(34,1,2,'path\\[AtiyehNorouzzadeh][94243065][Hw2]1.pdf',NULL,'ff','معمولی','انتقاد','معمولی','-1'),(35,2,1,'path\\[AtiyehNorouzzadeh][94243065][article]1.docx',NULL,'dsad','معمولی','شکایت','معمولی','-1');
/*!40000 ALTER TABLE `usercase` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-23  1:49:24
