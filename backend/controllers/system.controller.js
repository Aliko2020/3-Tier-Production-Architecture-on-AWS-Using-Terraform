export const getApiInfo = (req, res) => {
  res.status(200).json({
    name: "3-Tier Production API",
    status: "running",
    version: "v1",
    baseUrl: "/api/v1",
    endpoints: {
      auth: {
        register: "POST /api/v1/auth/register",
        login: "POST /api/v1/auth/login",
        profile: "GET /api/v1/auth/me",
        verify: "GET /api/v1/auth/verify"
      }
    },
    timestamp: new Date().toISOString()
  });
};

export const getHealth = (req, res) => {
  res.status(200).json({ status: "ok" });
};
