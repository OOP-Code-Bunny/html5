<?php
header('Content-Type:text/event-stream');

for($i = 0; $i<10; $i++) {
  date_default_timezone_set("Asia/Shanghai");
  echo 'data:'.date('Y-m-d H-i-s');
  echo "\n\n";
  @ob_flush();@flush();
  sleep(1);
}

?>

