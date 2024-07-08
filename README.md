# Metro Guide System

**Metro Guide** is an integrated mobile and web-based application designed to modernize and enhance the operations of a metropolitan transit system. This comprehensive system covers user registration, ticketing, subscription management, payment processing, and an admin dashboard for managing user data and subscriptions.

## Overview

### User Registration and Authentication
- **Registration**: Users can register by providing their name, national ID, phone number, and password. The system extracts the government and date of birth from the national ID.
- **Authentication**: Users log in using their national ID and password, secured with JWT.
- **Password Reset**: A three-step process allows users to reset their password through SMS verification.

### Ticketing System
- **QR Code Tickets**: Users purchase tickets that generate QR codes, reducing the need for paper tickets and cash transactions.
- **Journey Details**: Users select start and end stations to view ticket prices, number of stations, and estimated travel time.

### Subscription Management
- **Subscription Types**: Users can choose from various subscription types (جمهور, كبار السن, صحفيين, احتياجات خاصة, مصابي الثورة, طلاب).
- **Verification**: Users upload a photo for admin verification.
- **Dynamic Updates**: Subscription information is dynamically updated via an API.

### Payment Integration
- **Payment Gateway**: Integration with Paymob allows for secure, seamless payments.
- **Wallet Feature**: Users can view their balance and make transactions through the wallet feature.

### Admin Interface
- **Dashboard**: Web-based interface for managing user subscriptions.
- **Approval and Rejection**: Admins can approve or reject subscriptions with real-time notifications.
- **Subscription Details**: Detailed subscription pages with images and verification buttons.

## Technologies Used
- **Backend**: Node.js for server-side operations.
- **Database**: MongoDB for data storage, Neo4j for graph-based data, and Redis for caching.
- **Notifications**: Firebase for push notifications and Twilio for SMS.
- **Payment Processing**: Paymob for handling transactions.
- **Other Tools**: ngrok for secure tunneling.

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- Neo4j
- Redis
