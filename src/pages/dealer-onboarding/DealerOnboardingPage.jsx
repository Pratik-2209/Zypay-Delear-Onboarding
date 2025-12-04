import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Modules
import BasicDetails from "./BasicDetails";
import BusinessDetails from "./BusinessDetails";
import KycDocuments from "./KycDocuments";
import BankDetails from "./BankDetails";
import AgreementCompliance from "./AgreementCompliance";
import LoginCredentials from "./LoginCredentials";
import Bureau from "./Bureau";
import FieldInvestigation from "./FieldInvestigation";

const sections = [
  { id: "basic", label: "Basic Details" },
  { id: "business", label: "Business Details" },
  { id: "kyc", label: "KYC Documents" },
  { id: "bureau", label: "Bureau/Cibil Score" },
  { id: "fieldInvestigation", label: "Field Investigation" },
  { id: "bank", label: "Bank Details" },
  { id: "agreement", label: "Agreement & Compliance" },
  { id: "login", label: "Login Credentials" },
];

function DealerOnboardingPage() {
  const [activeSection, setActiveSection] = useState("basic");

  const [formData, setFormData] = useState({
    basic: {},
    business: {},
    kyc: {},
    bureau: {},
    fieldInvestigation: {},
    bank: {},
    agreement: {},
    login: {},
  });

  // 🔹 helper: update only one section at a time
  const updateSection = (section) => (patch) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...patch },
    }));
  };

  const renderSection = () => {
    switch (activeSection) {
      case "basic":
        return (
          <BasicDetails
            value={formData.basic}
            onChange={updateSection("basic")}
          />
        );
      case "business":
        return (
          <BusinessDetails
            value={formData.business}
            onChange={updateSection("business")}
          />
        );
      case "kyc":
        return (
          <KycDocuments
            value={formData.kyc}
            onChange={updateSection("kyc")}
          />
        );
        case "bureau":
        return (
          <Bureau
            value={formData.bureau}
            onChange={updateSection("bureau")}
          />
        );
        case "fieldInvestigation":
        return (
          <FieldInvestigation
            value={formData.fieldInvestigation}
            onChange={updateSection("fieldInvestigation")}
          />
        );
      case "bank":
        return (
          <BankDetails
            value={formData.bank}
            onChange={updateSection("bank")}
          />
        );
      case "agreement":
        return (
          <AgreementCompliance
            value={formData.agreement}
            onChange={updateSection("agreement")}
          />
        );
      case "login":
        return (
          <LoginCredentials
            value={formData.login}
            onChange={updateSection("login")}
            basicData={formData.basic} // for auto-username from email if you want
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log("Final dealer data:", formData);
    // axios.post("/api/dealers/register", formData)
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Dealer Onboarding
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Fill all dealer details to complete onboarding.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              activeSection === sec.id
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>

     <Card>
  <CardContent className="py-6 space-y-6">
    {renderSection()}

    <Button
      className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
      onClick={handleSubmit}
    >
      Submit Dealer Onboarding
    </Button>
  </CardContent>
</Card>

    </div>
  );
}

export default DealerOnboardingPage;
