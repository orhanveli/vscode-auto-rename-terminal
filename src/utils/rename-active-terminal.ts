import * as vscode from 'vscode';
import { CMD_RENAME_TERMINAL_WITH_ARG } from '../constants/commands';

export default (name: string) => {
    vscode.commands.executeCommand(CMD_RENAME_TERMINAL_WITH_ARG, {
        name
    });
    vscode.window.showInformationMessage(`terminal renamed with: ${name}`);
}