"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = (terminal) => {
    const { cwd } = terminal.creationOptions;
    if (!cwd) {
        return null;
    }
    const { path: terminalPath } = cwd;
    if (!terminalPath) {
        return null;
    }
    return path_1.default.basename(terminalPath);
};
//# sourceMappingURL=get-terminal-folder.js.map