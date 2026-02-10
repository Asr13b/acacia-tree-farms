// src/services/api.js

// API Configuration
const API_BASE_URL = "http://localhost:3001/api"; // Your backend URL

// Coffee Products API
export const coffeeAPI = {
  // Get all coffee products
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/coffee`);
    return response.json();
  },

  // Get single coffee product
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/coffee/${id}`);
    return response.json();
  },

  // Create order
  createOrder: async (orderData) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    return response.json();
  },
};

// Blockchain Traceability API
export const blockchainAPI = {
  // Get traceability data for a batch
  getBatchData: async (batchId) => {
    const response = await fetch(`${API_BASE_URL}/blockchain/${batchId}`);
    return response.json();
  },

  // Verify transaction
  verifyTransaction: async (txHash) => {
    const response = await fetch(`${API_BASE_URL}/blockchain/verify/${txHash}`);
    return response.json();
  },
};

// Contact/Inquiry API
export const contactAPI = {
  submitInquiry: async (inquiryData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiryData),
    });
    return response.json();
  },
};
