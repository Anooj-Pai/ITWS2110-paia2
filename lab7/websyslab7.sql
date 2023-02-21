-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 08, 2022 at 01:47 AM
-- Server version: 10.6.7-MariaDB-2ubuntu1.1
-- PHP Version: 8.1.2-1ubuntu2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websyslab7`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `crn` int(11) NOT NULL,
  `prefix` varchar(4) NOT NULL,
  `number` smallint(4) NOT NULL,
  `title` varchar(255) NOT NULL,
  `section` varchar(10) DEFAULT NULL,
  `year` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`, `section`, `year`) VALUES
(11111, 'pre1', 1, 'Intro to IT', '1', '2022'),
(22222, 'pre2', 2, 'Calculus 1', '1', '2022'),
(33333, 'pre3', 3, 'Data Structures', '1', '2022'),
(44444, 'pre4', 1, 'Physics 1', '1', '2022');

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `crn` int(11) NOT NULL,
  `RIN` int(11) DEFAULT NULL,
  `grade` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`id`, `crn`, `RIN`, `grade`) VALUES
(1, 11111, 111111111, 99),
(2, 22222, 111111111, 84),
(3, 33333, 111111111, 90),
(4, 11111, 222222222, 73),
(5, 22222, 222222222, 85),
(6, 33333, 222222222, 93),
(7, 44444, 222222222, 65),
(8, 11111, 333333333, 76),
(9, 33333, 333333333, 96),
(10, 44444, 333333333, 85);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `RIN` int(9) NOT NULL,
  `RCSID` char(7) DEFAULT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `alias` varchar(100) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `statevar` varchar(100) DEFAULT NULL,
  `zip` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`RIN`, `RCSID`, `firstname`, `lastname`, `alias`, `phone`, `street`, `city`, `statevar`, `zip`) VALUES
(111111111, 'stu1', 'Joe', 'Brown', 'Jbrown', '1111111111', '1 brook rd', 'Troy', 'NY', '12180'),
(222222222, 'stu2', 'Shawn', 'Smith', 'Ssmith', '1111111112', '2 brook rd', 'Troy', 'NY', '12180'),
(333333333, 'stu3', 'Taylor', 'Jones', 'Tjones', '1111111113', '3 brook rd', 'Troy', 'NY', '12180'),
(444444444, 'stu4', 'AJ', 'Pai', 'Apai', '1111111114', '4 brook rd', 'Troy', 'NY', '12180');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`crn`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_crn` (`crn`),
  ADD KEY `FK_RIN` (`RIN`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`RIN`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `FK_RIN` FOREIGN KEY (`RIN`) REFERENCES `students` (`RIN`),
  ADD CONSTRAINT `FK_crn` FOREIGN KEY (`crn`) REFERENCES `courses` (`crn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
