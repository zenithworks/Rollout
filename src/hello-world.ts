import * as core from '@actions/core';
import { SET_FEATURE_FLAG_CONDITION, TOGGLE_FEATURE_FLAG, TURN_ON_FEATURE_FLAG,  sleep } from './basePath';
import { FeatureFlagsAPI } from './FeatureFlag'

async function run() {
  try {
    const actionType = core.getInput('action-type');
    const projectId = core.getInput('project-id');

    if (actionType == SET_FEATURE_FLAG_CONDITION) {

        let selectedFeatureFlag = await getFeatureFlag(projectId);

        console.log(JSON.stringify(selectedFeatureFlag));

        const condition = core.getInput('feature-flag-condition');

        if (condition) {
          let conditionList = condition.split(',');

          let extraInput: any[] = [];
          conditionList.forEach(str => {
            extraInput.push({
                "namespace": "http://schemas.microsoft.com/azure/featureflags/orchestrator/conditions",
                "data": str
            });
          });

          selectedFeatureFlag['state']['extra'] = extraInput;
        } else {
          selectedFeatureFlag['state']['extra'] = [];
        }

        await FeatureFlagsAPI.updateFeatureFlag(selectedFeatureFlag, projectId);

    }  else if (actionType == TOGGLE_FEATURE_FLAG) {
        let selectedFeatureFlag = await getFeatureFlag(projectId);

        await FeatureFlagsAPI.toggleFeatureFlag(selectedFeatureFlag, projectId);
    } else if (actionType == TURN_ON_FEATURE_FLAG) {
        let selectedFeatureFlag = await getFeatureFlag(projectId);
        await FeatureFlagsAPI.setFeatureFlagState(selectedFeatureFlag, projectId, "on")
    } else {
      let selectedFeatureFlag = await getFeatureFlag(projectId);

      console.log(selectedFeatureFlag);
    }

    console.log("Waiting for 7 seconds");
    await sleep(5000);
  } catch (error) {
    core.setFailed(error.message);
  }
}

async function getFeatureFlag(projectId: string) {
      const featureFlagName = core.getInput('feature-flag-name');
      let featureFlags = await FeatureFlagsAPI.fetchFeatureFlags(projectId);

      let selectedFeatureFlag: any = null;
      featureFlags.forEach((element: any) => {
        if (element.name.toUpperCase() == featureFlagName.toUpperCase()) {
          selectedFeatureFlag = element;
        }
      });

      if (selectedFeatureFlag == null) {
        throw "Feature flag not defined : " + featureFlagName;
      }

      return selectedFeatureFlag;
}

run();