Add-Type -AssemblyName System.Drawing
$src = 'C:\Users\Carola\.cursor\projects\c-Users-Carola-Desktop-ELOP\assets\c__Users_Carola_AppData_Roaming_Cursor_User_workspaceStorage_aacf1f62b779c97fd940d0ae5659f704_images_Design_sem_nome-456effcd-e013-4113-a863-c0ea04abecbf.png'
$img = [System.Drawing.Image]::FromFile($src)
$bmp = New-Object System.Drawing.Bitmap $img
$last = 0
for ($y = $bmp.Height - 1; $y -ge 0; $y--) {
  $branco = $true
  for ($x = 0; $x -lt $bmp.Width; $x += 8) {
    $c = $bmp.GetPixel($x, $y)
    if ($c.R -lt 250 -or $c.G -lt 250 -or $c.B -lt 250) { $branco = $false; break }
  }
  if (-not $branco) { $last = $y; break }
}
Write-Output ("ultima linha util " + $last)
$bmp.Dispose()
$img.Dispose()
