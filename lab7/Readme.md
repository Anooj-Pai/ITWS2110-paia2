Notes: This lab frustrated me for a long time. But like any other code i figured out it was a small thing that stopped my whole progam from working.
I turned on the error reports on php and found that the phone field was out of bounds because the way we had to create the column for it was capping the 
size limit of the number. To get around this I had to change it to a VARCHAR and now it works perfectly. I wanted to put all of the inserts into one page
so I made an insert page and created different forms for each table. Then for the formatting of tables, I have some buttons that change the sorting when displayed
and I have separate tables for sections like average grades, number of students, and students with grades above 90. I feel like this came out pretty well and I really
like the formatting of the site because it is easy to navigate and easy on the eyes. Below I have listed all the commands needed for parts 1 and 2, along with the sources 
I used.




Part 1:

1) CREATE DATABASE websyslab7;

2) CREATE TABLE courses (
    crn int(11),
    prefix varchar(4),
    number smallint(4) NOT NULL,
    title varchar(255) NOT NULL,
    PRIMARY KEY (crn),
   );

3) CREATE TABLE students (
    RIN int(9),
    RCSID char(7),
    firstname varchar(100) NOT NULL,
    lastname varchar(100) NOT NULL,
    alias varchar(100) NOT NULL,
    phone int(10),
    PRIMARY KEY (RIN),
   );



Part 2:

1) ALTER TABLE students
   ADD street varchar(255);

   ALTER TABLE students
   ADD city varchar(100);

   ALTER TABLE students
   ADD statevar varchar(100);

   ALTER TABLE students
   ADD zip varchar(100);

2) ALTER TABLE courses
   ADD section varchar(10);

   ALTER TABLE courses
   ADD year varchar(100);

3) CREATE TABLE grades ( id int NOT NULL AUTO_INCREMENT, crn int NOT NULL, RIN int, grade int(3) NOT NULL, PRIMARY KEY (id), CONSTRAINT FK_crn FOREIGN KEY (crn) REFERENCES courses(crn), CONSTRAINT FK_RIN FOREIGN KEY (RIN) REFERENCES students(RIN) );

4) INSERT INTO courses(crn, prefix, number, title, section, year)
   VALUES (11111, 'pre1', 1, 'Intro to IT', '1', '2022');

   INSERT INTO courses(crn, prefix, number, title, section, year)
   VALUES (22222, 'pre2', 2, 'Calculus 1', '1', '2022');

   INSERT INTO courses(crn, prefix, number, title, section, year)
   VALUES (33333, 'pre3', 3, 'Data Structures', '1', '2022');

   INSERT INTO courses(crn, prefix, number, title, section, year)
   VALUES (44444, 'pre4', 1, 'Physics 1', '1', '2022');

5) INSERT INTO students(RIN, RCSID, firstname, lastname, alias, phone, street, city, statevar, zip)
   VALUES (111111111, 'stu1', 'Joe', 'Brown', 'Jbrown', 1111111111, '1 brook rd', 'Troy', 'NY', '12180');

   INSERT INTO students(RIN, RCSID, firstname, lastname, alias, phone, street, city, statevar, zip)
   VALUES (222222222, 'stu2', 'Shawn', 'Smith', 'Ssmith', 1111111112, '2 brook rd', 'Troy', 'NY', '12180');

   INSERT INTO students(RIN, RCSID, firstname, lastname, alias, phone, street, city, statevar, zip)
   VALUES (333333333, 'stu3', 'Taylor', 'Jones', 'Tjones', 1111111113, '3 brook rd', 'Troy', 'NY', '12180');

   INSERT INTO students(RIN, RCSID, firstname, lastname, alias, phone, street, city, statevar, zip)
   VALUES (444444444, 'stu4', 'AJ', 'Pai', 'Apai', 1111111114, '4 brook rd', 'Troy', 'NY', '12180');

6) INSERT INTO grades(crn,RIN,grade)
   VALUES (11111, '111111111', 99);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (22222, '111111111', 84);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (33333, '111111111', 90);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (11111, '222222222', 73);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (22222, '222222222', 85);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (33333, '222222222', 93);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (44444, '222222222', 65);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (11111, '333333333', 76);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (33333, '333333333', 96);

   INSERT INTO grades(crn,RIN,grade)
   VALUES (44444, '333333333', 85);

7) 
    RIN:
    SELECT * FROM students
    ORDER BY RIN;

    Last Name:
    SELECT * FROM students
    ORDER BY lastname;

    First Name:
    SELECT * FROM students
    ORDER BY firstname;

8) SELECT * FROM students s INNER JOIN grades g ON g.RIN = s.RIN AND g.grade > 90;;

9) SELECT c.title, AVG(g.grade) FROM courses c INNER JOIN grades g ON c.crn = g.crn GROUP BY c.crn;

10) SELECT c.title, COUNT(g.id) FROM courses c INNER JOIN grades g ON g.crn = c.crn GROUP BY g.crn;



sources:
https://www.geeksforgeeks.org/how-to-fetch-data-from-localserver-database-and-display-on-html-table-using-php/
https://www.w3schools.com/howto/howto_js_topnav.asp
