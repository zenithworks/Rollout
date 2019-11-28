import {FeatureFlagApiBasePath, FeatureFlagUsageApiBasePath, startActiveCall, endActiveCall, SiteBasePath} from './basePath';
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

export class FeatureFlagsAPI {

    public static fetchFeatureFlags(projectId: string) : Promise<any> {
        const url = FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
        console.log("Fetching " + url);
        return fetch(url)
            .then((data:any) => data.json())
            .then( (flags : any) => {
                console.log(flags);
                return flags;
            })
            .catch( (error: any) => {
                throw error;
            });
   } 

   public static createNewFeatureFlag(flag: any, projectId: string) : Promise<any> {
    
        const url = FeatureFlagApiBasePath + "/featureflags?projectId=" + projectId;
        console.log("Posting on " + url);
        const param = {
            body: JSON.stringify(flag),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: "POST"
        }
    
        return fetch(url, param)
            .then(() => {
                return "created";
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
     
    public static updateFeatureFlag(flag: any, projectId: string) : Promise<any> {
        const url = FeatureFlagApiBasePath + "/featureflags/" + flag.id + "?projectId=" + projectId;
        console.log("Putting on " + url);
        const param = {
            body: JSON.stringify(flag),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: "PUT"
        }
        return fetch(url, param)
            .then(() => {
                return "Feature flag updated";
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    public static toggleFeatureFlag(flag: any, projectId: string) : Promise<any> {
        var flagValue = flag.state.value == "on" ? "off" : "on";
        flag.state.value = flagValue;
        const url = FeatureFlagApiBasePath + "/featureflags/" + flag.id + "?projectId=" + projectId;
        console.log("Fetching " + url);
        const param = {
            body: JSON.stringify(flag),
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method: "PUT"
        }
        return fetch(url, param)
            .then(() => {
                return "feature flag state updated"
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}




