<?php 

declare(strict_types=1);
require('dbconnect.php');


//why?
$name4 = '-';
$phone4= '-';



// All the post request of the variables
$first_name   		 = checkName($_POST['first_name']);	
$last_name  		 = checkName($_POST['last_name']);	
$email   			 = checkEmail($_POST['email']);
$phone  			 = checkPhone($_POST['phone']);
$university   		 = checkName($_POST['university']);
$reg   				 = checkReg($_POST['reg']);
$event_name  	 	= $_POST['event_name'];
$name0  			 = checketcName($_POST['name0']);
$name1   			 = checketcName($_POST['name1']);
$name2   			 = checketcName($_POST['name2']);
$name3  			 = checketcName($_POST['name3']);
$phone0   			 = checketcPhone($_POST['phone0']);
$phone1   			 = checketcPhone($_POST['phone1']);
$phone2   			 = checketcPhone($_POST['phone2']);
$phone3  			 = checketcPhone($_POST['phone3']);
$email0   			 = checketcEmail($_POST['email0']);
$email1   			 = checketcEmail($_POST['email1']);
$email2   			 = checketcEmail($_POST['email2']);
$email3   			 = checketcEmail($_POST['email3']);





function checkName(string $name): string{
	global $db_conx;
	$name = filter_var($name, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	if(!preg_match("/^[a-zA-Z'-]+$/",$name)) 
		die ("invalid first name");
	else
		return mysqli_real_escape_string($db_conx,$name); 
}

function checkEmail(string $email): string{
	global $db_conx;
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) 
		return mysqli_real_escape_string($db_conx, $email);
	else 
		die("invalid email");	
}


function checkPhone(string $phone): string{
	global $db_conx;
	$phone = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
	return mysqli_real_escape_string($db_conx,$phone);
}



function checkReg(string $reg): string{
	global $db_conx;
	if("" ==trim($reg))
		die("invalid reg");
	else
		return mysqli_real_escape_string($db_conx,$reg);
}



function checketcName(string $name): string{
	global $db_conx;
	$name = filter_var($name, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	if(""== trim($name))
		return "-";
	else if (!preg_match("/^[a-zA-Z'-]+$/",$name))
		die("non valid");
	else 
		return mysqli_real_escape_string($db_conx,$name);
}

function checketcEmail(string $email): string{
	global $db_conx;
	if(""==trim($email))
		return "-";
	else if (filter_var($email, FILTER_VALIDATE_EMAIL)) 
		return mysqli_real_escape_string($db_conx,$email);
	else 
		die("invalid email");
}

function checketcPhone(string $phone): string{
	global $db_conx;
	$phone = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
	if(""==trim($phone))
		return "-";
	else 
		return mysqli_real_escape_string($db_conx,$phone);
}




$query = "INSERT INTO $event_name( first_name, 
 last_name,
 email,
 phone,
 university,
 reg_number,
 team_1_name, team_1_phone,
 team_2_name, team_2_phone,
 team_3_name,team_3_phone,
 team_4_name,team_4_phone,
 team_5_name,team_5_phone,
  paid) VALUES ('".$first_name."',
  '".$last_name."',
  '". $email."',
  '".$phone."',
  '".$university."',
  '".$reg."',
  '".$name0."','".$phone0."',
  '".$name1."','".$phone1."',
  '".$name2."','".$phone2."',
  '".$name3."','".$phone3."',
  '".$name4."','".$phone4."',
  0)";


if($db_conx->query($query)== TRUE)
echo ('done');

else
echo $db_conx->error.$event_name;




?>
