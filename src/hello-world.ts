import * as core from '@actions/core';
import {fetchFeatureFlags} from './FeatureFlag'

async function run() {
  try {
    const actionType = core.getInput('action-type');
    const projectId = core.getInput('project-id');
    if (actionType != 'GET-FEATURE-FLAGS') {
        // the Octocat doesn't want to be greeted here!
        throw new Error("Operation not supported");
    } else {
        console.log(`Hello ${projectId}!`);

        fetchFeatureFlags(projectId);

        console.log(process.env.GITHUB_REPOSITORY);

        core.setOutput("featureFlags", "");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();