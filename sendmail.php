<?php
 $errors = null;
preg_match('@^(?:http://)?([^/]+)@i',$_SERVER['HTTP_REFERER'] , $matches);
$host = $_SERVER['HTTP_HOST'];
if ($host != $matches[1]) {
    $errors = 1;
}
 $whom = $_POST["name"];
 $from = $_POST["email"];

 $subject = "Contact from ChrisBarrett.name " . $whom;
 $body = $_POST["message"] . "\n\n" . $from;
 
 if(strlen(trim($whom)) && strlen(trim($from)) && strlen(trim($body)))
 {
	 $to = "christophersbarrett@gmail.com";
	 if (mail($to, $subject, $body) && !$errors) {
		echo '{"success":"true","message":"Message sent successfully!"}';
	  } else {
	   echo '{"success":"false","message":"Message delivery failed!"}';
	  }
  }
  else
  {
  	echo '{"success":"false","message":"Message Fields Missing!"}';
  }
 ?>