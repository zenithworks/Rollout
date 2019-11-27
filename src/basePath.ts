export const SiteBasePath = "";
export const TenantApiBasePath = "/api"
export const FeatureFlagApiBasePath = "/api"
export const FeatureFlagUsageApiBasePath = "/api"
export const OrchestratorApiBasePath = "/api"

export const startActiveCall = () => ({
    type: "START_ACTIVECALL",
});

export const endActiveCall = () => ({
    type: "END_ACTIVECALL",
});