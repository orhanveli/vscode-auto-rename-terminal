import * as vscode from 'vscode';
import getTerminalFolder from './utils/get-terminal-folder';
import renameActiveTerminal from './utils/rename-active-terminal';

export function activate(context: vscode.ExtensionContext) {
	console.log('Auto rename terminal is activated');
	
	const terminalRenameCallback = (terminal: vscode.Terminal | undefined) => {
		if (!terminal) {
			return;
		}
		const name = getTerminalFolder(terminal);
		if (name) {
			renameActiveTerminal(name);
		}
	};

	const e = vscode.window.onDidChangeActiveTerminal(terminalRenameCallback)
	context.subscriptions.push(e);

	const e2 = vscode.window.onDidOpenTerminal(terminalRenameCallback);
	context.subscriptions.push(e2);

	const commandId = vscode.commands.registerCommand('extension.autoRenameTerminal', () => {
		const terminal = vscode.window.activeTerminal;
		if (!terminal) {
			vscode.window.showWarningMessage('No active terminal dedected');
			return;
		}
        const name = getTerminalFolder(terminal);
		if (name) {
			renameActiveTerminal(name);
		}
	});

	context.subscriptions.push(commandId);
}

export function deactivate() {
	console.log('Auto rename terminal is in-activated');
}
