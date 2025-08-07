CREATE DATABASE RealTimeDashboard;

USE RealTimeDashboard;

CREATE TABLE price_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    price DECIMAL(15, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO price_logs (price, currency)
VALUES (43250.87, 'USD');

SELECT price, timestamp
FROM price_logs
ORDER BY timestamp DESC
LIMIT 10;

SELECT price, timestamp
FROM price_logs
ORDER BY timestamp ASC
LIMIT 10;

DELETE FROM price_logs
WHERE timestamp < NOW() - INTERVAL 30 DAY;

CREATE USER 'dashboard_user'@'localhost' IDENTIFIED BY 'StrongPass123';
GRANT SELECT, INSERT ON RealTimeDashboard.* TO 'dashboard_user'@'localhost';
