$imageUrls = @{
    "margherita.jpg" = "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&q=80"
    "pepperoni.jpg" = "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
    "veggie.jpg" = "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=800&q=80"
    "bbq-chicken.jpg" = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
    "mediterranean.jpg" = "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
    "meat-lovers.jpg" = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
}

$outputPath = "public/assets"

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputFile = Join-Path $outputPath $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputFile
    Write-Host "Downloaded $($image.Key)"
}
