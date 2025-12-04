// src/pages/dealer-onboarding/BankDetails.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function BankDetails({ value = {}, onChange }) {
  const handleChange = (field) => (e) => {
    onChange({ [field]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          Bank Details
        </h3>
        <p className="text-sm text-slate-600">
          Settlement bank details for the dealer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Account Holder Name</Label>
          <Input
            placeholder="As per bank records"
            value={value.accountHolder || ""}
            onChange={handleChange("accountHolder")}
          />
        </div>
        <div>
          <Label>Account Number</Label>
          <Input
            placeholder="Account number"
            value={value.accountNumber || ""}
            onChange={handleChange("accountNumber")}
          />
        </div>
        <div>
          <Label>Confirm Account Number</Label>
          <Input
            placeholder="Re-enter account number"
            value={value.accountNumberConfirm || ""}
            onChange={handleChange("accountNumberConfirm")}
          />
        </div>
        <div>
          <Label>IFSC Code</Label>
          <Input
            placeholder="IFSC"
            value={value.ifsc || ""}
            onChange={handleChange("ifsc")}
          />
        </div>
        <div>
          <Label>Bank Name</Label>
          <Input
            placeholder="Bank name"
            value={value.bankName || ""}
            onChange={handleChange("bankName")}
          />
        </div>
        <div>
          <Label>Branch Name</Label>
          <Input
            placeholder="Branch"
            value={value.branchName || ""}
            onChange={handleChange("branchName")}
          />
        </div>
        <div>
          <Label>Account Type</Label>
          <select
            className="mt-1 block w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
            value={value.accountType || ""}
            onChange={handleChange("accountType")}
          >
            <option value="">Select</option>
            <option value="current">Current</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <div>
          <Label>UPI ID (Optional)</Label>
          <Input
            placeholder="e.g. zypay@icici"
            value={value.upi || ""}
            onChange={handleChange("upi")}
          />
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
