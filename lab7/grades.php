<!-- PHP code to establish connection with the localserver -->
<?php
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

// SQL query to select data from database
$sql = " SELECT * FROM students";
$result = $mysqli->query($sql);
$mysqli->close();

$mysqli = new mysqli($servername, $user,
				$password, $database);

// Checking for connections
if ($mysqli->connect_error) {
	die('Connect Error (' .
	$mysqli->connect_errno . ') '.
	$mysqli->connect_error);
}

$sql = " SELECT * FROM courses";
$result2 = $mysqli->query($sql);
$mysqli->close();

$mysqli = new mysqli($servername, $user,
				$password, $database);

// Checking for connections
if ($mysqli->connect_error) {
	die('Connect Error (' .
	$mysqli->connect_errno . ') '.
	$mysqli->connect_error);
}

$sql = " SELECT * FROM grades";
$result = $mysqli->query($sql);
$mysqli->close();
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
  <a class="active" href="grades.php">Grades</a>
  <a href="insert.php">Insert</a>
</div>
	<section>
		<h1>Lab 7 Database</h1>
		<!-- TABLE CONSTRUCTION -->
        <table>
			<tr>
				<th>ID</th>
				<th>Crn</th>
				<th>RIN</th>
				<th>Grade</th>
			</tr>
			<!-- PHP CODE TO FETCH DATA FROM ROWS -->
			<?php
				// LOOP TILL END OF DATA
				while($rows=$result->fetch_assoc())
				{
			?>
			<tr>
				<!-- FETCHING DATA FROM EACH
					ROW OF EVERY COLUMN -->
				<td><?php echo $rows['id'];?></td>
				<td><?php echo $rows['crn'];?></td>
				<td><?php echo $rows['RIN'];?></td>
				<td><?php echo $rows['grade'];?></td>
			</tr>
			<?php
				}
			?>
		</table>
	</section>
</body>

</html>
