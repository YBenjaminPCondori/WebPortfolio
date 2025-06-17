import React from "react";
import { Menu, Users, CreditCard, List } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * 📑 Bank management GUI skeleton
 * Tailwind + shadcn/ui + lucide-react icons
 * Hook it into your Vite‑React setup, swap the placeholder data, and wire up API calls later.
 */
export default function BankDashboardSkeleton() {
  return (
    <div className="flex h-screen bg-muted">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <TopBar />
        <div className="p-6 space-y-6 overflow-y-auto">
          <Metrics />
          <AccountsTable />
        </div>
      </main>
    </div>
  );
}

function Sidebar() {
  const items = [
    { icon: Menu, label: "Dashboard" },
    { icon: Users, label: "Customers" },
    { icon: CreditCard, label: "Accounts" },
    { icon: List, label: "Transactions" },
  ];
  return (
    <aside className="w-60 bg-card border-r">
      <div className="p-6 text-2xl font-bold">Bank&nbsp;UI</div>
      <nav className="flex flex-col gap-1">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 px-6 py-3 text-left hover:bg-accent"
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function TopBar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b bg-background/50 backdrop-blur-md">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="h-8 w-8 rounded-full bg-primary/30" />
    </header>
  );
}

function Metrics() {
  const items = [
    { title: "Customers", value: "1,234" },
    { title: "Accounts", value: "2,345" },
    { title: "Total Balance", value: "£9.87m" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map(({ title, value }) => (
        <Card key={title}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function AccountsTable() {
  const rows = [
    { number: "ACC-0001", owner: "Alice", balance: "£12,000" },
    { number: "ACC-0002", owner: "Bob", balance: "£8,500" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">No.</th>
              <th className="text-left">Owner</th>
              <th className="text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.number} className="border-b last:border-0">
                <td className="py-2">{r.number}</td>
                <td>{r.owner}</td>
                <td className="text-right">{r.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
