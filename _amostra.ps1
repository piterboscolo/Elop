Add-Type -AssemblyName System.Drawing
$src = 'C:\Users\Carola\.cursor\projects\c-Users-Carola-Desktop-ELOP\assets\c__Users_Carola_AppData_Roaming_Cursor_User_workspaceStorage_aacf1f62b779c97fd940d0ae5659f704_images_Design_sem_nome-456effcd-e013-4113-a863-c0ea04abecbf.png'
$img = [System.Drawing.Image]::FromFile($src)
$bmp = New-Object System.Drawing.Bitmap $img
$cols = 40
$rows = 26
$cw = [Math]::Floor($bmp.Width / $cols)
$ch = [Math]::Floor($bmp.Height / $rows)
Write-Output ("size " + $bmp.Width + "x" + $bmp.Height)
for ($y = 0; $y -lt $rows; $y++) {
  $line = '{0,3} ' -f ($y * $ch)
  for ($x = 0; $x -lt $cols; $x++) {
    $px = $x * $cw + [Math]::Floor($cw / 2)
    $py = $y * $ch + [Math]::Floor($ch / 2)
    $c = $bmp.GetPixel($px, $py)
    $max = [Math]::Max($c.R, [Math]::Max($c.G, $c.B))
    $min = [Math]::Min($c.R, [Math]::Min($c.G, $c.B))
    if ($c.R -gt 245 -and $c.G -gt 245 -and $c.B -gt 245) { $chr = '.' }
    elseif ($c.G -gt $c.R + 18 -and $c.G -gt $c.B + 8 -and $c.G -gt 70) { $chr = 'g' }
    elseif ($c.R -gt 140 -and $c.G -gt 110 -and $c.B -lt 130 -and ($c.R - $c.B) -gt 30) { $chr = 't' }
    elseif ($max -lt 90) { $chr = '#' }
    elseif (($max - $min) -lt 22 -and $c.R -gt 150) { $chr = 'w' }
    elseif (($max - $min) -lt 28) { $chr = 'r' }
    else { $chr = '+' }
    $line += $chr
  }
  Write-Output $line
}
$bmp.Dispose()
$img.Dispose()
