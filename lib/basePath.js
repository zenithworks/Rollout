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
exports.SiteBasePath = "https://flipflop.vigilance.ms";
exports.TenantApiBasePath = "/api";
exports.FeatureFlagApiBasePath = exports.SiteBasePath + "/api";
exports.FeatureFlagUsageApiBasePath = "/api";
exports.OrchestratorApiBasePath = "/api";
exports.startActiveCall = () => ({
    type: "START_ACTIVECALL",
});
exports.endActiveCall = () => ({
    type: "END_ACTIVECALL",
});
exports.SET_FEATURE_FLAG_CONDITION = "set_condition";
exports.TOGGLE_FEATURE_FLAG = "TOGGLE";
exports.TURN_ON_FEATURE_FLAG = "turn_on";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
function demo() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Taking a break...');
        console.log('Two seconds later, showing sleep in a loop...');
        // Sleep in loop
        for (let i = 0; i < 5; i++) {
            if (i === 3)
                yield sleep(2000);
            console.log(i);
        }
    });
}
