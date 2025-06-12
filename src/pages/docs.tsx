import Navigation from "@/components/navigation";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function Docs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <SwaggerUI url="/openapi.json" />
      </div>
    </div>
  );
}
