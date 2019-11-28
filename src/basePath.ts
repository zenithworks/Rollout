export const SiteBasePath = "https://flipflop.vigilance.ms";
export const TenantApiBasePath = "/api"
export const FeatureFlagApiBasePath = SiteBasePath + "/api"
export const FeatureFlagUsageApiBasePath = "/api"
export const OrchestratorApiBasePath = "/api"

export const startActiveCall = () => ({
    type: "START_ACTIVECALL",
});

export const endActiveCall = () => ({
    type: "END_ACTIVECALL",
});