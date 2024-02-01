INSERT INTO department (id, name);
VALUES
    ( 01, "Human resources"),
    ( 02, "Customer Services"),
    ( 03, "Marketing"),
    ( 04, "IT"),
    ( 05, "Sales");

INSERT INTO role (id, title, salary, department_id);
VALUES
    ( 09, "HR Director", 130000.0, 01),
    ( 08, "Clerk", 30000.0, 02),
    ( 07, "Marketing Manager", 100000.0, 03),
    ( 06, "Developer", 100000.0, 04),
    ( 05, "Sales Rep", 75000.0, 05);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id);
VALUES
    ( 0123, "Thomas", "Harrington", 09, 1),
    ( 0215, "Jenny", "Smith", 08, 3),
    ( 0365, "Winston", "Jones", 07, 3),
    ( 0481, "Alex", "Davis", 06, 2),
    ( 0532, "Megan", "Moore", 05, 3);