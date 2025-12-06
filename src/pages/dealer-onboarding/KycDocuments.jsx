// // // src/pages/dealer-onboarding/KycDocuments.jsx
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";

// // function KycDocuments({ value = {}, onChange }) {
// //   // For now just log files; integration with upload API can be added later.
// //   const handleFileChange = (field) => (e) => {
// //     const file = e.target.files?.[0];
// //     onChange({ [field]: file });
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <div>
// //         <h3 className="text-lg font-semibold text-slate-800">
// //           KYC Documents
// //         </h3>
// //         <p className="text-sm text-slate-600">
// //           Upload identity, address and shop proof documents.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <div>
// //           <Label>Aadhaar (Front)</Label>
// //           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("aadhaarFront")} />
// //         </div>
// //         <div>
// //           <Label>Aadhaar (Back)</Label>
// //           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("aadhaarBack")} />
// //         </div>
// //         <div>
// //           <Label>PAN Card</Label>
// //           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("panCard")} />
// //         </div>
// //         <div>
// //           <Label>GST Certificate</Label>
// //           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("gstCert")} />
// //         </div>
// //         <div>
// //           <Label>Cancelled Cheque</Label>
// //           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("cancelledCheque")} />
// //         </div>
// //         <div>
// //           <Label>Shop / Office Photo</Label>
// //           <Input type="file" accept="image/*" onChange={handleFileChange("shopPhoto")} />
// //         </div>
// //         <div>
// //           <Label>Owner Photo</Label>
// //           <Input type="file" accept="image/*" onChange={handleFileChange("ownerPhoto")} />
// //         </div>
// //         <div>
// //           <Label>Electricity / Utility Bill</Label>
// //           <Input type="file" accept="image/*,application/pdf" onChange={handleFileChange("utilityBill")} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default KycDocuments;


// // src/pages/dealer-onboarding/KycDocuments.jsx
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

// function KycDocuments({ value = {}, onChange, onOcr }) {
//   // store file in state (parent) when selected
//   const handleFileChange = (field) => (e) => {
//     const file = e.target.files?.[0];
//     onChange({ [field]: file });
//   };

//   // trigger OCR callback if file is present
//   const handleOcrClick = (field) => {
//     const file = value[field];

//     if (!file) {
//       console.warn(`No file selected for ${field}, cannot run OCR`);
//       // you can also show a toast instead of console.warn
//       return;
//     }

//     if (onOcr) {
//       onOcr(field, file);
//     }
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
//         {/* Aadhaar Front + OCR */}
//         <div>
//           <Label className="flex items-center gap-1 mb-1">
//             Aadhaar (Front) <span className="text-red-500">*</span>
//           </Label>
//           <div className="flex items-center gap-2">
//             <Input
//               type="file"
//               accept="image/*,application/pdf"
//               onChange={handleFileChange("aadhaarFront")}
//             />
//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={() => handleOcrClick("aadhaarFront")}
//             >
//               OCR
//             </Button>
//           </div>
//         </div>

//         {/* Aadhaar Back + OCR */}
//         <div>
//           <Label className="flex items-center gap-1 mb-1">
//             Aadhaar (Back) <span className="text-red-500">*</span>
//           </Label>
//           <div className="flex items-center gap-2">
//             <Input
//               type="file"
//               accept="image/*,application/pdf"
//               onChange={handleFileChange("aadhaarBack")}
//             />
//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={() => handleOcrClick("aadhaarBack")}
//             >
//               OCR
//             </Button>
//           </div>
//         </div>

//         {/* PAN Front + OCR */}
//         <div>
//           <Label className="flex items-center gap-1 mb-1">
//             PAN Card <span className="text-red-500">*</span>
//           </Label>
//           <div className="flex items-center gap-2">
//             <Input
//               type="file"
//               accept="image/*,application/pdf"
//               onChange={handleFileChange("panCard")}
//             />
//             <Button
//               type="button"
//               variant="outline"
//               size="sm"
//               onClick={() => handleOcrClick("panCard")}
//             >
//               OCR
//             </Button>
//           </div>
//         </div>

//         {/* GST Certificate */}
//         <div>
//           <Label className="mb-1">GST Certificate</Label>
//           <Input
//             type="file"
//             accept="image/*,application/pdf"
//             onChange={handleFileChange("gstCert")}
//           />
//         </div>

//         {/* Cancelled Cheque */}
//         <div>
//           <Label className="mb-1">Cancelled Cheque</Label>
//           <Input
//             type="file"
//             accept="image/*,application/pdf"
//             onChange={handleFileChange("cancelledCheque")}
//           />
//         </div>

//         {/* Shop Photo */}
//         <div>
//           <Label className="mb-1">Shop / Office Photo</Label>
//           <Input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange("shopPhoto")}
//           />
//         </div>

//         {/* Owner Photo */}
//         <div>
//           <Label className="mb-1">Owner Photo</Label>
//           <Input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange("ownerPhoto")}
//           />
//         </div>

//         {/* Utility Bill */}
//         <div>
//           <Label className="mb-1">Electricity / Utility Bill</Label>
//           <Input
//             type="file"
//             accept="image/*,application/pdf"
//             onChange={handleFileChange("utilityBill")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default KycDocuments;


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function KycDocuments({
  value = {},
  onChange,
  onOcr,
  onPanFetch,
  onGstFetch,
}) {
  if (!onChange) {
    throw new Error("KycDocuments requires onChange prop");
  }

  // update any field in parent state
  const update = (payload) => {
    onChange(payload);
  };

  // store file in state when selected
  const handleFileChange = (field) => (e) => {
    const file = e.target.files?.[0] || null;
    update({ [field]: file });
  };

  // update text fields
  const handleTextChange = (field) => (e) => {
    update({ [field]: e.target.value });
  };

  // trigger OCR callback if file is present
  const handleOcrClick = (field) => {
    const file = value[field];
    if (!file) {
      console.warn(`No file selected for ${field}, cannot run OCR`);
      return;
    }
    onOcr && onOcr(field, file);
  };

  const handlePanBlur = () => {
    const pan = value.panNumber?.trim();
    if (pan && onPanFetch) {
      onPanFetch(pan);
    }
  };

  const handleGstBlur = () => {
    const gst = value.gstNumber?.trim();
    if (gst && onGstFetch) {
      onGstFetch(gst);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          KYC Documents
        </h3>
        <p className="text-sm text-slate-600">
          Upload identity, address and shop proof documents and verify them
          via OCR / PAN / GST APIs.
        </p>
      </div>

      {/* -------- AADHAAR SECTION -------- */}
      <div className="border rounded-lg p-4 space-y-4">
        <h4 className="font-semibold text-slate-800 text-sm">
          Aadhaar Details
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Aadhaar Front + OCR */}
          <div>
            <Label className="flex items-center gap-1 mb-1">
              Aadhaar (Front) <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange("aadhaarFrontFile")}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleOcrClick("aadhaarFrontFile")}
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
                onChange={handleFileChange("aadhaarBackFile")}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleOcrClick("aadhaarBackFile")}
              >
                OCR
              </Button>
            </div>
          </div>
        </div>

        {/* Aadhaar text fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="mb-1">Aadhaar Number</Label>
            <Input
              value={value.aadhaarNumber || ""}
              onChange={handleTextChange("aadhaarNumber")}
              maxLength={12}
            />
          </div>
          <div>
            <Label className="mb-1">Name on Aadhaar</Label>
            <Input
              value={value.aadhaarName || ""}
              onChange={handleTextChange("aadhaarName")}
            />
          </div>
          <div>
            <Label className="mb-1">Date of Birth</Label>
            <Input
              type="date"
              value={value.aadhaarDob || ""}
              onChange={handleTextChange("aadhaarDob")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label className="mb-1">Aadhaar Address</Label>
            <Input
              value={value.aadhaarAddress || ""}
              onChange={handleTextChange("aadhaarAddress")}
            />
          </div>
          <div>
            <Label className="mb-1">Pincode</Label>
            <Input
              value={value.aadhaarPincode || ""}
              onChange={handleTextChange("aadhaarPincode")}
              maxLength={6}
            />
          </div>
        </div>
      </div>

      {/* -------- PAN SECTION -------- */}
      <div className="border rounded-lg p-4 space-y-4">
        <h4 className="font-semibold text-slate-800 text-sm">
          PAN Details
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PAN Front + OCR */}
          <div>
            <Label className="flex items-center gap-1 mb-1">
              PAN Card (Front) <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange("panFile")}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleOcrClick("panFile")}
              >
                OCR
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="mb-1">PAN Number</Label>
            <Input
              value={value.panNumber || ""}
              onChange={handleTextChange("panNumber")}
              onBlur={handlePanBlur} // call API when user leaves field
              maxLength={10}
            />
            <p className="text-xs text-slate-500 mt-1">
              On blur you can call PAN API to fetch dealer details.
            </p>
          </div>
          <div>
            <Label className="mb-1">Name on PAN</Label>
            <Input
              value={value.panName || ""}
              onChange={handleTextChange("panName")}
            />
          </div>
          <div>
            <Label className="mb-1">Date of Birth / Incorporation</Label>
            <Input
              type="date"
              value={value.panDob || ""}
              onChange={handleTextChange("panDob")}
            />
          </div>
        </div>
      </div>

      {/* -------- GST SECTION -------- */}
      <div className="border rounded-lg p-4 space-y-4">
        <h4 className="font-semibold text-slate-800 text-sm">
          GST Details (for Dealer / Shop)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* GST Certificate */}
          <div>
            <Label className="mb-1">GST Certificate</Label>
            <Input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange("gstFile")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="mb-1">GSTIN</Label>
            <Input
              value={value.gstNumber || ""}
              onChange={handleTextChange("gstNumber")}
              onBlur={handleGstBlur}
              maxLength={15}
            />
            <p className="text-xs text-slate-500 mt-1">
              On blur you can call GST API and auto-fill below fields.
            </p>
          </div>
          <div>
            <Label className="mb-1">Legal Name (as per GST)</Label>
            <Input
              value={value.gstLegalName || ""}
              onChange={handleTextChange("gstLegalName")}
            />
          </div>
          <div>
            <Label className="mb-1">Trade Name</Label>
            <Input
              value={value.gstTradeName || ""}
              onChange={handleTextChange("gstTradeName")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label className="mb-1">Business Address</Label>
            <Input
              value={value.gstAddress || ""}
              onChange={handleTextChange("gstAddress")}
            />
          </div>
          <div>
            <Label className="mb-1">State</Label>
            <Input
              value={value.gstState || ""}
              onChange={handleTextChange("gstState")}
            />
          </div>
        </div>
      </div>

      {/* -------- OTHER DOCS (same as before) -------- */}
      <div className="border rounded-lg p-4 space-y-4">
        <h4 className="font-semibold text-slate-800 text-sm">
          Other Documents
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="mb-1">Cancelled Cheque</Label>
            <Input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange("cancelledCheque")}
            />
          </div>

          <div>
            <Label className="mb-1">Shop / Office Photo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange("shopPhoto")}
            />
          </div>

          <div>
            <Label className="mb-1">Owner Photo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange("ownerPhoto")}
            />
          </div>

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
    </div>
  );
}

export default KycDocuments;
