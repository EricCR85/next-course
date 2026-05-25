import React from "react";
import Sidebar from "@/components/Sidebar";

export default function ForYouPage() {
  return (
    <div className="min-h-screen gb-white flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-10 flex flex-col gap-6">
        <header className="border-b border-gray-100 pb-4">
          <h1 className="text-2xl front-black text-slate-900">For You</h1>
          <p className="text-sm text-gray-500 mt-1">
            Track your progress and read selected dailly review insights.
          </p>
        </header>

        <section className="w-full h-64 gb-slate-50 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-center p-6">
          <p className="text-sm font-medium text-gray-400 max-w-xs">
            [Book collections cards(Selected,Recommended, Suggested)]
          </p>
        </section>
      </main>
    </div>
  );
}
