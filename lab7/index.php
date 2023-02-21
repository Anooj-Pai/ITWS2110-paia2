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


if(isset($_POST['button1'])){
	// SQL query to select data from database
	$sql = "SELECT * FROM students ORDER BY RIN;";
	$result = $mysqli->query($sql);
}else if(isset($_POST['button2'])){
	$sql = "SELECT * FROM students ORDER BY RCSID;";
	$result = $mysqli->query($sql);
}else if(isset($_POST['button3'])){
	$sql = "SELECT * FROM students ORDER BY firstname;";
	$result = $mysqli->query($sql);
}else if(isset($_POST['button4'])){
	$sql = "SELECT * FROM students ORDER BY lastname;";
	$result = $mysqli->query($sql);
}else if(isset($_POST['button5'])){

}else{
	$sql = " SELECT * FROM students";
	$result = $mysqli->query($sql);
}

$sql2 = "SELECT * FROM students s INNER JOIN grades g ON g.RIN = s.RIN AND g.grade > 90;;";
$result2 = $mysqli->query($sql2);
?>
<!-- HTML code to display data in tabular format -->
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Students</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<div class="topnav">
  <a class="active" href="index.php">Students</a>
  <a href="courses.php">Courses</a>
  <a href="grades.php">Grades</a>
  <a href="insert.php">Insert</a>
</div>
	<section>
		<h1>Lab 7 Database</h1>
		<!-- TABLE CONSTRUCTION -->
		<table>
			<tr>
				<th>RIN</th>
				<th>RCSID</th>
				<th>First Name</th>
				<th>Last Name</th>
                <th>Alias</th>
                <th>Phone</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
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
				<td><?php echo $rows['RIN'];?></td>
				<td><?php echo $rows['RCSID'];?></td>
				<td><?php echo $rows['firstname'];?></td>
				<td><?php echo $rows['lastname'];?></td>
                <td><?php echo $rows['alias'];?></td>
                <td><?php echo $rows['phone'];?></td>
                <td><?php echo $rows['street'];?></td>
                <td><?php echo $rows['city'];?></td>
                <td><?php echo $rows['statevar'];?></td>
                <td><?php echo $rows['zip'];?></td>
			</tr>
			<?php
				}
			?>
		</table>
		<form method="post">
		<input type="submit" name="button1" class="button" value="Sort by RIN" />
		<input type="submit" name="button2" class="button" value="Sort by RCSID" />
		<input type="submit" name="button3" class="button" value="Sort by First Name" />
		<input type="submit" name="button4" class="button" value="Sort by Last Name" />
		</form>

		<h1>Students With Grades Above 90</h1>
		<!-- TABLE CONSTRUCTION -->
		<table>
			<tr>
				<th>RIN</th>
				<th>First Name</th>
				<th>Last Name</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
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
				<td><?php echo $rows2['RIN'];?></td>
				<td><?php echo $rows2['firstname'];?></td>
				<td><?php echo $rows2['lastname'];?></td>
                <td><?php echo $rows2['street'];?></td>
                <td><?php echo $rows2['city'];?></td>
                <td><?php echo $rows2['statevar'];?></td>
                <td><?php echo $rows2['zip'];?></td>
			</tr>
			<?php
				}
			?>
		</table>
	</section>
</body>

</html>
