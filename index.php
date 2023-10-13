<?php 
  $myArr = ["LIand", "Kiaa", "Dellon", "Ai", "Olip", "Acit"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hii</title>
</head>
<body>
  <h3>Semua Mahasiswa : </h3>
  <p><?php 
    $itteration = 1;
    foreach($myArr as $allArr) {
      echo $itteration, ". ", $allArr, "<br>";
      $itteration++;
    }
  ?></p>
</body>
</html>