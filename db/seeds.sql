INSERT INTO departments (name)
VALUES
('sales'),
('engineering'),
('legal'),
('finance');

INSERT INTO role (title, salary, department_id)
VALUES
('junior salesperson', 50000, 1),
('senior salesperson', 60000, 1),
('manager of sales', 80000, 1),
('junior engineer', 50000, 2),
('senior engineer', 60000, 2),
('engineering lead', 80000, 2),
('engineering lead assistant', 65000, 2),
('legal operations analyst', 90000, 3),
('legal operations specialist', 100000, 3),
('director of legal operations', 120000, 3),
('accounting clerk', 60000, 4),
('accountant', 80000, 4),
('accounting manager', 95000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jeff', 'Bezos', 3, null),
('Petro', 'Gianna', 6, null),
('Lauren', 'Oaken', 10, null),
('Steve', 'Smith', 13, null),
('Joe', 'Montana', 11, 4),
('Randy', 'Jackson', 2, 1),
('Jeff', 'Teague', 11, 4),
('Wes', 'Snipes', 4, 2),
('Jeremy', 'Renner', 9, 4),
('Scarlett', 'Johnson', 1, 1),
('Pete', 'Rose', 12, 4);