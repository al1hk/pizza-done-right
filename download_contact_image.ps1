$imageUrl = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
$outputPath = "d:/nextjs/pizza_website/public/assets/pizza-contact-bg.jpg"

Invoke-WebRequest -Uri $imageUrl -OutFile $outputPath
