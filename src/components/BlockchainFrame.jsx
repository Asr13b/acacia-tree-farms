// src/components/BlockchainFrame.jsx
import React from "react";
import { Shield, QrCode, CheckCircle, ExternalLink } from "lucide-react";

const BlockchainFrame = ({ children, title = "Blockchain Traceability" }) => {
  return (
    <div className="relative border-2 border-gray-300 rounded-xl overflow-hidden bg-white shadow-lg">
      {/* Branded Header */}
      <div className="bg-gradient-to-r from-[#3B2322] to-[#5c3a38] text-white p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">ACX TRACEABILITY</h2>
              <p className="text-gray-300">{title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span className="font-medium">Verified</span>
          </div>
        </div>
      </div>

      {/* External Data Window */}
      <div className="p-8">
        {/* This area is for external data integration */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
          <div className="text-gray-500 mb-4">
            <div className="text-2xl">⬇️</div>
            <p className="font-medium">External Data Integration Area</p>
            <p className="text-sm mt-2">
              Sayf & Noor will connect blockchain data here
            </p>
          </div>

          {/* Sample Data Structure */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-left max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded border">
              <div className="text-gray-600 text-sm">Batch ID</div>
              <div className="font-bold text-[#3B2322]">#ATF-2026</div>
            </div>
            <div className="bg-white p-4 rounded border">
              <div className="text-gray-600 text-sm">Region</div>
              <div className="font-bold text-[#3B2322]">Harar, Ethiopia</div>
            </div>
            <div className="bg-white p-4 rounded border">
              <div className="text-gray-600 text-sm">Process</div>
              <div className="font-bold text-[#3B2322]">Natural Sun-Dried</div>
            </div>
            <div className="bg-white p-4 rounded border">
              <div className="text-gray-600 text-sm">Status</div>
              <div className="font-bold text-green-600">
                Blockchain Verified
              </div>
            </div>
          </div>

          {children}
        </div>
      </div>

      {/* QR Code */}
      <div className="absolute top-4 right-4">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <QrCode className="w-16 h-16 text-[#3B2322]" />
          <p className="text-xs text-gray-600 mt-1">Scan to verify</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t p-4 text-center text-gray-600 text-sm">
        Data powered by Acacia Blockchain Network • Real-time traceability
      </div>
    </div>
  );
};

export default BlockchainFrame;
