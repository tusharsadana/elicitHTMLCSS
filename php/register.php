<?php 

declare(strict_types=1);
require('dbconnect.php');


//why?
$name4 = '=';
$phone4= '=';



// All the post request of the variables
$first_name   = $_POST['first_name'] ?? '-';	
$last_name   = $_POST['last_name'] ?? '-';
$email   = $_POST['email'] ?? '-';
$phone   = $_POST['phone'] ?? '-';
$university   = $_POST['university'] ?? '-';
$reg   = $_POST['reg'] ?? '-';
$gamers_choice   = $_POST['gamers_choice'] ?? '-';
$name0   = $_POST['name0'] ?? '-';
$name1   = $_POST['name1'] ?? '-';
$name2   = $_POST['name2'] ?? '-';
$name3   = $_POST['name3'] ?? '-';
$phone0   = $_POST['phone0'] ?? '-';
$phone1   = $_POST['phone1'] ?? '-';
$phone2   = isEmpty($_POST['phone2']);
$phone3   = $_POST['phone3'] ?? '-';
$email0   = $_POST['email0'] ?? '-';
$email1   = $_POST['email1'] ?? '-';
$email2   = $_POST['email2'] ?? '-';
$email3   = $_POST['email3']?? '-';

function isEmpty(string $var): string{
if(("" == trim($var)) || (null == trim($var)))   
	return '-n'; 
else return $val;
}



$query = "INSERT INTO codeathon( first_name, last_name, email,phone,university,reg_number,team_1_name,team_1_phone,team_2_name, team_2_phone,team_3_name,team_3_phone,team_4_name,team_4_phone,team_5_name,team_5_phone,paid) VALUES ($first_name,$last_name,$email,$phone,$university,$reg,$name0,$phone0,$name1,$phone1,$name2,$phone2,$name3,$phone3,$name4,$phone4,0)";


if($db_conx->query($query)== TRUE)
echo ('done');

else
echo $db_conx->error.$email0;




?>
