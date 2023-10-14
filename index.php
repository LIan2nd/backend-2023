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
  <ol>
    <?php foreach($myArr as $allArr) { ?>
      <li><?= $allArr; ?></li>
    <?php } ?>
  </ol>
</body>
</html>