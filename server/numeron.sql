-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 06, 2023 at 03:25 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `numeron`
--

-- --------------------------------------------------------

--
-- Table structure for table `bisection`
--

CREATE TABLE `bisection` (
  `id` int(100) NOT NULL,
  `fx` text NOT NULL,
  `xl` double NOT NULL,
  `xr` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `bisection`
--

INSERT INTO `bisection` (`id`, `fx`, `xl`, `xr`) VALUES
(1, '(x^4)-13', 1, 2),
(10, '(x^4)-13', 6, 7);

-- --------------------------------------------------------

--
-- Table structure for table `composimp`
--

CREATE TABLE `composimp` (
  `id` int(11) NOT NULL,
  `fx` text NOT NULL,
  `a` double NOT NULL,
  `b` double NOT NULL,
  `n` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `composimp`
--

INSERT INTO `composimp` (`id`, `fx`, `a`, `b`, `n`) VALUES
(1, '(4*(x^5))-(3*(x^4))+(x^3)-(6*x)+2', 2, 8, 4),
(2, '(x^7)+(2*x^3)-1', -1, 2, 6);

-- --------------------------------------------------------

--
-- Table structure for table `ddoh`
--

CREATE TABLE `ddoh` (
  `id` int(11) NOT NULL,
  `fx` text NOT NULL,
  `x` double NOT NULL,
  `h` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ddoh`
--

INSERT INTO `ddoh` (`id`, `fx`, `x`, `h`) VALUES
(1, 'e^x', 2, 0.25),
(2, '(e^(x/3))+x^2', -2.5, 0.1);

-- --------------------------------------------------------

--
-- Table structure for table `grap_one_newton`
--

CREATE TABLE `grap_one_newton` (
  `id` int(11) NOT NULL,
  `fx` text NOT NULL,
  `x` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `grap_one_newton`
--

INSERT INTO `grap_one_newton` (`id`, `fx`, `x`) VALUES
(1, '(x+7)/(x+1)', 1),
(2, '(43*x)-180', 1),
(3, '(x^2)-7', 1);

-- --------------------------------------------------------

--
-- Table structure for table `interextra`
--

CREATE TABLE `interextra` (
  `id` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `x` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fx` text NOT NULL,
  `xfind` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `interextra`
--

INSERT INTO `interextra` (`id`, `size`, `x`, `fx`, `xfind`) VALUES
(1, 5, '[0,20000,40000,60000,80000]', '[9.81,9.7487,9.6879,9.6879,9.5682]', 42235),
(2, 5, '[2,4,6,8,10]', '[9.5,8,10.5,39.5,72.5]', 4.5);

-- --------------------------------------------------------

--
-- Table structure for table `matrix`
--

CREATE TABLE `matrix` (
  `id` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `mat` text NOT NULL,
  `b` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `matrix`
--

INSERT INTO `matrix` (`id`, `size`, `mat`, `b`) VALUES
(1, 3, '[[-2,3,1],[3,4,-5],[1,-2,1]]', '[9,0,-4]');

-- --------------------------------------------------------

--
-- Table structure for table `matrixiter`
--

CREATE TABLE `matrixiter` (
  `id` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `mat` text NOT NULL,
  `x` text NOT NULL,
  `b` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `matrixiter`
--

INSERT INTO `matrixiter` (`id`, `size`, `mat`, `x`, `b`) VALUES
(1, 4, '[[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]]', '[0,0,0,0]', '[12,17,14,7]');

-- --------------------------------------------------------

--
-- Table structure for table `multiregress`
--

CREATE TABLE `multiregress` (
  `id` int(11) NOT NULL,
  `xn` int(11) NOT NULL,
  `sizedata` int(11) NOT NULL,
  `xmat` text NOT NULL,
  `fx` text NOT NULL,
  `xfind` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `multiregress`
--

INSERT INTO `multiregress` (`id`, `xn`, `sizedata`, `xmat`, `fx`, `xfind`) VALUES
(1, 3, 7, '[[1,0,2,3,4,2,1],[0,1,4,2,1,3,6],[1,3,1,2,5,3,4]]', '[4,-5,-6,0,-1,-7,-20]', '[1,1,1]');

-- --------------------------------------------------------

--
-- Table structure for table `polyregress`
--

CREATE TABLE `polyregress` (
  `id` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `x` text NOT NULL,
  `fx` text NOT NULL,
  `m` int(11) NOT NULL,
  `xfind` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `polyregress`
--

INSERT INTO `polyregress` (`id`, `size`, `x`, `fx`, `m`, `xfind`) VALUES
(1, 9, '[10,15,20,30,40,50,60,70,80]', '[5,9,15,18,22,30,35,38,43]', 2, 65);

-- --------------------------------------------------------

--
-- Table structure for table `secant`
--

CREATE TABLE `secant` (
  `id` int(11) NOT NULL,
  `fx` text NOT NULL,
  `x0` double NOT NULL,
  `x1` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `secant`
--

INSERT INTO `secant` (`id`, `fx`, `x0`, `x1`) VALUES
(0, '(x^2)-7', 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bisection`
--
ALTER TABLE `bisection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `composimp`
--
ALTER TABLE `composimp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ddoh`
--
ALTER TABLE `ddoh`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grap_one_newton`
--
ALTER TABLE `grap_one_newton`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interextra`
--
ALTER TABLE `interextra`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `matrix`
--
ALTER TABLE `matrix`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `matrixiter`
--
ALTER TABLE `matrixiter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `multiregress`
--
ALTER TABLE `multiregress`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `polyregress`
--
ALTER TABLE `polyregress`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bisection`
--
ALTER TABLE `bisection`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `composimp`
--
ALTER TABLE `composimp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ddoh`
--
ALTER TABLE `ddoh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `grap_one_newton`
--
ALTER TABLE `grap_one_newton`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `interextra`
--
ALTER TABLE `interextra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `matrix`
--
ALTER TABLE `matrix`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `matrixiter`
--
ALTER TABLE `matrixiter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `multiregress`
--
ALTER TABLE `multiregress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `polyregress`
--
ALTER TABLE `polyregress`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
