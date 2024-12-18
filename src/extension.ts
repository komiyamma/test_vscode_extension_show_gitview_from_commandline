import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.commands.executeCommand('workbench.view.scm');
}

export function deactivate() { }
