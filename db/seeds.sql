INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Petro', 'Gianna', 3, null),
    ('Evan', 'Paur', 4, 1),
    ('Steve', 'Williams', 2, 4),
    ('Serena', 'McDermit', 1, null),
    ('Julia', 'Rhodes', 6, null),
    ('Kid', 'Rocky', 12, 3),
    ('Balboa', 'Malone', 8, 4),
    ('Karl', 'Everest', 4, 2),
    ('Marina', 'Lou', 3, 4);

INSERT INTO role (title, salary, department_id)
VALUES
    ('Administrator', 32000, 1),
    ('Assistant Administrator', 28000, 1),
    ('Manager', 45000, 2),
    ('Assistant Manager', 38000, 2),
    ('Branch Manager', 60000, 3)
    ('Regional Manager', 85000, 4),
    ('CEO', 150000, 5);

INSERT INTO department (name)
VALUES
    ('Administration'),
    ('Management'),
    ('Branch Management'),
    ('Executives');