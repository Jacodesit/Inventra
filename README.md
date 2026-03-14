
# Inventory and Sales Management System

## Overview

This project is a simple **Inventory and Sales Management System** built using **Laravel, Inertia.js, React, and TypeScript**.

The system allows staff to manage products, monitor stock levels, and record sales transactions. When a sale is recorded, the system automatically deducts the quantity from the product's available stock.

This project was built as part of my practice to improve my understanding of full-stack development using the **Laravel + Inertia.js + React + TypeScript** stack.

---

## Tech Stack

* Laravel
* Inertia.js
* React
* TypeScript
* MySQL
* TailwindCSS

---

## Features

### Dashboard

* Displays system overview
* Quick access to system modules

### Products

* Add new products
* Edit product information
* Delete products
* Track product quantity

### Categories

* Organize products into categories

### Stock Management

* View current product quantities
* Adjust stock when inventory changes

### Sales

* Record product sales
* Automatically deduct stock when a sale is made
* Prevent selling more items than available stock
* Store sales history

### Reports

* View sales records
* Track product movement through sales data

---

## Core System Flow

1. Staff adds products and categories.
2. Products are assigned a stock quantity.
3. When a sale occurs, staff records the transaction in the **Sales** page.
4. The system:

   * saves the sale record
   * automatically deducts the product quantity from stock
   * prevents selling more than available stock.

---

## Database Structure

### Users

Stores authenticated users who operate the system.

### Categories

Groups products into logical classifications.

### Products

Stores product information including quantity and category.

### Sales

Records each sale transaction including:

* product sold
* quantity
* price
* total
* user who recorded the sale

---

## What I Learned

* Building full-stack applications using Laravel + Inertia + React
* Implementing CRUD operations across multiple modules
* Managing relationships between database tables
* Handling business logic such as stock deduction and sales validation
* Preventing invalid transactions like overselling inventory

---

## Future Improvements

* Sales analytics on the dashboard
* Low stock alerts
* Product search and filtering
* Export sales reports
* Role-based access control for admin and staff

---

## Author

Paul Jacob Tocmo
