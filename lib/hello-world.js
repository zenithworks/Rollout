"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const basePath_1 = require("./basePath");
const FeatureFlag_1 = require("./FeatureFlag");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const actionType = core.getInput('action-type');
            const projectId = core.getInput('project-id');
            if (actionType == basePath_1.SET_FEATURE_FLAG_CONDITION) {
                let selectedFeatureFlag = yield getFeatureFlag(projectId);
                console.log(JSON.stringify(selectedFeatureFlag));
                const condition = core.getInput('feature-flag-condition');
                if (condition) {
                    let conditionList = condition.split(',');
                    let extraInput = [];
                    conditionList.forEach(str => {
                        extraInput.push({
                            "namespace": "http://schemas.microsoft.com/azure/featureflags/orchestrator/conditions",
                            "data": str
                        });
                    });
                    selectedFeatureFlag['state']['extra'] = extraInput;
                    yield FeatureFlag_1.FeatureFlagsAPI.updateFeatureFlag(selectedFeatureFlag, projectId);
                }
                else {
                    throw "condition not specified";
                }
            }
            else if (actionType == basePath_1.TOGGLE_FEATURE_FLAG) {
                let selectedFeatureFlag = yield getFeatureFlag(projectId);
                yield FeatureFlag_1.FeatureFlagsAPI.toggleFeatureFlag(selectedFeatureFlag, projectId);
            }
            else {
                let selectedFeatureFlag = yield getFeatureFlag(projectId);
                console.log(selectedFeatureFlag);
            }
            console.log("Waiting for 7 seconds");
            yield basePath_1.sleep(7000);
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
function getFeatureFlag(projectId) {
    return __awaiter(this, void 0, void 0, function* () {
        const featureFlagName = core.getInput('feature-flag-name');
        let featureFlags = yield FeatureFlag_1.FeatureFlagsAPI.fetchFeatureFlags(projectId);
        let selectedFeatureFlag = null;
        featureFlags.forEach((element) => {
            if (element.name.toUpperCase() == featureFlagName.toUpperCase()) {
                selectedFeatureFlag = element;
            }
        });
        if (selectedFeatureFlag == null) {
            throw "Feature flag not defined : " + featureFlagName;
        }
        return selectedFeatureFlag;
    });
}
run();
