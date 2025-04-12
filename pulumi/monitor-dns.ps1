$domain = "_b8e3dc80f671e7e0c9be8fca04dc0ad7.www.yourdomain.com."
$servers = @("8.8.8.8", "1.1.1.1", "208.67.222.222") # Google, Cloudflare, OpenDNS

while($true) {
    $timestamp = Get-Date -Format "HH:mm:ss"
    Write-Host "`n=== DNS Check at $timestamp ===" -ForegroundColor Cyan
    
    foreach ($server in $servers) {
        try {
            $result = Resolve-DnsName -Name $domain -Type CNAME -Server $server -ErrorAction Stop
            Write-Host ("{0} resolves to {1}" -f $server, $result.NameHost) -ForegroundColor Green
        } catch {
            Write-Host ("{0}: Not resolving" -f $server) -ForegroundColor Red
        }
    }
    
    Write-Host "Next check in 5 minutes..." -ForegroundColor Yellow
    Start-Sleep -Seconds 300
}
