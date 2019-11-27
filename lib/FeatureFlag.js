"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basePath_1 = require("./basePath");
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
exports.fetchFeatureFlags = (projectId) => {
    const url = basePath_1.FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
    console.log("Fetching " + url);
    fetch(url)
        .then(data => data.json())
        .then(flags => {
        console.log(flags);
    })
        .catch(error => {
        console.log(error);
    });
};
exports.createNewFeatureFlag = (flag, projectId) => {
    const url = basePath_1.FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
    console.log("Posting on " + url);
    const param = {
        body: JSON.stringify(flag),
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        method: "POST"
    };
    fetch(url, param)
        .then(() => {
    })
        .catch(error => {
        console.log(error);
    });
};
