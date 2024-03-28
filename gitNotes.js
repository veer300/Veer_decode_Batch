/* 
What is Version Control:
Why should I learn Versionn  Control
How will become simple: Because you  are already motivate to learn this stuff
Elephant in the room:
  ||Version control system and tool:||
  Instagra
  FaceBook
  Whatsapp
  Our appliction is getting updated  time to time:
  In the world of  software :  Everything is dynamic 
  Chang in only the constant
  When we have different version : THere should be a way to control  it or manage it
  So all the tools  and techniques that we used to manage the version of software that be build
  //  typically you  will do with the help of versionn control

  Collabaration :  Working in inndustry multiple people working on same project 
  they will be able to seamleassly integrate the changes
  Everytime when He /She mmakeschanges in the code the visibilty of a should be around there 
   When multiple people  working on same project  when they are work seamlessly
  without much integration issue  They would like to have some system
  which helps you manage that cordination

  allows the people in largee nummber to work on the same project still able to  share the code seamlesssly

  THe version control help you to  maintain the different versions
  V1=>V2=>V3=>V4>
  I am working for amazon : On checkout page :  and this code working all fine :stage 1
  Stage 2: You makes changes in  the code of stage 1 and you deploy it  :
  Stage 3: Customer has started complaining that they are not able to checkout 
  Stage 4: As soon as you realize  that sommthing happpens wrong 

: Write now   if Version control  is not in the picture  : so unding the changes become very complex and time taking
That's why Version control comes to rescue
As soon as I really ode of versionn 22 has some issue:  With in a fraction of seconds : I can go on  version  1 : and deploy to the production and exiting error 
has been fixed
 Track  the history of change
Backtracking is possible  here

We definatlely  need to master version control

Types of version control
Loalized  version control
Version control is happenning locally on our computer  only 
// when I check out by default it will give you the latest version 
Yes you can go on older version



:Centralized version control
If hardare crash : Mother board crash :  Laptop  theft:
you might  loose very important piece of code

Centralized version control means : You go and upload each and everything on the server : Sarver is a   global computer

// again have cetrain challanges  :  If the server goes down: or crrasbthe server
you will end up lossing all the data 

Distributed versionn control

No single point of Faiure
*/

/*   Git anf GitHub */
/*
Distributed version control  
Remove hosting /Version control

Local Part : Git 

How gits acts like version cotrol system
Git snapshot :
State of  the project/code of a given moment of a time :
Git commit my change: It wwill rresult in something caalled as snapshot

GIt stage: Modefied state
 Staged : when git actuallly stst tracking the changes
 Committed : Finally  you  lock  the changes and make version

 GIt local  :
 Installing git 
 Configuring git 
 Create git project
 Git operation  

 */
// If git has been successfully installled onn my machine :

//git -- version
//git version 2.42.0.windows.2
/*  
I am configuring git:
who is the user Email 
Who is the name   
 */
//git connfig --global user.email "veereshwartiwari3@gmail.com"
//git config user.email to see the email of the user
//git config user.name  to the name of the user :
/*Inside veerDemo folder I created a file name as  
file1.txt 
after that I  execute command git init -> this means you are going to take the ownsership of this folder that veerDemo
 additionn information is present in this hidden file  called as .git
any file that starts with . called as hidden file and alll the cionfiguration  or metaData which is needed to fo by git which is called version conntrol 

 */
/* 
git status :
in your project you have created a file that is file1.txt which is untracked 
 I am not tracking yet : do you want me to track  yet

 git is giving hits :  git add : if you want to start trackking file
// intially file1.txt is just created
after that git add.
then git will start tracking the files:
after that file is modifed and tracked by git 
git stauts
 file1.txt: this is the file  which is tracked by the git or modified by the git:
  
 // changes is file : I want to  generate the next  snapshot : that is git commit :
 

git commit -m " my first commit "
 when you make changes changes will be followed by git add
 // I want to see the details about all the previsous snapshot :

 using git log : list of past commit
 you will see here : git id:
 Authour name email id commit message
 head always points the latest commit is on tje git


 Let us reset my changes:
 modification ->add -> commit 
 midification -> revert
 add -> revert
 commit -> revert 
 revert means undo the changes that you have done 

*/
/*
stage 1: I have done modification after that I want to  revert  
If I want to undo the changes at this level
whatever the previous state of my file I would bee able to retain that
 using type command you can see the conntent of file what is written there :
  type file1.txt
  git restore file1.txt -> it will remove all the written content of file1.txt


*/

/* 
stage 2:  I have add the files  after that I want to revert  */
/*  git restore --stagged file1.txt */

/* Stage 3: After commit I want to revert the changes  */
// c1->c2->c3:
// branch is  basically a pointer that points to a snapshot
//c1->c2->c3->c4


/* 
Git bash commands
ls -> to show all  the  content of the folder
to quit vi editor :
esc key shift : (colon) type wq!
to show the content of fil1.txt
cat file1.txt : cmd
mkae folder to git folder
git init-> helps you to  intialize a folder as git folder

current  status of ->git status
// file1.txt is untracked file :
git is saying that you intivited me in my folder
but you did'nt starting tracking file1.txt
 // git start tracking file1.text git add .=> modification stage
 now all the changes will  be tracked by git
when you are sure that git  takee care of my :  then use cmd : git commit -m "some meaning message"

again after manipulating the content : git add .  git take csre og my  cannges:
git inti -> only once
git add file name 
git commit -m "message"

git log  :  uptill now how much commits  have been done 
*/

/* Let us talk about gut hub
when you want to  send the code remotely */