INSERT INTO departments (name)
VALUES
    ('Administration'),
    ('Management'),
    ('Branch Management'),
    ('Executives');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Administrator', 32000, 1),
    ('Assistant Administrator', 28000, 1),
    ('Manager', 45000, 2),
    ('Assistant Manager', 38000, 2),
    ('Branch Manager', 60000, 3)
    ('Regional Manager', 85000, 3),
    ('CEO', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Petro', 'Gianna', 3, null),
    ('Evan', 'Paur', 4, 1),
    ('Steve', 'Williams', 2, 4),
    ('Serena', 'McDermit', 1, null),
    ('Julia', 'Rhodes', 2, null),
    ('Kid', 'Rocky', 1, 3),
    ('Balboa', 'Malone', 2, 4),
    ('Karl', 'Everest', 1, 2),
    ('Marina', 'Lou', 1, 4);


