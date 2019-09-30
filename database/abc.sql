-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2017 at 03:48 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abc`
--
CREATE DATABASE IF NOT EXISTS `abc` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `abc`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `employee_id` int(8) NOT NULL AUTO_INCREMENT,
  `employee_type` varchar(200) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(40) DEFAULT NULL,
  `sex` varchar(30) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `mobile` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date_of_join` varchar(100) NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`employee_id`, `employee_type`, `first_name`, `last_name`, `sex`, `dob`, `mobile`, `email`, `username`, `password`, `date_of_join`) VALUES
(1, 'SUPER_ADMIN', 'RAKIN', 'SARDAR', 'MALE', '1980-06-04', 1918171716, 'rakin@gmail.com', 'rakin@gmail.com', 'rakin', 'June 3, 2017, 6:46 am'),
(2, 'SUPER_ADMIN', 'SAIFUR', 'RAHMAN', 'MALE', '1993-08-14', 1670865587, 'saifur1408@gmail.com', 'saifur1408@gmail.com', 'saifur', '2017-6-1'),
(3, 'ADMIN', 'SAFFANA', 'AKHTER', 'FEMALE', '1985-09-18', 1916647128, 'saffana@gmail.com', 'saffana@gmail.com', 'Saffana1', '2016-12-18'),
(4, 'ADMIN', 'MOSHIUR', 'RAHMAN', 'MALE', '1991-06-29', 1922424452, 'moshiur@gmail.com', 'moshiur@gmail.com', 'moshiur', '2016-12-18'),
(5, 'ADMIN', 'AMIR', 'HOSSAIN', 'MALE', '2017-12-31', 1918171615, 'amir@gmail.com', 'amir@gmail.com', 'Amir1', 'June 7, 2017, 5:23 am'),
(7, 'ADMIN', 'MAMUN', 'AHMED', 'MALE', '2017-12-31', 1988989811, 'mamun@gmail.com', 'mamun@gmail.com', 'Mamun1', 'June 7, 2017, 6:15 am'),
(8, 'ADMIN', 'SOHID', 'BABU', 'MALE', '1967-12-31', 1988787667, 'sohid@gmail.com', 'sohid@gmail.com', 'Sohid1', 'July 9, 2017, 11:02 pm'),
(9, 'ADMIN', 'FARUK', 'RAFAD', 'MALE', '2017-12-31', 1918171615, 'faruk@gmail.com', 'faruk@gmail.com', 'faruk@gmail.com', '2017-07-27 11:55:00'),
(11, 'ADMIN', 'HASIBUL ', 'HAQUE', 'MALE', '2017-12-31', 1911876543, 'hasibul@gmail.com', 'hasibul@gmail.com', 'Hasibul1', 'August 20, 2017, 4:50 pm');

-- --------------------------------------------------------

--
-- Table structure for table `login_record_admin`
--

DROP TABLE IF EXISTS `login_record_admin`;
CREATE TABLE IF NOT EXISTS `login_record_admin` (
  `employee_id` int(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_record_admin`
--

INSERT INTO `login_record_admin` (`employee_id`, `username`, `time`) VALUES
(3, 'saffana@gmail.com', '2017-06-05 10:06:19'),
(3, 'saffana@gmail.com', '2017-06-08 10:06:37'),
(3, 'saffana@gmail.com', '2017-06-18 03:06:36'),
(3, 'saffana@gmail.com', '2017-06-18 07:06:10'),
(3, 'saffana@gmail.com', '2017-06-19 12:06:20'),
(3, 'saffana@gmail.com', '2017-06-19 08:06:47'),
(3, 'saffana@gmail.com', '2017-06-19 09:06:20'),
(3, 'saffana@gmail.com', '2017-06-20 03:06:20'),
(3, 'saffana@gmail.com', '2017-06-20 03:06:25'),
(3, 'saffana@gmail.com', '2017-07-09 11:07:02'),
(3, 'saffana@gmail.com', '2017-07-09 11:07:55'),
(3, 'saffana@gmail.com', '2017-07-10 10:07:07'),
(3, 'saffana@gmail.com', '2017-07-10 10:07:35'),
(3, 'saffana@gmail.com', '2017-07-24 03:07:14'),
(3, 'saffana@gmail.com', '2017-08-20 12:08:51'),
(11, 'hasibul@gmail.com', '2017-08-20 04:08:27'),
(11, 'hasibul@gmail.com', '2017-08-20 05:08:22'),
(3, 'saffana@gmail.com', '2017-08-20 05:08:07'),
(3, 'saffana@gmail.com', '2017-08-21 01:08:23'),
(3, 'saffana@gmail.com', '2017-08-24 07:08:03'),
(3, 'saffana@gmail.com', '2017-08-24 09:08:53'),
(3, 'saffana@gmail.com', '2017-08-27 01:08:36'),
(3, 'saffana@gmail.com', '2017-08-29 03:08:14'),
(3, 'saffana@gmail.com', '2017-08-29 03:08:53'),
(3, 'saffana@gmail.com', '2017-08-29 04:08:23'),
(3, 'saffana@gmail.com', '2017-08-29 04:08:10'),
(3, 'saffana@gmail.com', '2017-08-29 04:08:56'),
(3, 'saffana@gmail.com', '2017-08-30 12:08:47');

-- --------------------------------------------------------

--
-- Table structure for table `login_record_user`
--

DROP TABLE IF EXISTS `login_record_user`;
CREATE TABLE IF NOT EXISTS `login_record_user` (
  `employee_id` int(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_record_user`
--

INSERT INTO `login_record_user` (`employee_id`, `username`, `time`) VALUES
(1, 'yasin@gmail.com', '2017-06-05 10:06:19'),
(1, 'yasin@gmail.com', '2017-06-08 10:06:37'),
(1, 'yasin@gmail.com', 'July 2, 2017, 2:14 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 2:17 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 3:27 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 3:30 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 3:33 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 3:34 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 4:03 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 4:05 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 4:05 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 4:07 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 4:10 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 4:18 pm'),
(1, 'yasin@gmail.com', 'July 2, 2017, 5:11 pm'),
(1, 'yasin@gmail.com', 'July 3, 2017, 11:08 am'),
(1, 'yasin@gmail.com', 'July 3, 2017, 11:12 am'),
(1, 'yasin@gmail.com', 'July 3, 2017, 11:37 am'),
(1, 'yasin@gmail.com', 'July 4, 2017, 10:40 am'),
(1, 'yasin@gmail.com', 'July 4, 2017, 11:12 am'),
(1, 'yasin@gmail.com', 'July 4, 2017, 11:31 am'),
(1, 'yasin@gmail.com', 'July 4, 2017, 1:46 pm'),
(1, 'yasin@gmail.com', 'July 4, 2017, 2:00 pm'),
(2, 'kazi@gmail.com', 'July 4, 2017, 2:09 pm'),
(1, 'yasin@gmail.com', 'July 4, 2017, 2:22 pm'),
(2, 'kazi@gmail.com', 'July 4, 2017, 2:24 pm'),
(1, 'yasin@gmail.com', 'July 4, 2017, 2:45 pm'),
(1, 'yasin@gmail.com', 'July 4, 2017, 3:08 pm'),
(1, 'yasin@gmail.com', 'July 4, 2017, 3:38 pm'),
(1, 'yasin@gmail.com', 'July 4, 2017, 3:38 pm'),
(2, 'kazi@gmail.com', 'July 4, 2017, 3:39 pm'),
(2, 'kazi@gmail.com', 'July 4, 2017, 5:44 pm'),
(1, 'yasin@gmail.com', 'July 6, 2017, 1:01 pm'),
(1, 'yasin@gmail.com', 'July 6, 2017, 4:57 pm'),
(2, 'kazi@gmail.com', 'July 6, 2017, 5:49 pm'),
(1, 'yasin@gmail.com', 'July 6, 2017, 10:04 pm'),
(1, 'yasin@gmail.com', 'July 6, 2017, 10:51 pm'),
(1, 'yasin@gmail.com', 'July 8, 2017, 10:28 am'),
(2, 'kazi@gmail.com', 'July 9, 2017, 10:43 am'),
(1, 'yasin@gmail.com', 'July 9, 2017, 10:46 am'),
(2, 'kazi@gmail.com', 'July 11, 2017, 10:51 am'),
(1, 'yasin@gmail.com', 'July 12, 2017, 5:32 am'),
(1, 'yasin@gmail.com', 'July 24, 2017, 3:25 pm'),
(1, 'yasin@gmail.com', 'August 20, 2017, 1:44 pm'),
(24, 'saifur1408@gmail.com', 'August 20, 2017, 1:46 pm'),
(1, 'yasin@gmail.com', 'August 20, 2017, 1:46 pm'),
(24, 'saifur1408@gmail.com', 'August 20, 2017, 2:01 pm'),
(24, 'saifur1408@gmail.com', 'August 20, 2017, 2:12 pm'),
(32, 'ajaira@gmail.com', 'August 20, 2017, 5:11 pm'),
(1, 'yasin@gmail.com', 'August 24, 2017, 9:06 am'),
(1, 'yasin@gmail.com', 'August 24, 2017, 9:59 am'),
(24, 'saifur1408@gmail.com', 'August 26, 2017, 10:18 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 1:05 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 1:06 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 1:07 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 2:35 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 2:53 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 2:59 pm'),
(17, 'fahim@gmail.com', 'August 27, 2017, 2:59 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 3:09 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 3:48 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 4:20 pm'),
(1, 'yasin@gmail.com', 'August 27, 2017, 4:21 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 4:26 pm'),
(24, 'saifur1408@gmail.com', 'August 27, 2017, 4:26 pm'),
(1, 'yasin@gmail.com', 'August 27, 2017, 4:27 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 7:48 am'),
(1, 'yasin@gmail.com', 'August 28, 2017, 7:48 am'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 11:10 am'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 11:16 am'),
(1, 'yasin@gmail.com', 'August 28, 2017, 11:16 am'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 11:21 am'),
(1, 'yasin@gmail.com', 'August 28, 2017, 11:22 am'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 11:35 am'),
(1, 'yasin@gmail.com', 'August 28, 2017, 11:42 am'),
(1, 'yasin@gmail.com', 'August 28, 2017, 12:18 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 12:18 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 12:18 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 12:28 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 2:54 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 2:55 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 3:12 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 3:13 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 3:52 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 4:19 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 4:22 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 4:36 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 9:39 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 9:43 pm'),
(24, 'saifur1408@gmail.com', 'August 28, 2017, 10:44 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 10:44 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 10:47 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 10:56 pm'),
(1, 'yasin@gmail.com', 'August 28, 2017, 11:18 pm'),
(24, 'saifur1408@gmail.com', 'August 29, 2017, 11:18 am'),
(24, 'saifur1408@gmail.com', 'August 29, 2017, 11:26 am'),
(24, 'saifur1408@gmail.com', 'August 29, 2017, 11:31 am'),
(24, 'saifur1408@gmail.com', 'August 29, 2017, 12:20 pm'),
(1, 'yasin@gmail.com', 'August 29, 2017, 12:55 pm'),
(24, 'saifur1408@gmail.com', 'August 29, 2017, 5:36 pm'),
(24, 'saifur1408@gmail.com', 'August 30, 2017, 12:22 pm'),
(24, 'saifur1408@gmail.com', 'August 30, 2017, 12:29 pm');

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
CREATE TABLE IF NOT EXISTS `sale` (
  `id` int(30) NOT NULL,
  `area` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `quantity` int(25) NOT NULL,
  `using_catagory` varchar(50) NOT NULL,
  `unit_price` int(30) NOT NULL,
  `market_price` int(30) NOT NULL,
  `miscellaneous` int(30) NOT NULL,
  `total` int(30) NOT NULL,
  `date` varchar(40) NOT NULL,
  `sale_no` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sale`
--

INSERT INTO `sale` (`id`, `area`, `name`, `quantity`, `using_catagory`, `unit_price`, `market_price`, `miscellaneous`, `total`, `date`, `sale_no`) VALUES
(1, 'BADDA', 'STOVE-4', 7, 'FAMILY', 500, 600, 150, 1950, 'July 1, 2017, 6:19 am', 1),
(1, 'HATIRJHEEL', 'STOVE-1', 11, 'FAMILY', 500, 500, 100, 600, 'July 1, 2017, 11:19 pm', 2),
(1, 'HATIRJHEEL', 'STOVE-4', 4, 'INDIVIDUALLY', 800, 800, 250, 3450, 'July 1, 2017, 11:29 pm', 3),
(2, 'MUGHDA', 'STOVE-6', 50, 'OTHERS', 500, 500, 100, 2600, 'July 3, 2017, 2:24 pm', 1),
(2, 'BADDA', 'STOVE-2', 5, 'INDIVIDUALLY', 600, 600, 150, 3150, 'July 4, 2017, 3:31 pm', 2),
(2, 'BADDA', 'STOVE-2', 2, 'INDIVIDUALLY', 500, 600, 150, 3150, 'July 4, 2017, 3:33 pm', 3),
(2, 'SAYDABAD', 'STOVE-3', 3, 'OTHERS', 700, 700, 200, 2300, 'July 4, 2017, 3:39 pm', 4),
(1, 'GANDARIA', 'STOVE-5', 2, 'INDIVIDUALLY', 700, 700, 100, 1500, 'July 6, 2017, 10:57 pm', 4),
(1, 'DOYAGANJ', 'STOVE-3', 8, 'OTHERS', 600, 700, 200, 5800, 'July 6, 2017, 11:07 pm', 5),
(1, 'GABTULI', 'STOVE-5', 2, 'FAMILY', 800, 900, 300, 1900, 'July 8, 2017, 3:50 pm', 6),
(1, 'DOYAGANJ', 'STOVE-5', 4, 'FAMILY', 900, 900, 300, 3900, 'August 24, 2017, 9:07 am', 7),
(1, 'MUGHDA', 'STOVE-2', 77, 'FAMILY', 600, 600, 150, 46350, 'August 24, 2017, 10:00 am', 8),
(1, 'JATRABARI', 'STOVE-5', 5, 'INDIVIDUALLY', 900, 900, 300, 4800, 'August 27, 2017, 4:44 pm', 9),
(1, 'SHAMOLY', 'STOVE-4', 2, 'FAMILY', 800, 800, 250, 1850, 'August 27, 2017, 4:47 pm', 10),
(1, 'GANDARIA', 'STOVE-5', 4, 'INDIVIDUALLY', 900, 900, 300, 3900, 'August 28, 2017, 11:23 am', 11),
(24, 'JATRABARI', 'STOVE-3', 15, 'FAMILY', 700, 700, 200, 10700, 'August 29, 2017, 11:19 am', 1),
(24, 'GANDARIA', 'STOVE-5', 10, 'FAMILY', 900, 900, 300, 9300, 'August 29, 2017, 11:23 am', 2);

-- --------------------------------------------------------

--
-- Table structure for table `stove_price`
--

DROP TABLE IF EXISTS `stove_price`;
CREATE TABLE IF NOT EXISTS `stove_price` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `market_price` int(30) NOT NULL,
  `miscellaneous` int(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stove_price`
--

INSERT INTO `stove_price` (`id`, `name`, `market_price`, `miscellaneous`) VALUES
(1, 'STOVE-1', 500, 100),
(2, 'STOVE-2', 600, 150),
(3, 'STOVE-3', 700, 200),
(4, 'STOVE-4', 800, 250),
(5, 'STOVE-5', 900, 300),
(6, 'STOVE-6', 1000, 350);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `employee_id` int(8) NOT NULL AUTO_INCREMENT,
  `employee_type` varchar(200) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(40) DEFAULT NULL,
  `sex` varchar(30) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `mobile` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date_of_join` varchar(100) NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`employee_id`, `employee_type`, `first_name`, `last_name`, `sex`, `dob`, `mobile`, `email`, `username`, `password`, `date_of_join`) VALUES
(1, 'USER', 'YASIN', 'SORKAR', 'MALE', '2016-12-31', 1918188881, 'yasin@gmail.com', 'yasin@gmail.com', 'yasin', 'June 8, 2017, 8:16 am'),
(2, 'USER', 'KAZI', 'AHAMED', 'MALE', '1958-12-30', 1918171615, 'kazi@gmail.com', 'kazi@gmail.com', 'Kazi1', 'June 18, 2017, 8:16 pm'),
(17, 'USER', 'FAHIM AHAMED', 'KHANDOKAR', 'MALE', '1992-12-31', 1911876787, 'fahim@gmail.com', 'fahim@gmail.com', 'Fahim1', 'July 9, 2017, 10:50 pm'),
(19, 'NGO', 'POPULAR NGO', '', 'COMMON', '2017-08-14', 1899876765, 'popular@gmail.com', 'popular@gmail.com', 'Popular1', 'July 9, 2017, 11:06 pm'),
(24, 'USER', 'SAIFUR', 'RAHMAN', 'MALE', '2017-12-31', 2147483647, 'saifur1408@gmail.com', 'saifur1408@gmail.com', 'saifur', '2017-07-27 11:06:12'),
(31, 'MANUFACTURER', 'Rakin', 'Sarder', 'MALE', '1992-02-01', 1706043850, 'tunchunairarko@gmail.com', 'tunchunairarko@gmail.com', 'ion', '2017-08-01 07:50:00'),
(32, 'VENDOR', 'AJAIRA BB ..', '0', '0', '0000-00-00', 1911876545, 'ajaira@gmail.com', 'ajaira@gmail.com', 'Ajaira1', 'August 20, 2017, 5:11 pm'),
(33, 'VENDOR', 'BATA', '0', '0', '0000-00-00', 1917161514, 'bata@gmail.com', 'bata@gmail.com', 'Bata11', 'August 27, 2017, 10:53 am'),
(34, 'VENDOR', 'koKO', '0', '0', '0000-00-00', 1670865587, 'kuddus@gmail.com', 'kuddus@gmail.com', 'Kuddus1', 'August 27, 2017, 12:10 pm'),
(35, 'USER', 'hallika', 'banu', 'MALE', '2017-12-31', 1670865587, 'hali@gmail.com', 'hali@gmail.com', 'Halika1', 'August 27, 2017, 12:12 pm'),
(36, 'MANUFACTURER', 'APPEX', ' ', '0', '0000-00-00', 1911817161, 'appex@gmail.com', 'appex@gmail.com', 'Appex1', 'August 27, 2017, 12:52 pm'),
(37, 'USER', 'KENU', 'BABU', 'MALE', '2017-12-31', 1911817161, 'kenu@gmail.com', 'kenu@gmail.com', 'Kenu11', 'August 27, 2017, 1:03 pm'),
(38, '0', 'UMBRELLA', ' ', '0', '0000-00-00', 1911876545, 'umbrella@gmail.com', 'umbrella@gmail.com', 'Umbrella1', 'August 29, 2017, 1:48 pm'),
(39, '0', 'AKASH', 'HALDER', 'MALE', '2017-12-31', 1670865587, 'akash@gmail.com', 'akash@gmail.com', 'Akash1', 'August 29, 2017, 1:57 pm'),
(40, 'MANUFACTURER', 'HP', ' ', '0', '0000-00-00', 1929282827, 'hp@gmail.com', 'hp@gmail.com', 'Hp@gmail1', 'August 29, 2017, 2:35 pm'),
(41, 'USER', 'YAKUB', 'ALI', 'MALE', '2017-12-31', 1670865587, 'ali@gmail.com', 'ali@gmail.com', 'Ali123', 'August 29, 2017, 2:36 pm'),
(42, 'MANUFACTURER', 'eufe', ' ', '0', '0000-00-00', 1670865588, 'saishssh@gmail.com', 'saishssh@gmail.com', 'Saifur1', 'August 30, 2017, 3:12 pm');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
