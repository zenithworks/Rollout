"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteBasePath = "https://flipflop.vigilance.ms/";
exports.TenantApiBasePath = "/api";
exports.FeatureFlagApiBasePath = exports.SiteBasePath + "/api";
exports.FeatureFlagUsageApiBasePath = "/api";
exports.OrchestratorApiBasePath = "/api";
exports.startActiveCall = () => ({
    type: "START_ACTIVECALL",
});
exports.endActiveCall = () => ({
    type: "END_ACTIVECALL",
});
