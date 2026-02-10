Backend Integration Guide

For Sayf & Noor

Project Overview

Acacia Tree Farms needs backend integration for:

1. CSR & Foundation Data - Impact metrics and stories
2. Blockchain Traceability - External data integration
3. Marketplace Functionality - Product listings and orders

Frontend API Structure

All API calls are managed through `src/services/api.js`:

```javascript
// API Base URL (Update for production)
const API_BASE_URL = "http://localhost:3001/api";

// Available API modules:
// 1. coffeeAPI - Product management
// 2. blockchainAPI - Traceability data
// 3. contactAPI - Form submissions
```
