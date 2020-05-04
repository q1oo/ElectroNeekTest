CREATE TABLE department (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100)
);

CREATE TABLE employee (
	id INT PRIMARY KEY AUTO_INCREMENT,
	department_id INT,
    chief_id INT,
    name VARCHAR(100),
    salary INT,
    FOREIGN KEY (department_id) REFERENCES department (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
); 

-- task 1
SELECT * FROM employee e1
RIGHT JOIN 
(SELECT department_id, MAX(salary) max_salary FROM employee
group by department_id) e2
ON e1.department_id = e2.department_id AND e1.salary = e2.max_salary;

-- task 2
SELECT e1.department_id FROM employee e1
JOIN 
(SELECT department_id, COUNT(department_id) count_e FROM employee
GROUP BY department_id) e2
ON e1.department_id = e2.department_id
WHERE count_e < 4
GROUP BY e1.department_id;

-- task 3
SELECT e1.department_id, MAX(max_sum) FROM employee e1
JOIN
(SELECT department_id, SUM(salary) max_sum FROM employee
GROUP BY department_id) e2
ON e1.department_id = e2.department_id;

-- task 4
INSERT INTO department (name) VALUES
    ('Administrative');
    
SET @last_department_id := LAST_INSERT_ID();

-- task 5
INSERT INTO employee (department_id, chief_id, name, salary) VALUES
    (@last_department_id, 1, 'Employee15', 100000);  
        
INSERT INTO employee (department_id, chief_id, name, salary) VALUES
    (@last_department_id, LAST_INSERT_ID(), 'Employee16', 25000),
    (@last_department_id, LAST_INSERT_ID(), 'Employee17', 85000),
    (@last_department_id, LAST_INSERT_ID(), 'Employee18', 65000);
    
-- task 6 при условии на строке 13  
DELETE from department
where id = @last_department_id;

-- task 7 при условии на строке 14 
UPDATE department
SET id = 10
WHERE id = 2;