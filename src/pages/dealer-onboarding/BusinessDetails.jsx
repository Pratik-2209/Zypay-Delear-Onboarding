// src/pages/dealer-onboarding/BusinessDetails.jsx
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function BusinessDetails({ value = {}, onChange, errors = {} }) {
  const handleChange = (field) => (e) => {
    onChange({ [field]: e.target.value });
  };

  // 🔥 Required label helper
  const RequiredLabel = ({ children }) => (
    <Label className="flex items-center gap-1 mb-1">
      {children} <span className="text-red-500">*</span>
    </Label>
  );

  // 🔥 Error message
  const errorText = (field) =>
    errors?.[field] ? (
      <p className="text-red-500 text-xs mt-1">This field is required</p>
    ) : null;

  // 🔥 Error border
  const errorClass = (field) =>
    errors?.[field] ? "border-red-500 focus-visible:ring-red-500" : "";

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">Business Details</h3>
        <p className="text-sm text-slate-600">
          Registered business information of the dealer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Business Name */}
        <div>
          <RequiredLabel>Business Name</RequiredLabel>
          <Input
            className={errorClass("businessName")}
            placeholder="Registered business name"
            value={value.businessName || ""}
            onChange={handleChange("businessName")}
          />
          {errorText("businessName")}
        </div>

        {/* Business Type */}
        <div>
          <RequiredLabel>Business Type</RequiredLabel>
          <select
            className={`mt-1 block w-full rounded-md border bg-white px-3 py-2 text-sm ${
              errors?.businessType ? "border-red-500" : "border-slate-200"
            }`}
            value={value.businessType || ""}
            onChange={handleChange("businessType")}
          >
            <option value="">Select type</option>
            <option value="proprietor">Proprietor</option>
            <option value="partnership">Partnership</option>
            <option value="pvtltd">Pvt Ltd</option>
            <option value="llp">LLP</option>
            <option value="other">Other</option>
          </select>
          {errorText("businessType")}
        </div>

        {/* Incorporation Date */}
        <div>
          <RequiredLabel>Incorporation Date</RequiredLabel>
          <Input
            type="date"
            className={`${errorClass("incorpDate")} pr-10`}
            value={value.incorpDate || ""}
            onChange={handleChange("incorpDate")}
          />
          {errorText("incorpDate")}
        </div>

        {/* Business PAN */}
        <div>
          <RequiredLabel>Business PAN</RequiredLabel>
          <Input
            className={errorClass("businessPan")}
            placeholder="Business PAN"
            value={value.businessPan || ""}
            onChange={handleChange("businessPan")}
          />
          {errorText("businessPan")}
        </div>

        {/* GST */}
        <div>
          <RequiredLabel>GST Number</RequiredLabel>
          <Input
            className={errorClass("gst")}
            placeholder="GST number"
            value={value.gst || ""}
            onChange={handleChange("gst")}
          />
          {errorText("gst")}
        </div>

        {/* Business Email */}
        <div>
          <RequiredLabel>Business Email</RequiredLabel>
          <Input
            type="email"
            className={errorClass("businessEmail")}
            placeholder="Business email"
            value={value.businessEmail || ""}
            onChange={handleChange("businessEmail")}
          />
          {errorText("businessEmail")}
        </div>

        {/* Premises Type */}
        <div>
          <RequiredLabel>Premises Type</RequiredLabel>
          <select
            className={`mt-1 block w-full rounded-md border bg-white px-3 py-2 text-sm ${
              errors?.premisesType ? "border-red-500" : "border-slate-200"
            }`}
            value={value.premisesType || ""}
            onChange={handleChange("premisesType")}
          >
            <option value="">Select</option>
            <option value="owned">Owned</option>
            <option value="rented">Rented</option>
          </select>
          {errorText("premisesType")}
        </div>

        {/* Rent */}
        <div>
          <Label className="mb-1">Monthly Rent (if rented)</Label>
          <Input
            placeholder="₹ per month"
            value={value.rent || ""}
            onChange={handleChange("rent")}
          />
        </div>

        {/* Employees */}
        <div>
          <RequiredLabel>Number of Employees</RequiredLabel>
          <Input
            type="number"
            className={errorClass("employees")}
            placeholder="Employees"
            value={value.employees || ""}
            onChange={handleChange("employees")}
          />
          {errorText("employees")}
        </div>
      </div>

      {/* Registered address */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-slate-700">
          Registered Office Address
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="md:col-span-2">
            <RequiredLabel>Address Line 1</RequiredLabel>
            <Textarea
              className={errorClass("regAddressLine1")}
              placeholder="Flat / Building / Road"
              value={value.regAddressLine1 || ""}
              onChange={handleChange("regAddressLine1")}
            />
            {errorText("regAddressLine1")}
          </div>

          <div className="md:col-span-2">
            <Label className="mb-1">Address Line 2 (Optional)</Label>
            <Input
              placeholder="Area / Landmark"
              value={value.regAddressLine2 || ""}
              onChange={handleChange("regAddressLine2")}
            />
          </div>

          <div>
            <RequiredLabel>City</RequiredLabel>
            <Input
              className={errorClass("regCity")}
              placeholder="City"
              value={value.regCity || ""}
              onChange={handleChange("regCity")}
            />
            {errorText("regCity")}
          </div>

          <div>
            <RequiredLabel>State</RequiredLabel>
            <Input
              className={errorClass("regState")}
              placeholder="State"
              value={value.regState || ""}
              onChange={handleChange("regState")}
            />
            {errorText("regState")}
          </div>

          <div>
            <RequiredLabel>Pincode</RequiredLabel>
            <Input
              className={errorClass("regPincode")}
              placeholder="Pincode"
              value={value.regPincode || ""}
              onChange={handleChange("regPincode")}
            />
            {errorText("regPincode")}
          </div>
        </div>
      </div>

      {/* Business description */}
      <div className="space-y-2">
        <RequiredLabel>Business Description</RequiredLabel>
        <Textarea
          className={errorClass("description")}
          placeholder="Describe dealer's core business, products and customers..."
          value={value.description || ""}
          onChange={handleChange("description")}
        />
        {errorText("description")}
      </div>
    </div>
  );
}

export default BusinessDetails;
