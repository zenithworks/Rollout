"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basePath_1 = require("./basePath");
const fetch = require("node-fetch");
const setFeatureFlags = ({ flags = [] } = {}) => ({
    type: "SET_FEATURE_FLAGS",
    flags
});
const setFeatureFlagUsage = ({ usage = [] } = {}) => ({
    type: "SET_FEATURE_FLAG_USAGE",
    usage
});
const setFeatureFlagErrors = ({ errors = [] } = {}) => ({
    type: "SET_FEATURE_FLAG_ERRORS",
    errors
});
class FeatureFlagsAPI {
    static fetchFeatureFlags(projectId) {
        const url = basePath_1.FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
        console.log("Fetching " + url);
        return fetch(url)
            .then((data) => data.json())
            .then((flags) => {
            //console.log(flags);
            return flags;
        })
            .catch((error) => {
            throw error;
        });
    }
    static createNewFeatureFlag(flag, projectId) {
        const url = basePath_1.FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
        console.log("Posting on " + url);
        const param = {
            body: JSON.stringify(flag),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: "POST"
        };
        return fetch(url, param)
            .then(() => {
            return "created";
        })
            .catch((error) => {
            console.log(error);
        });
    }
    static updateFeatureFlag(flag, projectId) {
        const url = basePath_1.FeatureFlagApiBasePath + "/featureflags/" + flag.id + "?projectId=" + projectId;
        console.log("Putting on " + url);
        console.log(JSON.stringify(flag));
        const param = {
            body: JSON.stringify(flag),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: "PUT"
        };
        return fetch(url, param)
            .then(() => {
            console.log("feature flag updated successfully");
            return "Feature flag updated";
        })
            .catch((error) => {
            console.log(error);
        });
    }
    static toggleFeatureFlag(flag, projectId) {
        var flagValue = flag.state.value == "on" ? "off" : "on";
        flag.state.value = flagValue;
        const url = basePath_1.FeatureFlagApiBasePath + "/featureflags/" + flag.id + "?projectId=" + projectId;
        console.log("Fetching " + url);
        const param = {
            body: JSON.stringify(flag),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: "PUT"
        };
        return fetch(url, param)
            .then(() => {
            console.log("feature flag updated successfully");
            return "feature flag state updated";
        })
            .catch((error) => {
            console.log(error);
        });
    }
}
exports.FeatureFlagsAPI = FeatureFlagsAPI;
