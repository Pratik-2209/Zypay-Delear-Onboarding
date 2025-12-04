// src/pages/BureauPage.jsx

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function BureauPage() {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    dob: "",
    pan: "",
    aadhaar: "",
  });

  const handleChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const fetchBureau = () => {
    console.log("Bureau Fetch Payload:", form);

    // Example API call
    // axios.post("/api/bureau/experian", form)
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        Experian Bureau Check
      </h2>
      <p className="text-sm text-slate-600 mb-6">
        Enter customer KYC details to pull Experian bureau report.
      </p>

      <Card>
        <CardContent className="py-6 space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input
              placeholder="Customer full name"
              value={form.fullName}
              onChange={handleChange("fullName")}
            />
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <Label>Mobile Number</Label>
            <Input
              placeholder="Registered mobile number"
              value={form.mobile}
              onChange={handleChange("mobile")}
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input
              type="date"
              value={form.dob}
              onChange={handleChange("dob")}
            />
          </div>

          {/* PAN */}
          <div className="space-y-2">
            <Label>PAN</Label>
            <Input
              placeholder="ABCDE1234F"
              value={form.pan}
              onChange={handleChange("pan")}
            />
          </div>

          {/* Aadhaar Number (Optional) */}
          <div className="space-y-2">
            <Label>Aadhaar Number (Optional)</Label>
            <Input
              placeholder="12-digit Aadhaar number"
              value={form.aadhaar}
              onChange={handleChange("aadhaar")}
            />
          </div>

          {/* Submit button */}
          <Button
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={fetchBureau}
          >
            Fetch Experian Bureau
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default BureauPage;
