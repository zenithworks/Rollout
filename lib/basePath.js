"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteBasePath = "";
exports.TenantApiBasePath = "/api";
exports.FeatureFlagApiBasePath = "/api";
exports.FeatureFlagUsageApiBasePath = "/api";
exports.OrchestratorApiBasePath = "/api";
exports.startActiveCall = () => ({
    type: "START_ACTIVECALL",
});
exports.endActiveCall = () => ({
    type: "END_ACTIVECALL",
});
