import {FeatureFlagApiBasePath, FeatureFlagUsageApiBasePath, startActiveCall, endActiveCall} from './basePath';

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
        .then(data => data.json())
        .then(flags => {
            console.log(flags)
        })
        .catch(error => {
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
            .catch(error => {
                console.log(error);
            });
  
};

