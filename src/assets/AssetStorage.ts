import * as vscode from "vscode";

export class AssetStorage {
  constructor(
		private readonly context: vscode.ExtensionContext
	) {}

  /**
   * @param pathFromRoot
   * 先頭に '/' は含めないでください。
   * 'src/' 内のファイルを指定しないでください。
   */
  public getUri(pathFromRoot: string): vscode.Uri {
    return vscode.Uri.joinPath(this.context.extensionUri, pathFromRoot);
  }

  /**
   * @param pathFromRoot
   * 先頭に '/' は含めないでください。
   * 'src/' 内のファイルを指定しないでください。
   */
  public async loadJson<T>(pathFromRoot: string): Promise<T> {
    const uri = this.getUri(pathFromRoot);
    const rawData = await vscode.workspace.fs.readFile(uri);
    return JSON.parse(new TextDecoder().decode(rawData));
  }
}
