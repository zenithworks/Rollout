import * as core from '@actions/core';
import {fetchFeatureFlags} from './FeatureFlag'

async function run() {
  try {
    const actionType = core.getInput('action-type');
    const projectId = core.getInput('projectId');
    if (actionType != 'GET-FEATURE-FLAGS') {
        // the Octocat doesn't want to be greeted here!
        throw new Error("Operation not supported");
    } else {
        console.log(`Hello ${projectId}!`);

        fetchFeatureFlags(projectId)
        core.setOutput("featureFlags", "");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();