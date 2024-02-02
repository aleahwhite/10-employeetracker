INSERT INTO department (name) VALUES
    ("Human resources"),
    ("Customer Services"),
    ("Marketing"),
    ("IT"),
    ("Sales");

INSERT INTO role (title, salary, department_id) VALUES
    ("HR Director", 130000.0, 1),
    ("Clerk", 30000.0, 2),
    ("Marketing Manager", 100000.0, 3),
    ("Developer", 100000.0, 4),
    ("Sales Rep", 75000.0, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ("Thomas", "Harrington", 1, 1),
    ("Jenny", "Smith", 2, 3),
    ("Winston", "Jones", 3, 3),
    ("Alex", "Davis", 4, 2),
    ("Megan", "Moore", 5, 3);