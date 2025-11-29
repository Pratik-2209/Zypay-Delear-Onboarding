import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

function DealerOnboardingPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-slate-800">Dealer Onboarding</h2>
      <p className="text-sm text-slate-600">Fill all dealer details to complete onboarding.</p>

      <Card>
        <CardContent className="py-4">
          <Accordion type="multiple" className="w-full">

            {/* ================= BASIC DETAILS ================= */}
            <AccordionItem value="basic">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Menu size={18} />
                  <span>Basic Details</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <Label>Dealer Name</Label>
                    <Input placeholder="Enter dealer name" />
                  </div>
                  <div>
                    <Label>Owner Name</Label>
                    <Input placeholder="Enter owner name" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter email" />
                  </div>
                  <div>
                    <Label>Mobile Number</Label>
                    <Input placeholder="Enter mobile number" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ================= BUSINESS DETAILS ================= */}
            <AccordionItem value="business">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Menu size={18} />
                  <span>Business Details</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <Label>Business Name</Label>
                    <Input placeholder="Enter business name" />
                  </div>
                  <div>
                    <Label>Business Type</Label>
                    <Input placeholder="Proprietor / Pvt Ltd / LLP" />
                  </div>
                  <div>
                    <Label>GST Number</Label>
                    <Input placeholder="Enter GST" />
                  </div>
                  <div>
                    <Label>PAN Number</Label>
                    <Input placeholder="Enter PAN" />
                  </div>
                  <div className="col-span-2">
                    <Label>Business Description</Label>
                    <Textarea placeholder="Describe the business..." />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ================= ADDRESS ================= */}
            <AccordionItem value="address">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Menu size={18} />
                  <span>Address</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-4">
                  <div>
                    <Label>Shop / Office Address</Label>
                    <Textarea placeholder="Address line..." />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label>City</Label>
                      <Input placeholder="City" />
                    </div>
                    <div>
                      <Label>State</Label>
                      <Input placeholder="State" />
                    </div>
                    <div>
                      <Label>Pincode</Label>
                      <Input placeholder="Pincode" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ================= KYC DOCUMENTS ================= */}
            <AccordionItem value="kyc">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Menu size={18} />
                  <span>KYC Documents</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-6 py-4">
                  <div>
                    <Label>Aadhaar (Front)</Label>
                    <Input type="file" />
                  </div>
                  <div>
                    <Label>Aadhaar (Back)</Label>
                    <Input type="file" />
                  </div>
                  <div>
                    <Label>PAN Card</Label>
                    <Input type="file" />
                  </div>
                  <div>
                    <Label>GST Certificate</Label>
                    <Input type="file" />
                  </div>
                  <div className="col-span-2">
                    <Label>Cancelled Cheque</Label>
                    <Input type="file" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ================= BANK DETAILS ================= */}
            <AccordionItem value="bank">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Menu size={18} />
                  <span>Bank Details</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <Label>Account Holder Name</Label>
                    <Input placeholder="Account holder name" />
                  </div>
                  <div>
                    <Label>Account Number</Label>
                    <Input placeholder="Account number" />
                  </div>
                  <div>
                    <Label>IFSC Code</Label>
                    <Input placeholder="IFSC" />
                  </div>
                  <div>
                    <Label>Bank Name</Label>
                    <Input placeholder="Bank name" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ================= AGREEMENT ================= */}
            <AccordionItem value="agreement">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Menu size={18} />
                  <span>Agreement & Compliance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-4">
                  <div>
                    <Label>Dealer Agreement (PDF)</Label>
                    <Input type="file" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <Label className="text-sm">I agree to the terms and conditions.</Label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ================= LOGIN SETUP ================= */}
            <AccordionItem value="login">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Menu size={18} />
                  <span>Login Credentials</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <Label>Username (Email)</Label>
                    <Input placeholder="Auto-filled or enter username" />
                  </div>
                  <div>
                    <Label>Password</Label>
                    <Input placeholder="Temporary password" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* FINAL SUBMIT BUTTON */}
          <Button className="w-full mt-6">Submit Dealer Onboarding</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default DealerOnboardingPage
