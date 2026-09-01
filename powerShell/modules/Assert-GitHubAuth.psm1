function Assert-GitHubAuth {
    # 文字化け防止
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
    # コマンド出力の色を取得
    $env:GH_FORCE_TTY="100%"

    Write-Host "Checking GitHub CLI authentication status..." -ForegroundColor Yellow
    $authStatus =  gh auth status 2>&1 | Out-String

    if ($LASTEXITCODE -ne 0) {
        Write-Host "GitHub CLI is not authenticated. Launching login..." -ForegroundColor Yellow

        gh auth login

        if ($LASTEXITCODE -ne 0) {
            "Write-Error Failed to authenticate with GitHub CLI."
            return $false
        }
    }

    Write-Host $authStatus
    Write-Host "`n  Authenticated with GitHub. `n`n" -ForegroundColor Green
    return $true
}


Export-ModuleMember function Assert-GitHubAuth
