//---------PRIME NUMBER----------START----
<?php
function check($num)
{
  $p=0;
  for ($i = 1; $i <= $num; $i++)
    {
        if ($num % $i == 0) 
        {
            $p++;
        }
    }
    if($p==2)
    {
      echo "$num is a Prime Number";
    }
    else
    {
      echo "$num is not a Prime Number";
    }
}
echo check(2);
?>
//---------PRIME NUMBER----------END----
//---------PRINT 1 TO 10---------START-----

<?php
  function test($number)
  {
	for($i=1;$i<=$number;$i++)
	{
	  echo "The number is : ".$i."<br>";
	}
  }
  echo test(10);  
?>

Output
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
...............
...............
The number is 10
//---------PRINT 1 TO 10---------END-----
//---------PRINT 10 TO 1----------START----

<?php
  function test($number)
  {
	for($i=$number;$i>=1;$i--)
	{
	  echo "The number is : ".$i."<br>";
	}
  }
  echo test(10);  

?>

Output
The number is 10
The number is 9
The number is 8
The number is 7
The number is 6
..............
..............
The number is 1 

//---------PRINT 10 TO 1----------END----
//---------ODD EVEN CHECK----------START----
<?php  
function EvenOdd($number)
{
   if ($number % 2 == 0) 
   {
	echo $number." is even";
   }
   else 
   {
	echo $number." is Odd";
   }
}
 echo EvenOdd(6);
?>
//---------ODD EVEN CHECK----------END----

Print odd number between 1 to 100 :
<?php  
function test($number)
{
   for($i=1;$i<$number;)//-> becareful i++ nei
	{
      echo $i."<br>";
      $i=$i+2;
	}
}
 echo test(100);
?>
or
<?php  
function test($number)
{
   for($i=1;$i<$number;$i++)//-> becareful i++ nei
	{
      echo $i."<br>";
      $i=$i+1;
	}
}
 echo test(100);
?>

How can you print 1 to 10 & 10 to 1 by using recursion with single variable:
<?php
------------HOYNAI::
function recurfunc(n) {
    if (n < 10) {
    echo (-1 * (floor(abs(n)) - 10));
        recurfunc(n+1);
    }
}
?>
in a time MIN+MAX+AVG:
<?php
function test($array)
{
	//minimum:	
	echo "minimum number is: ".(min($array))."<br>";
	//maximum:
	echo "maximum number is: ".(max($array))."<br>";
	//average:
	$total=0;
	foreach($array as $value)
	{
		$total=$total+$value;
	}
	echo "average is: ".$total/count($array);
}
echo test(array(1,2,3,4,5,6,7,8,9,10));
?>

//organize the given input into Ascending order + descending order:
 <?php 
function test($array)
{
	//Ascending order sort:
	sort($array);
	echo "Ascending order:"."<br>";
	foreach($array as $values)
	{
	  echo $values."<br>";	
	}
	echo "<br>";
	//Descending order sort:
	rsort($array);
	echo "Descending order:"."<br>";
	foreach($array as $values)
	{
	  echo $values."<br>";	
	}
}
echo test(array(4,2,1,8,7,9,3,10,6,5)); 
?>

//GETTING THE MOST REPEATED VALUE IN AN INPUT ARRAY:
<?php
function MostRepeated($array)
{
	$count=array_count_values($array);
	arsort($count);
	$keys=array_keys($count);
	echo "the most repeated value is: ".$keys[0];
}
echo MostRepeated(array(1,2,3,4,5,6,6));
?>
//the Less repeated value is:
<?php
function LessRepeated($array)
{
	$count=array_count_values($array);
	asort($count);
	$keys=array_keys($count);
	echo "The Less repeated value is: ".$keys[0];
}
echo LessRepeated(array(1,1,2,2,3,3,4,4,5,5,6,6,8));
?>

//find highest and second highest number in an array without using max function
<?php 
function test($array)
{
	//highest + 2nd highest number:
	// rsort : sorts an array in reverse order (highest to lowest).
	rsort($array); 
	echo "Highest is :".$array[0].", Second highest is : ".$array[1]."<br>";
	
	//lowest +2nd lowest number :
	//sort() : sort arrays in ascending order
	sort($array); 
	echo "lowest is :".$array[0].", Second lowest is : ".$array[1]."<br>";
}
echo test(array(1,2,3,4,5,6,7,8,9,10)); 
?>

//to find the recursive function :
<?php
function factorial($number) 
{
	if ($number < 2)
	{
	return 1;
	} 
	else
	{
	return ($number * factorial($number-1));
	}
}
echo factorial(6);
?>

//TO FIND THE REVERSE SEQUENCE IN C LANguage:

#include <stdio.h>
int main()
{
    int num, result = 0;
    printf("Enter a number: ");
    scanf("%d",&num);
    while (num != 0)
    {
        int rem = num % 10;
        result = result * 10;
        result = result + rem;
        num = num / 10;
    }
    printf("%d\n",result);
    return 0;
}


//LARGEST & SMALLEST NUMBER IN C LANguage:

#include <stdio.h>
int main()
{
    int x,y,z;
    printf("Enter three numbers\n");
    scanf("%d %d %d",&x,&y,&z);
    if(x>=y && x>=z)
    {
        printf("largest number is %d\n",x);
    }
    if(y>=x && y>=z)
    {
        printf("largest number is %d\n",y);
    }
    if(z>=x && z>=y)
    {
        printf("largest number is %d\n",z);
    }
    if(x<=y && x<=z)
    {
        printf("smallest number is %d\n",x);
    }
    if(y<=x && y<=z)
    {
        printf("smallest number is %d\n",y);
    }
    if(z<=x && z<=y)
    {
        printf("smallest number is %d\n",z);
    }
    return 0;
}

//LEAP YEAR IN C LANguage:

#include <stdio.h>
int main ()
{
    int y;
    printf("Enter Year: ");
    scanf("%d",&y);
    if(y % 400 == 0)
    {
        printf("Leap-year");
    }
    else if(y % 4 == 0)
    {
        printf("Leap-year");
    }
    else
    {
        printf("Not Leap-year");
    }
    return 0;
}

////Febonacci series:
<?php
function printFibonacci($n)
 {
 
  $first = 0;
  $second = 1;
 
  echo "Fibonacci Series \n";
 
  echo $first.' '.$second.' ';
 
  for($i = 2; $i < $n; $i++){
 
    $third = $first + $second;
 
    echo $third.' ';
 
    $first = $second;
    $second = $third;
 
    }
}
  
/* Function call to print Fibonacci series upto 6 numbers. */
 
printFibonacci(8);

/*Output
	
Fibonacci Series 0 1 1 2 3 5 */
?>

//traingle shape : 
* * * * * 
* * * * 
* * * 
* * 
* 
code:
<?php
for($i=0;$i<=5;$i++)
{
	for($j=5-$i;$j>=1;$j--)
	{
		echo "* ";
	}
	echo "<br>";
	
}
?>
//traingle shape :
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
code:
<?php
	for($i=0;$i<=5;$i++)
	{
		for($j=0;$j<=$i;$j++)
		{
			echo "* ";
		}
		echo "<br>";
	}
?>
