// src/pages/customer-onboarding/CustomerOnboardingPage.jsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

function CustomerOnboardingPage() {
  // later you can manage state + submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit form
  };

  return (
    <div className="p-6 space-y-4">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Customer Onboarding
        </h1>
        <p className="text-sm text-slate-600">
          Capture customer and loan details to process a new mobile finance application.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="basic">Basic Details</TabsTrigger>
          <TabsTrigger value="kyc">KYC Details</TabsTrigger>
          <TabsTrigger value="address">Address Details</TabsTrigger>
          <TabsTrigger value="employment">Employment &amp; Income</TabsTrigger>
          <TabsTrigger value="loan">Loan &amp; Device</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
          <TabsTrigger value="references">References &amp; Consent</TabsTrigger>
        </TabsList>

        {/* BASIC DETAILS */}
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-slate-900">
                Basic Details
              </CardTitle>
              <p className="text-sm text-slate-500">
                Primary personal and contact information for the customer.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>
                      Customer Name <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Enter full name" />
                  </div>
                  <div>
                    <Label>
                      Date of Birth <span className="text-red-500">*</span>
                    </Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="Primary mobile" />
                  </div>
                  <div>
                    <Label>Alternate Mobile (Optional)</Label>
                    <Input placeholder="Secondary mobile" />
                  </div>
                  <div>
                    <Label>WhatsApp Number (Optional)</Label>
                    <Input placeholder="WhatsApp number" />
                  </div>

                  <div>
                    <Label>
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input type="email" placeholder="customer@example.com" />
                  </div>
                  <div>
                    <Label>Marital Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* You can put a "Save & Continue" button here or rely on a footer in layout */}
                <div className="flex justify-end">
                  <Button type="submit">Save Basic Details</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* KYC DETAILS */}
        <TabsContent value="kyc">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-slate-900">
                KYC Details
              </CardTitle>
              <p className="text-sm text-slate-500">
                Capture PAN and Aadhaar details and upload KYC documents.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>
                    PAN Number <span className="text-red-500">*</span>
                  </Label>
                  <Input placeholder="ABCDE1234F" maxLength={10} />
                </div>
                <div>
                  <Label>PAN Name</Label>
                  <Input placeholder="Name as per PAN" />
                </div>
                <div>
                  <Label>PAN Upload</Label>
                  <Input type="file" accept="image/*,application/pdf" />
                </div>

                <div>
                  <Label>
                    Aadhaar Number <span className="text-red-500">*</span>
                  </Label>
                  <Input placeholder="12-digit Aadhaar" maxLength={12} />
                </div>
                <div>
                  <Label>Aadhaar Front</Label>
                  <Input type="file" accept="image/*,application/pdf" />
                </div>
                <div>
                  <Label>Aadhaar Back</Label>
                  <Input type="file" accept="image/*,application/pdf" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ADDRESS DETAILS */}
        <TabsContent value="address">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-slate-900">
                Address Details
              </CardTitle>
              <p className="text-sm text-slate-500">
                Current communication and permanent address for the customer.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-800">
                  Current / Communication Address
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label>
                      Address Line 1 <span className="text-red-500">*</span>
                    </Label>
                    <Textarea placeholder="Flat / Building / Road" rows={2} />
                  </div>
                  <div>
                    <Label>Address Line 2 (Optional)</Label>
                    <Textarea placeholder="Landmark / Area" rows={2} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="City" />
                  </div>
                  <div>
                    <Label>
                      State <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="State" />
                  </div>
                  <div>
                    <Label>
                      Pincode <span className="text-red-500">*</span>
                    </Label>
                    <Input placeholder="6-digit pincode" maxLength={6} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Residence Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owned">Owned</SelectItem>
                        <SelectItem value="rented">Rented</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                        <SelectItem value="company">Company Provided</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Years at Current Address</Label>
                    <Input type="number" min={0} placeholder="0" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* EMPLOYMENT & INCOME */}
        <TabsContent value="employment">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-slate-900">
                Employment &amp; Income
              </CardTitle>
              <p className="text-sm text-slate-500">
                Details about customer&apos;s work and monthly income.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>
                    Employment Type <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salaried">Salaried</SelectItem>
                      <SelectItem value="self">Self-employed</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Company / Business Name</Label>
                  <Input placeholder="Employer / Business name" />
                </div>
                <div>
                  <Label>
                    Monthly Net Income <span className="text-red-500">*</span>
                  </Label>
                  <Input type="number" placeholder="₹" />
                </div>
                <div>
                  <Label>Salary Credit Mode</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* LOAN & DEVICE */}
        <TabsContent value="loan">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-slate-900">
                Loan &amp; Device Details
              </CardTitle>
              <p className="text-sm text-slate-500">
                Mobile device and loan structure for this application.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Product Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="tablet">Tablet</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Brand</Label>
                  <Input placeholder="Brand" />
                </div>
                <div>
                  <Label>Model</Label>
                  <Input placeholder="Model name" />
                </div>
                <div>
                  <Label>IMEI 1</Label>
                  <Input placeholder="IMEI 1" />
                </div>
                <div>
                  <Label>IMEI 2 (Optional)</Label>
                  <Input placeholder="IMEI 2" />
                </div>
                <div>
                  <Label>Invoice Number</Label>
                  <Input placeholder="Invoice no." />
                </div>
                <div>
                  <Label>Invoice Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Device MRP</Label>
                  <Input type="number" placeholder="₹" />
                </div>
                <div>
                  <Label>Down Payment</Label>
                  <Input type="number" placeholder="₹" />
                </div>
                <div>
                  <Label>Financed Amount</Label>
                  <Input type="number" placeholder="₹" />
                </div>
                <div>
                  <Label>Tenure (months)</Label>
                  <Input type="number" placeholder="e.g. 6, 9, 12" />
                </div>
                <div>
                  <Label>Interest Rate (%)</Label>
                  <Input type="number" step="0.01" placeholder="ROI" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BANK DETAILS */}
        <TabsContent value="bank">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-slate-900">
                Bank Details
              </CardTitle>
              <p className="text-sm text-slate-500">
                Capture bank account details for mandate / repayment.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Bank Name</Label>
                  <Input placeholder="Bank" />
                </div>
                <div>
                  <Label>Account Holder Name</Label>
                  <Input placeholder="As per bank records" />
                </div>
                <div>
                  <Label>Account Number</Label>
                  <Input placeholder="Account number" />
                </div>
                <div>
                  <Label>IFSC</Label>
                  <Input placeholder="IFSC code" />
                </div>
                <div>
                  <Label>Account Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings</SelectItem>
                      <SelectItem value="current">Current</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* REFERENCES & CONSENT */}
        <TabsContent value="references">
          <Card>
            <CardHeader>
              <CardTitle className="text-base text-slate-900">
                References &amp; Consent
              </CardTitle>
              <p className="text-sm text-slate-500">
                Capture two references and customer consent for bureau, KYC and loan agreement.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    Reference 1
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <Label>Name</Label>
                      <Input placeholder="Full name" />
                    </div>
                    <div>
                      <Label>Relationship</Label>
                      <Input placeholder="e.g. Friend, Brother" />
                    </div>
                    <div>
                      <Label>Mobile Number</Label>
                      <Input placeholder="10-digit mobile" maxLength={10} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    Reference 2
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <Label>Name</Label>
                      <Input placeholder="Full name" />
                    </div>
                    <div>
                      <Label>Relationship</Label>
                      <Input placeholder="e.g. Colleague, Cousin" />
                    </div>
                    <div>
                      <Label>Mobile Number</Label>
                      <Input placeholder="10-digit mobile" maxLength={10} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-medium text-slate-800">
                  Consent
                </Label>
                <div className="space-y-2 text-sm text-slate-700">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      I authorize the lender to pull my credit report, validate my KYC
                      and verify my information from third party sources.
                    </span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      I have read and agree to the Terms &amp; Conditions and loan
                      agreement for this mobile finance facility.
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="button">Submit Customer Application</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default CustomerOnboardingPage;
