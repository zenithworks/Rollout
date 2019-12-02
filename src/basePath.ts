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

export const SET_FEATURE_FLAG_CONDITION: string = "set_condition";
export const TOGGLE_FEATURE_FLAG: string = "TOGGLE";
export const TURN_ON_FEATURE_FLAG = "turn_on";

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function demo() {
    console.log('Taking a break...');
    
    console.log('Two seconds later, showing sleep in a loop...');

    // Sleep in loop
    for (let i = 0; i < 5; i++) {
        if (i === 3)
        await sleep(2000);
        console.log(i);
    }
}
  
