// // src/pages/dealer-onboarding/KycDocuments.jsx
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// function KycDocuments({ value = {}, onChange }) {
//   // For now just log files; integration with upload API can be added later.
//   const handleFileChange = (field) => (e) => {
//     const file = e.target.files?.[0];
//     onChange({ [field]: file });
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-lg font-semibold text-slate-800">
//           KYC Documents
//         </h3>
//         <p className="text-sm text-slate-600">
//           Upload identity, address and shop proof documents.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <Label>Aadhaar (Front)</Label>
//           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("aadhaarFront")} />
//         </div>
//         <div>
//           <Label>Aadhaar (Back)</Label>
//           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("aadhaarBack")} />
//         </div>
//         <div>
//           <Label>PAN Card</Label>
//           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("panCard")} />
//         </div>
//         <div>
//           <Label>GST Certificate</Label>
//           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("gstCert")} />
//         </div>
//         <div>
//           <Label>Cancelled Cheque</Label>
//           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("cancelledCheque")} />
//         </div>
//         <div>
//           <Label>Shop / Office Photo</Label>
//           <Input type="file" accept="image/*" onChange={handleFileChange("shopPhoto")} />
//         </div>
//         <div>
//           <Label>Owner Photo</Label>
//           <Input type="file" accept="image/*" onChange={handleFileChange("ownerPhoto")} />
//         </div>
//         <div>
//           <Label>Electricity / Utility Bill</Label>
//           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("utilityBill")} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default KycDocuments;


// src/pages/dealer-onboarding/KycDocuments.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function KycDocuments({ value = {}, onChange, onOcr }) {
  // store file in state (parent) when selected
  const handleFileChange = (field) => (e) => {
    const file = e.target.files?.[0];
    onChange({ [field]: file });
  };

  // trigger OCR callback if file is present
  const handleOcrClick = (field) => {
    const file = value[field];

    if (!file) {
      console.warn(`No file selected for ${field}, cannot run OCR`);
      // you can also show a toast instead of console.warn
      return;
    }

    if (onOcr) {
      onOcr(field, file);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          KYC Documents
        </h3>
        <p className="text-sm text-slate-600">
          Upload identity, address and shop proof documents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aadhaar Front + OCR */}
        <div>
          <Label className="flex items-center gap-1 mb-1">
            Aadhaar (Front) <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange("aadhaarFront")}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleOcrClick("aadhaarFront")}
            >
              OCR
            </Button>
          </div>
        </div>

        {/* Aadhaar Back + OCR */}
        <div>
          <Label className="flex items-center gap-1 mb-1">
            Aadhaar (Back) <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange("aadhaarBack")}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleOcrClick("aadhaarBack")}
            >
              OCR
            </Button>
          </div>
        </div>

        {/* PAN Front + OCR */}
        <div>
          <Label className="flex items-center gap-1 mb-1">
            PAN Card <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange("panCard")}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleOcrClick("panCard")}
            >
              OCR
            </Button>
          </div>
        </div>

        {/* GST Certificate */}
        <div>
          <Label className="mb-1">GST Certificate</Label>
          <Input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange("gstCert")}
          />
        </div>

        {/* Cancelled Cheque */}
        <div>
          <Label className="mb-1">Cancelled Cheque</Label>
          <Input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange("cancelledCheque")}
          />
        </div>

        {/* Shop Photo */}
        <div>
          <Label className="mb-1">Shop / Office Photo</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange("shopPhoto")}
          />
        </div>

        {/* Owner Photo */}
        <div>
          <Label className="mb-1">Owner Photo</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange("ownerPhoto")}
          />
        </div>

        {/* Utility Bill */}
        <div>
          <Label className="mb-1">Electricity / Utility Bill</Label>
          <Input
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange("utilityBill")}
          />
        </div>
      </div>
    </div>
  );
}

export default KycDocuments;
