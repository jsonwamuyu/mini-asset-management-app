import React, { useEffect, useState } from "react";
import axios from "axios";
import AssetOverviewCard from "../components/AssetOverviewCard";
import { useNavigate } from "react-router-dom";

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/assets?page=${currentPage}`);
        setAssets(res.data.assets); // Make sure your API returns `assets` and `totalPages`
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error("Error fetching assets:", error);
      }
    };

    fetchAssets();
  }, [currentPage]);

  const handleAssetClick = (id) => {
    navigate(`/assets/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Assets</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {assets.map((asset) => (
          <div key={asset.id} onClick={() => handleAssetClick(asset.id)} className="cursor-pointer">
            <AssetOverviewCard asset={asset} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg">{currentPage} / {totalPages}</span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Assets;
