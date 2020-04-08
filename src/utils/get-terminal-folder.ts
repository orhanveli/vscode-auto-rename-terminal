import * as vscode from 'vscode';
import path from 'path';

export default (terminal: vscode.Terminal) => {
    const { cwd } = (terminal.creationOptions as any);
    if (!cwd) {
        return null;
    }
    const { path: terminalPath } = cwd;
    if (!terminalPath) {
        return null;
    }
    return path.basename(terminalPath);
}