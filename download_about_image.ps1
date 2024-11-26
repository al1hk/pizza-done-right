$imageUrl = "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1920&q=80"
$outputFile = "public/assets/about-bg.jpg"

Write-Host "Downloading about background image..."
Invoke-WebRequest -Uri $imageUrl -OutFile $outputFile
Write-Host "Downloaded about background image"
