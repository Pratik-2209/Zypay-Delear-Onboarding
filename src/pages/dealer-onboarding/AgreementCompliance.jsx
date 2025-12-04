// src/pages/dealer-onboarding/AgreementCompliance.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AgreementCompliance({ value = {}, onChange }) {
  const handleChange = (field) => (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    onChange({ [field]: val });
  };

  const handleFileChange = (field) => (e) => {
    const file = e.target.files?.[0];
    onChange({ [field]: file });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          Agreement & Compliance
        </h3>
        <p className="text-sm text-slate-600">
          Upload signed agreements and confirm compliance declarations.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label>Dealer Agreement (PDF)</Label>
          <Input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange("agreementPdf")}
          />
        </div>
        <div>
          <Label>Digital Signature (Image / PDF)</Label>
          <Input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange("digitalSignature")}
          />
        </div>

        <div className="space-y-2 pt-2">
          <label className="flex items-start gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4"
              checked={value.gstDeclaration || false}
              onChange={handleChange("gstDeclaration")}
            />
            <span>
              I confirm that GST registration details and documents submitted
              are true and correct.
            </span>
          </label>

          <label className="flex items-start gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4"
              checked={value.fraudDeclaration || false}
              onChange={handleChange("fraudDeclaration")}
            />
            <span>
              I confirm that I have not been blacklisted by any bank/NBFC and
              there are no pending fraud investigations.
            </span>
          </label>

          <label className="flex items-start gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4"
              checked={value.termsAccepted || false}
              onChange={handleChange("termsAccepted")}
            />
            <span>
              I agree to the dealer agreement, policies and terms &
              conditions of ZyPay.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AgreementCompliance;
