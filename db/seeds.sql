INSERT INTO department (dept_name)
VALUES ("Engineering"),
       ("Marketing"),
       ("Finance"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Associate Saleperson", 85000, 4),
       ("Accountant", 93000, 3),
       ("Online Marketer", 85000, 2),
       ("Full Stack Developer", 100000, 1),
       ("Software Engineer", 120000, 1),
       ("Lead Saleperson", 185000, 4),
       ("Head Accountant", 193000, 3),
       ("Lead Online Marketer", 185000, 2),
       ("Senior Full Stack Developer", 200000, 1),
       ("Senior Software Engineer", 220000, 1),
       ("COO", 300000, 3),
       ("CEO", 300001, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rico", "Fuentes", 2, 7),
       ("Hasnain", "Haworth", 5, 7),
       ("Miles", "Clegg", 8, 7),
       ("Vivek", "Redman", 3, 7),
       ("Helena", "Findlay", 1, 7),
       ("Makayla", "Zuniga", 6, 7),
       ("Derry", "Goodman", 7, 7),
       ("Chance", "Page", 9, 7),
       ("Lillian", "Maguire", 10, 7),
       ("Nieve", "Pickett", 3, 7),
       ("Luna", "Harrison", 4, 7),
       ("Caiden", "Aldred", 5, 7),
       ("Zayan", "Rangel", 5, 7),
       ("Leja", "Cohen", 9, 7),
       ("Karl", "Faulkner", 1, 7),
       ("Macaulay", "Smith", 11, 12),
       ("Owen", "Cousins", 12, 12);