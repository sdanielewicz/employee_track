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

INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES ("Rico", "Fuentes", 2, 1),
       ("Hasnain", "Haworth", 5, 9),
       ("Miles", "Clegg", 8, 10),
       ("Vivek", "Redman", 3, 8),
       ("Helena", "Findlay", 1, 5),
       ("Makayla", "Zuniga", 6, 2),
       ("Derry", "Goodman", 4, 4),
       ("Chance", "Page", 9, 5),
       ("Lillian", "Maguire", 10, 7),
       ("Nieve", "Pickett", 3, 6),
       ("Luna", "Harrison", 4, 2),
       ("Caiden", "Aldred", 5, 1),
       ("Zayan", "Rangel", 5, 3),
       ("Leja", "Cohen", 9, 10),
       ("Karl", "Faulkner", 1, 11),
       ("Macaulay", "Smith", 12, 11),
       ("Owen", "Cousins", 12, 12);

ALTER TABLE employee ADD FOREIGN KEY (manager_id) REFERENCES employee(id);