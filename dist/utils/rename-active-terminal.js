"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = __importStar(require("vscode"));
const commands_1 = require("../constants/commands");
exports.default = (name) => {
    vscode.commands.executeCommand(commands_1.CMD_RENAME_TERMINAL_WITH_ARG, {
        name
    });
    vscode.window.showInformationMessage(`terminal renamed with: ${name}`);
};
//# sourceMappingURL=rename-active-terminal.js.map