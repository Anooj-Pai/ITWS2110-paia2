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

$sql = " SELECT * FROM courses";
$result = $mysqli->query($sql);

$sql2 = "SELECT c.title, COUNT(g.id) FROM courses c INNER JOIN grades g ON g.crn = c.crn GROUP BY g.crn;";
$result2 = $mysqli->query($sql2);

$sql3 = "SELECT c.title, AVG(g.grade) FROM courses c INNER JOIN grades g ON c.crn = g.crn GROUP BY c.crn;";
$result3 = $mysqli->query($sql3);
?>
<!-- HTML code to display data in tabular format -->
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Courses</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<nav>
<div class="topnav">
  <a href="index.php">Students</a>
  <a class="active" href="courses.php">Courses</a>
  <a href="grades.php">Grades</a>
  <a href="insert.php">Insert</a>
</div>
	<section>
		<h1>Courses</h1>
		<!-- TABLE CONSTRUCTION -->
        <table>
			<tr>
				<th>Crn</th>
				<th>Prefix</th>
				<th>Number</th>
				<th>Title</th>
                <th>Section</th>
                <th>Year</th>
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
				<td><?php echo $rows['crn'];?></td>
				<td><?php echo $rows['prefix'];?></td>
				<td><?php echo $rows['number'];?></td>
				<td><?php echo $rows['title'];?></td>
                <td><?php echo $rows['section'];?></td>
                <td><?php echo $rows['year'];?></td>
			</tr>
			<?php
				}
			?>
		</table>

		<h1>Average Grade of Each Course</h1>
		<table>
			<tr>
				<th>Title</th>
                <th>Students in Course</th>
			</tr>
			<!-- PHP CODE TO FETCH DATA FROM ROWS -->
			<?php
				// LOOP TILL END OF DATA
				while($rows3=$result3->fetch_assoc())
				{
			?>
			<tr>
				<!-- FETCHING DATA FROM EACH
					ROW OF EVERY COLUMN -->
				<td><?php echo $rows3['title'];?></td>
				<td><?php echo $rows3['AVG(g.grade)'];?></td>
			</tr>
			<?php
				}
			?>
		</table>

		<h1>Number of students in each course</h1>
		<table>
			<tr>
				<th>Title</th>
                <th>Students in Course</th>
			</tr>
			<!-- PHP CODE TO FETCH DATA FROM ROWS -->
			<?php
				// LOOP TILL END OF DATA
				while($rows2=$result2->fetch_assoc())
				{
			?>
			<tr>
				<!-- FETCHING DATA FROM EACH
					ROW OF EVERY COLUMN -->
				<td><?php echo $rows2['title'];?></td>
				<td><?php echo $rows2['COUNT(g.id)'];?></td>
			</tr>
			<?php
				}
			?>
		</table>
	</section>
</body>

</html>
