"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = __importStar(require("vscode"));
const get_terminal_folder_1 = __importDefault(require("./utils/get-terminal-folder"));
const rename_active_terminal_1 = __importDefault(require("./utils/rename-active-terminal"));
function activate(context) {
    console.log('Auto rename terminal is activated');
    const terminalRenameCallback = (terminal) => {
        if (!terminal) {
            return;
        }
        const name = get_terminal_folder_1.default(terminal);
        if (name) {
            rename_active_terminal_1.default(name);
        }
    };
    const e = vscode.window.onDidChangeActiveTerminal(terminalRenameCallback);
    context.subscriptions.push(e);
    const e2 = vscode.window.onDidOpenTerminal(terminalRenameCallback);
    context.subscriptions.push(e2);
    const commandId = vscode.commands.registerCommand('extension.autoRenameTerminal', () => {
        const terminal = vscode.window.activeTerminal;
        if (!terminal) {
            vscode.window.showWarningMessage('No active terminal dedected');
            return;
        }
        const name = get_terminal_folder_1.default(terminal);
        if (name) {
            rename_active_terminal_1.default(name);
        }
    });
    context.subscriptions.push(commandId);
}
exports.activate = activate;
function deactivate() {
    console.log('Auto rename terminal is in-activated');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map