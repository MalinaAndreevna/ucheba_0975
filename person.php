<?php

class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }

  function sayHi($name)
  {
    return "Hi $name, I`m " . $this->name;
  }

  function setHp($hp)
  {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp()
  {
    return $this->hp;
  }
  function getName()
  {
    return $this->name;
  }
  function getMother()
  {
    return $this->mother;
  }
  function getFather()
  {
    return $this->father;
  }


  function getInfo()
  {
    return "
    <h2>A few words about myself.</h2><br>" . "My name is: " . $this->getName() . "<br>My father is: " . $this->getFather()->getName()
      . "<br>My mother is: " . $this->getMother()->getName()
      . "<br>My grandfather on my father's side is: " . $this->getFather()->getFather()->getName()
      . "<br>My grandmother on my father's side is: " . $this->getFather()->getMother()->getName()
      . "<br>My grandfather on my mother's side is: " . $this->getMother()->getFather()->getName()
      . "<br>My grandmother on my mother's side is: " . $this->getMother()->getMother()->getName();
    
  }
}
//! Здоровье человека не может быть более 100

$rasul = new Person("Rasul", "Hasanov", 80);
$fania = new Person("Fania", "Hasanova", 78);

$valera = new Person("Valera", "Blinov", 80);
$zhenya = new Person("Zhenya", "Blinova", 75);


$andrew = new Person("Andrew", "Blinov", 50, $zhenya, $valera);
$rasilya = new Person("Rasilya", "Blinova", 48, $fania, $rasul);
$alina = new Person("Alina", "Blinova", 20, $rasilya, $andrew);

echo $alina->getInfo();
