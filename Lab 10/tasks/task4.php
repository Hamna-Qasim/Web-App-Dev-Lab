<?php
$n1=7;
$n2=6;
$n3=1;
if($n1>=$n2 && $n1>=$n3) 
{
    echo"The greatest number is:".($n1)."<br>";
} 
elseif($n2>=$n1 && $n2>=$n3) 
{
    echo"The greatest number is:".($n2)."<br>";
} 
else 
{
    echo"The greatest number is:".($n3)."<br>";
}
?>