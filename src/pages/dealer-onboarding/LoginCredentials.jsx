// src/pages/dealer-onboarding/LoginCredentials.jsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function LoginCredentials({ value = {}, onChange, basicData = {} }) {
  const handleChange = (field) => (e) => {
    onChange({ [field]: e.target.value });
  };

  const handleGeneratePassword = () => {
    const pwd = Math.random().toString(36).slice(-10); // simple temp password
    onChange({ password: pwd, confirmPassword: pwd });
  };

  const suggestedUsername = basicData.email || "";

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          Login Credentials
        </h3>
        <p className="text-sm text-slate-600">
          Credentials that the dealer admin will use to log in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Username (Email)</Label>
          <Input
            placeholder="Login username (email)"
            value={value.username || suggestedUsername}
            onChange={handleChange("username")}
          />
          {suggestedUsername && (
            <p className="mt-1 text-xs text-slate-500">
              Suggested from Basic Details: <b>{suggestedUsername}</b>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label>Password</Label>
          <Input
            type="text"
            placeholder="Temporary password"
            value={value.password || ""}
            onChange={handleChange("password")}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="self-start"
            onClick={handleGeneratePassword}
          >
            Generate Password
          </Button>
        </div>
        <div>
          <Label>Confirm Password</Label>
          <Input
            type="text"
            placeholder="Re-enter password"
            value={value.confirmPassword || ""}
            onChange={handleChange("confirmPassword")}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginCredentials;
