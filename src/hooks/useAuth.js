export default function useAuth() {
  const stored = localStorage.getItem("dealer_portal_auth");

  if (!stored) return { user: null, role: null, token: null, isAuthenticated: false };

  const { user, token } = JSON.parse(stored);

  return {
    user,
    role: user?.role || null,
    token,
    isAuthenticated: Boolean(token)
  };
}
