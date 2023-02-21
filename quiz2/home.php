<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="./resources/script.js"></script>
    <title>Web Systems</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Sono:wght@300&display=swap');
        body {
            background: linear-gradient(-45deg, #f1faee, #a8dadc, #457b9d, #1d3557);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            height: 120vh;
            font-family: 'Sono', sans-serif;
        }
        a:link {
            color: black;
            background-color: transparent;
            text-decoration: none;
        }
        a:visited {
            color: pink;
            background-color: transparent;
            text-decoration: none;
        }
        a:hover {
            color: pink;
            background-color: transparent;
            text-decoration: underline;
        }
        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    </style>
</head>
<body>
<h1 class="text-center p-2">ITWS 2110</h1>
    <h2 class="text-left pl-4">Course Material</h2>
    <div class="d-inline-flex p-2">
        <table id="table" class="table"></table>
        <div class="container ml-5">
            <div class="row">
                <div class="col-sm">
                    <h3>Refresh Course Data!</h3>
                    <button class="btn btn-light btn-outline-info" onclick="window.location.reload();">Refresh</button>
                </div>
                <div class="col-sm">
                    <h3>Archive Course Data!</h3>
                    <form action="archive.php" method="POST">
                    <input class="btn btn-light btn-outline-info" type="submit" value="Archive">
                    </form>
                </div>
                <div class="col-sm">
                    <h3>Delete Course Data!</h3>
                    <form action="delete.php" method="POST">
                    <input class="btn btn-light btn-outline-info" type="submit" value="Delete">
                    </form>
                </div>
                <div class="col-sm">
                    <h3>Logout from Website!</h3>
                    <form action="logout.php" method="POST">
                    <input class="btn btn-light btn-outline-info" type="submit" value="Logout">
                    </form>
                </div>
            </div>
            <p id="infodisplay" class="text-center mt-5">Please select a lab or lecture from the left-hand nav bar.</p>
    </div>
    </div>
</body>

</html>