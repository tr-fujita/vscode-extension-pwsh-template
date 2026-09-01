import * as vscode from "vscode";
import { AssetStorage } from "../../assets/AssetStorage";
import { runPowerShellScript } from "../../lib/powerShellRunner";

// TODO: [TEMPLATE] 一意なタスク名を付けます
const TASK_NAME = "Auth Azure And GitHub";

const sample = async (
  asset: AssetStorage
): Promise<void> => {
  await runPowerShellScript(
    // TODO: [TEMPLATE] ↓ rootから見た、スクリプトへのパスを書きます
    asset.getUri("powerShell/scripts/authAzureAndGitHub.ps1"),
    TASK_NAME
  );
};


export function createSample(
  asset: AssetStorage
): vscode.Disposable {
  return vscode.commands.registerCommand(
    // TODO: [TEMPLATE] ↓ package.json のコマンド名と統一します
    'sample-extension.authAzureAndGitHub',
    async () => await sample(asset)
  );
}
