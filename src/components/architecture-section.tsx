import React from "react";

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-16 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-6">
        <div className="font-mono text-sm bg-black p-4 rounded-md w-full text-center">
          <div className="flex flex-wrap justify-center gap-2">
            <span>[React Client]</span>
            <span className="hidden sm:inline">→</span>
            <span>[Spring Boot API]</span>
            <span className="hidden sm:inline">→</span>
            <span>[RabbitMQ]</span>
            <span className="hidden sm:inline">→</span>
            <span>[PostgreSQL]</span>
          </div>
        </div>
        <div className="text-left w-full text-sm sm:text-base">
          Java · Spring Boot · PostgreSQL · RabbitMQ · Docker · GitHub Actions
        </div>
      </div>
    </section>
  );
}
