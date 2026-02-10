import React, { useState, useEffect } from "react";
import BlockchainFrame from "../components/BlockchainFrame";
import { blockchainAPI } from "../services/api";

const Blockchain = () => {
  const [batchData, setBatchData] = useState(null);

  useEffect(() => {
    const fetchBatchData = async () => {
      try {
        const data = await blockchainAPI.getBatchData("ATF-2026-H1");
        setBatchData(data);
      } catch (error) {
        console.error("Error fetching blockchain data:", error);
        // Fallback data
        setBatchData({
          batchId: "#ATF-2026-H1",
          region: "Harar, Ethiopia",
          process: "Natural",
          status: "Blockchain Verified",
        });
      }
    };
    fetchBatchData();
  }, []);

  return (
    <div>
      <section className="py-8">
        <h1 className="text-3xl font-bold">ACX & Blockchain Traceability</h1>
      </section>

      <section className="py-8">
        <BlockchainFrame title="Batch Traceability">
          {batchData ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Batch ID</p>
                  <p className="font-bold">{batchData.batchId}</p>
                </div>
                <div>
                  <p className="text-gray-600">Region</p>
                  <p className="font-bold">{batchData.region}</p>
                </div>
                <div>
                  <p className="text-gray-600">Process</p>
                  <p className="font-bold">{batchData.process}</p>
                </div>
                <div>
                  <p className="text-gray-600">Status</p>
                  <p className="font-bold text-green-600">{batchData.status}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">Loading blockchain data...</div>
          )}
        </BlockchainFrame>
      </section>
    </div>
  );
};

export default Blockchain;
