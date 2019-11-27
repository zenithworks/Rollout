import {FeatureFlagApiBasePath, FeatureFlagUsageApiBasePath, startActiveCall, endActiveCall} from './basePath';
const fetch = require("node-fetch");


const setFeatureFlags = ({flags = []} = {}) => ({
    type: "SET_FEATURE_FLAGS",
    flags
});

const setFeatureFlagUsage = ({usage = []} = {}) => ({
    type: "SET_FEATURE_FLAG_USAGE",
    usage
});

const setFeatureFlagErrors = ({errors = []} = {}) => ({
    type: "SET_FEATURE_FLAG_ERRORS",
    errors
});

export const fetchFeatureFlags = (projectId: string) => {

    const url = FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
    console.log("Fetching " + url);
    fetch(url)
        .then((data:any) => data.json())
        .then( (flags : any) => {
            console.log(flags)
        })
        .catch( (error: any) => {
            console.log(error);
        });

};

export const createNewFeatureFlag = (flag: any, projectId: string) => {
    
        const url = FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
        console.log("Posting on " + url);
        const param = {
            body: JSON.stringify(flag),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: "POST"
        }
        fetch(url, param)
            .then(() => {
            })
            .catch((error: any) => {
                console.log(error);
            });
  
};

