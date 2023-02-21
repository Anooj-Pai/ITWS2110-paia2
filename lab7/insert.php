<!-- PHP code to establish connection with the localserver -->
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$user = 'phpmyadmin';
$password = 'Asdf5588';
$database = 'websyslab7';
$servername='localhost:3306';
$mysqli = new mysqli($servername, $user,
				$password, $database);

// Checking for connections
if ($mysqli->connect_error) {
	die('Connect Error (' .
	$mysqli->connect_errno . ') '.
	$mysqli->connect_error);
}

if(isset($_POST["substudent"])){
    $rin = $_POST['rin'];
    $rcsid = $mysqli->real_escape_string($_POST['rcsid']);
    $firstname = $mysqli->real_escape_string($_POST['firstname']);
    $lastname = $mysqli->real_escape_string($_POST['lastname']);
    $alias = $mysqli->real_escape_string($_POST['alias']);
    $phone = $mysqli->real_escape_string($_POST['phone']);
    $street = $mysqli->real_escape_string($_POST['street']);
    $city = $mysqli->real_escape_string($_POST['city']);
    $state = $mysqli->real_escape_string($_POST['state']);
    $zip = $mysqli->real_escape_string($_POST['zip']);
    $sql = "INSERT INTO `students` (`RIN`, `RCSID`, `firstname`, `lastname`, `alias`, `phone`, `street`, `city`, `statevar`, `zip`) VALUES ($rin, '$rcsid', '$firstname', '$lastname', '$alias', '$phone', '$street', '$city', '$state', '$zip');";
    if($mysqli->query($sql)){
        echo '<script>alert("Data Added")</script>';
    }else{
        echo '<script>alert("Data Not added")</script>';
    }

}else if(isset($_POST["subcourse"])){
    $crn = $_POST['crn'];
    $prefix = $mysqli->real_escape_string($_POST['prefix']);
    $number = $_POST['number'];
    $title = $mysqli->real_escape_string($_POST['title']);
    $section = $_POST['section'];
    $year = $mysqli->real_escape_string($_POST['year']);
    $sql = "INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`, `section`, `year`) VALUES ($crn, '$prefix', $number, '$title', $section, '$year');";
    if($mysqli->query($sql)){
        echo '<script>alert("Data Added")</script>';
    }else{
        echo '<script>alert("Data Not added")</script>';
    }
}else if(isset($_POST["subgrade"])){
    $crng = $_POST['crng'];
    $ring = $_POST['ring'];
    $grade = $_POST['grade'];
    $sql = "INSERT INTO `grades` (`crn`, `RIN`, `grade`) VALUES ($crng, $ring, $grade);";
    if($mysqli->query($sql)){
        echo '<script>alert("Data Added")</script>';
    }else{
        echo '<script>alert("Data Not added")</script>';
    }
};
?>
<!-- HTML code to display data in tabular format -->
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Grades</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<div class="topnav">
  <a href="index.php">Students</a>
  <a href="courses.php">Courses</a>
  <a href="grades.php">Grades</a>
  <a class="active" href="insert.php">Insert</a>
</div>
	<div class = "forms">
		<h1>Insert Data</h1>
		<!-- TABLE CONSTRUCTION -->
        <h3>Students</h3>
        <form action="insert.php" method="post">
			<p>
               <label for="rin">RIN:</label>
               <input type="number" name="rin" id="rin">
            </p>

			<p>
               <label for="rcsid">RCSID:</label>
               <input type="text" name="rcsid" id="rcsid">
            </p>
 
			<p>
               <label for="firstname">firstname:</label>
               <input type="text" name="firstname" id="firstname">
            </p>
    
			<p>
               <label for="lastname">lastname:</label>
               <input type="text" name="lastname" id="lastname">
            </p>
   
			<p>
               <label for="alias">Alias:</label>
               <input type="text" name="alias" id="alias">
            </p>

			<p>
               <label for="phone">Phone:</label>
               <input type="text" name="phone" id="phone">
            </p>

			<p>
               <label for="street">Street:</label>
               <input type="text" name="street" id="street">
            </p>

			<p>
               <label for="city">City:</label>
               <input type="text" name="city" id="city">
            </p>

			<p>
               <label for="state">State:</label>
               <input type="text" name="state" id="state">
            </p>

			<p>
               <label for="zip">Zip:</label>
               <input type="text" name="zip" id="zip">
            </p>
 
            <input type="submit" value="Submit" name="substudent">
         </form>


        <h3>Courses</h3>
         <form action="" method="post">
			<p>
               <label for="crn">CRN:</label>
               <input type="number" name="crn" id="crn">
            </p>

			<p>
               <label for="prefix">Prefix:</label>
               <input type="text" name="prefix" id="prefix">
            </p>
 
			<p>
               <label for="number">Number:</label>
               <input type="number" name="number" id="number">
            </p>
    
			<p>
               <label for="title">Title:</label>
               <input type="text" name="title" id="title">
            </p>
   
			<p>
               <label for="section">Section:</label>
               <input type="number" name="section" id="section">
            </p>

			<p>
               <label for="year">Year:</label>
               <input type="text" name="year" id="year">
            </p>

            <input type="submit" value="Submit" name="subcourse">
         </form>

        <h3>Grades</h3>
         <form action="" method="post">
			<p>
               <label for="crn">CRN:</label>
               <input type="number" name="crng" id="crn">
            </p>
 
			<p>
               <label for="rin">RIN:</label>
               <input type="number" name="ring" id="rin">
            </p>
    
			<p>
               <label for="grade">Grade:</label>
               <input type="number" name="grade" id="grade">
            </p>
   
            <input type="submit" value="Submit" name="subgrade">
         </form>
</div>
</body>

</html>
