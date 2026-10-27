Add-Type -AssemblyName System.Drawing
$src = 'C:\Users\Carola\.cursor\projects\c-Users-Carola-Desktop-ELOP\assets\c__Users_Carola_AppData_Roaming_Cursor_User_workspaceStorage_aacf1f62b779c97fd940d0ae5659f704_images_ESSGT-55201928-6f33-4fc0-9b7b-53a0e2e73446.png'
$dest = 'c:\Users\Carola\Desktop\ELOP\logo-essgt.png'
$img = [System.Drawing.Image]::FromFile($src)
$bmp = New-Object System.Drawing.Bitmap $img
$out = New-Object System.Drawing.Bitmap $bmp.Width, $bmp.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $bmp.Height; $y++) {
  for ($x = 0; $x -lt $bmp.Width; $x++) {
    $c = $bmp.GetPixel($x, $y)
    if ($c.R -lt 28 -and $c.G -lt 28 -and $c.B -lt 28) {
      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    } else {
      $out.SetPixel($x, $y, $c)
    }
  }
}
$out.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output ($out.Width.ToString() + 'x' + $out.Height.ToString())
$out.Dispose()
$bmp.Dispose()
$img.Dispose()
