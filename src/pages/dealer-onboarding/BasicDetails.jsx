// src/pages/dealer-onboarding/BasicDetails.jsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function BasicDetails({ value = {}, onChange, errors = {} }) {
  const handleChange = (field) => (e) => {
    onChange({ [field]: e.target.value });
  };

  // Required label with red *
  const RequiredLabel = ({ children }) => (
    <Label className="flex items-center gap-1 mb-1">
      {children} <span className="text-red-500">*</span>
    </Label>
  );

  // Show red text under invalid field
  const errorText = (field) =>
    errors?.[field] ? (
      <p className="text-red-500 text-xs mt-1">This field is required</p>
    ) : null;

  // Add red border to invalid fields
  const errorClass = (field) =>
    errors?.[field] ? "border-red-500 focus-visible:ring-red-500" : "";

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">Basic Details</h3>
        <p className="text-sm text-slate-600">
          Primary contact and shop information for the dealer.
        </p>
      </div>

      {/* Main info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <RequiredLabel>Dealer Name</RequiredLabel>
          <Input
            className={errorClass("dealerName")}
            placeholder="Enter dealer name"
            value={value.dealerName || ""}
            onChange={handleChange("dealerName")}
          />
          {errorText("dealerName")}
        </div>

        <div>
          <RequiredLabel>Owner Name</RequiredLabel>
          <Input
            className={errorClass("ownerName")}
            placeholder="Enter owner name"
            value={value.ownerName || ""}
            onChange={handleChange("ownerName")}
          />
          {errorText("ownerName")}
        </div>

        <div>
          <RequiredLabel>Owner DOB</RequiredLabel>
          <Input
            type="date"
            className={errorClass("ownerDob")}
            value={value.ownerDob || ""}
            onChange={handleChange("ownerDob")}
          />
          {errorText("ownerDob")}
        </div>

        <div>
          <RequiredLabel>Mobile Number</RequiredLabel>
          <Input
            className={errorClass("mobile")}
            placeholder="Primary mobile"
            value={value.mobile || ""}
            onChange={handleChange("mobile")}
          />
          {errorText("mobile")}
        </div>

        <div>
          <Label className="mb-1">Alternate Mobile (Optional)</Label>
          <Input
            placeholder="Alternate mobile"
            value={value.altMobile || ""}
            onChange={handleChange("altMobile")}
          />
        </div>

        <div>
          <Label className="mb-1">WhatsApp Number (Optional)</Label>
          <Input
            placeholder="WhatsApp number"
            value={value.whatsapp || ""}
            onChange={handleChange("whatsapp")}
          />
        </div>

        <div className="md:col-span-3 md:w-1/3">
          <RequiredLabel>Email</RequiredLabel>
          <Input
            type="email"
            className={errorClass("email")}
            placeholder="Owner / primary email"
            value={value.email || ""}
            onChange={handleChange("email")}
          />
          {errorText("email")}
        </div>
      </div>

      {/* Shop address */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-slate-700">Shop / Office Address</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="md:col-span-2">
            <RequiredLabel>Address Line 1</RequiredLabel>
            <Textarea
              className={errorClass("shopAddressLine1")}
              placeholder="Flat / Building / Road"
              value={value.shopAddressLine1 || ""}
              onChange={handleChange("shopAddressLine1")}
            />
            {errorText("shopAddressLine1")}
          </div>

          <div className="md:col-span-2">
            <Label className="mb-1">Address Line 2 (Optional)</Label>
            <Input
              placeholder="Landmark / Area"
              value={value.shopAddressLine2 || ""}
              onChange={handleChange("shopAddressLine2")}
            />
          </div>

          <div>
            <RequiredLabel>City</RequiredLabel>
            <Input
              className={errorClass("shopCity")}
              placeholder="City"
              value={value.shopCity || ""}
              onChange={handleChange("shopCity")}
            />
            {errorText("shopCity")}
          </div>

          <div>
            <RequiredLabel>State</RequiredLabel>
            <Input
              className={errorClass("shopState")}
              placeholder="State"
              value={value.shopState || ""}
              onChange={handleChange("shopState")}
            />
            {errorText("shopState")}
          </div>

          <div>
            <RequiredLabel>Pincode</RequiredLabel>
            <Input
              className={errorClass("shopPincode")}
              placeholder="Pincode"
              value={value.shopPincode || ""}
              onChange={handleChange("shopPincode")}
            />
            {errorText("shopPincode")}
          </div>

        </div>
      </div>
    </div>
  );
}

export default BasicDetails;
