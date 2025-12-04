import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

function App() {
  const [tab, setTab] = useState("email")      // "email" or "mobile"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [otp, setOtp] = useState("")

  const handleEmailLogin = (e) => {
    e.preventDefault()
    console.log("Email login:", { email, password })
  }

  const handleMobileLogin = (e) => {
    e.preventDefault()
    console.log("Mobile login:", { mobile, otp })
  }

  // allow only digits in mobile + otp
  const handleMobileChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "")
    setMobile(digitsOnly)
  }

  const handleOtpChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "")
    setOtp(digitsOnly)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <Card className="w-full max-w-sm border-blue-600/20 shadow-lg">
        <CardHeader className="space-y-3">
          <div className="flex justify-center">
            <span className="text-2xl font-bold">
              <span className="text-blue-700">Zy</span>
              <span className="text-green-600">Pay</span>
            </span>
          </div>
          <CardTitle className="text-center text-lg text-slate-800">
            Dealer Login
          </CardTitle>

          {/* Tabs */}
          <div className="flex mt-2 rounded-full bg-slate-200 p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setTab("email")}
              className={`flex-1 py-1 rounded-full ${
                tab === "email"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-slate-600"
              }`}
            >
              Email & Password
            </button>
            <button
              type="button"
              onClick={() => setTab("mobile")}
              className={`flex-1 py-1 rounded-full ${
                tab === "mobile"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-slate-600"
              }`}
            >
              Mobile & OTP
            </button>
          </div>
        </CardHeader>

        <CardContent>
          {tab === "email" ? (
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="dealer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-blue-100 focus-visible:ring-blue-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-blue-100 focus-visible:ring-blue-600"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white"
              >
                Login
              </Button>
            </form>
          ) : (
            <form onSubmit={handleMobileLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter dealer mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                  className="border-blue-100 focus-visible:ring-blue-600"
                  maxLength={10}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  OTP
                </label>
                <Input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={handleOtpChange}
                  className="border-blue-100 focus-visible:ring-blue-600"
                  maxLength={6}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white"
              >
                Verify & Login
              </Button>
            </form>
          )}
        </CardContent>

        <CardFooter className="justify-center text-xs text-slate-500">
          Powered by <span className="ml-1 font-semibold text-green-600">ZyPay</span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App