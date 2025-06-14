import React, { useEffect, useState, useMemo } from "react";
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from "@tanstack/react-table";
import "./MessageStats.css";

const DataTable = ({ data, columns, sorting, setSorting, globalFilter, setGlobalFilter, showPmsFilter = false }) => {
  const [pmsFilter, setPmsFilter] = useState("all");

  const pmsOptions = useMemo(() => {
    if (!showPmsFilter) return [];
    const uniquePms = [...new Set(data.map((row) => row["PMS"]))].filter(Boolean);
    return ["all", ...uniquePms];
  }, [data, showPmsFilter]);

  const filteredData = useMemo(() => {
    if (!showPmsFilter || pmsFilter === "all") return data;
    return data.filter((row) => row["PMS"] === pmsFilter);
  }, [data, pmsFilter, showPmsFilter]);

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    enableSorting: true,
    enableMultiSort: false,
    sortDescFirst: false,
    enableGlobalFilter: true,
  });

  return (
    <div className="table-container">
      <div className="table-controls">
        <div className="filters">
          {showPmsFilter && (
            <select value={pmsFilter} onChange={(e) => setPmsFilter(e.target.value)} className="pms-filter">
              {pmsOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "all" ? "All PMS" : option}
                </option>
              ))}
            </select>
          )}
          <input value={globalFilter ?? ""} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search all columns..." className="table-search" />
        </div>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                  className={header.column.getCanSort() ? "sortable" : ""}
                  style={{ cursor: header.column.getCanSort() ? "pointer" : "default" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && (
                      <span>
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted()] ?? " ⬍"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const MessageStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("message-stats");
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const messageStatsColumns = useMemo(() => {
    if (stats.length === 0) return [];

    return Object.keys(stats[0]).map((key) => ({
      accessorKey: key,
      header: key,
      cell: (info) => {
        const value = info.getValue();
        // Try to parse as number if it looks like a number
        if (!isNaN(value) && value !== "") {
          return parseInt(value) || 0;
        }
        return value;
      },
    }));
  }, [stats]);

  const upsellColumns = useMemo(
    () => [
      {
        accessorKey: "User ID",
        header: "User ID",
      },
      {
        accessorKey: "Email",
        header: "Email",
      },
      {
        accessorKey: "Total Offers",
        header: "Total Offers",
        cell: (info) => parseInt(info.getValue()) || 0,
      },
      {
        accessorKey: "Custom Upsells",
        header: "Custom Upsells",
        cell: (info) => parseInt(info.getValue()) || 0,
      },
      {
        accessorKey: "Early Checkin",
        header: "Early Checkin",
        cell: (info) => parseInt(info.getValue()) || 0,
      },
      {
        accessorKey: "Extra Nights",
        header: "Extra Nights",
        cell: (info) => parseInt(info.getValue()) || 0,
      },
      {
        accessorKey: "Late Checkout",
        header: "Late Checkout",
        cell: (info) => parseInt(info.getValue()) || 0,
      },
      {
        accessorKey: "Multiple Offers",
        header: "Multiple Offers",
        cell: (info) => parseInt(info.getValue()) || 0,
      },
      {
        accessorKey: "Other Offers",
        header: "Other Offers",
        cell: (info) => parseInt(info.getValue()) || 0,
      },
    ],
    []
  );

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/message-stats");

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const csvText = await response.text();
        if (!csvText.trim()) {
          throw new Error("Received empty CSV data");
        }

        const rows = csvText.split("\n").map((row) => row.split(","));
        if (rows.length < 2) {
          throw new Error("CSV data is incomplete");
        }

        const headers = rows[0];
        const data = rows
          .slice(1)
          .map((row) => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
          })
          .filter((row) => row["BFF Live"] === "1");

        setStats(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError(err.message || "An error occurred while fetching the data");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const renderMessageStats = () => (
    <div className="message-stats">
      <h1>Message Statistics</h1>
      <DataTable
        data={stats}
        columns={messageStatsColumns}
        sorting={sorting}
        setSorting={setSorting}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        showPmsFilter={true}
      />
    </div>
  );

  const renderUpsellAnalytics = () => {
    const usersWithLowOffers = stats.filter((row) => {
      const totalOffers = parseInt(row["Total Offers"] || "0", 10);
      return totalOffers < 10;
    });

    return (
      <div className="upsell-analytics">
        <h1>Upsell Analytics</h1>
        <div className="analytics-summary">
          <h2>Users with Low Offer Count</h2>
          <p>Number of users with less than 10 total offers: {usersWithLowOffers.length}</p>
          <DataTable
            data={usersWithLowOffers}
            columns={upsellColumns}
            sorting={sorting}
            setSorting={setSorting}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            showPmsFilter={true}
          />
        </div>
      </div>
    );
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="stats-container">
      <div className="tabs">
        <button className={`tab-button ${activeTab === "message-stats" ? "active" : ""}`} onClick={() => setActiveTab("message-stats")}>
          Message Stats
        </button>
        <button className={`tab-button ${activeTab === "upsell-analytics" ? "active" : ""}`} onClick={() => setActiveTab("upsell-analytics")}>
          Upsell Analytics
        </button>
      </div>
      <div className="tab-content">{activeTab === "message-stats" ? renderMessageStats() : renderUpsellAnalytics()}</div>
    </div>
  );
};

export default MessageStats;
