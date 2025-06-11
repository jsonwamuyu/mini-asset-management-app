import React from "react";

const AssetOverviewCard = ({ asset }) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4">
      <img
        src={asset.imageUrl}
        alt={asset.name}
        className="w-16 h-16 rounded-full object-cover mb-3"
      />
      <h3 className="font-semibold text-lg">{asset.name}</h3>
      <p className="text-sm text-gray-500">Assigned to: {asset.assignee || "Unassigned"}</p>
    </div>
  );
};

export default AssetOverviewCard;
