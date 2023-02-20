import cv2

# Load the image
image = cv2.imread("image.jpg")

# Convert the image to the HSV color space
hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

# Split the channels of the HSV image
h, s, v = cv2.split(hsv_image)

# Increase the value (brightness) channel by 50
v = cv2.add(v, 50)

# Merge the channels back together
hsv_image = cv2.merge([h, s, v])

# Convert the image back to the BGR color space
enhanced_image = cv2.cvtColor(hsv_image, cv2.COLOR_HSV2BGR)

# Save the enhanced image
cv2.imwrite("enhanced_image.jpg", enhanced_image)
