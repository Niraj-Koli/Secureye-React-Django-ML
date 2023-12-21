from ultralytics import YOLO
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
from django.core.files.base import ContentFile
from django.utils.translation import gettext_lazy as _
from .forms import ObjectDetectionForm
from .models import PredictedImage

model = YOLO(
    "D:/Niru/Coding/Projects/Important/1/Secureye-React-Django-ML/backend/prediction/mlModel/best.pt"
)


@csrf_exempt
def yolov8_prediction(request):
    if request.method == "POST":
        form = ObjectDetectionForm(request.POST, request.FILES)

        if form.is_valid():
            image = form.save()

            results = model.predict(source=image.image.path, conf=0.5)

            detected_classes = []

            for result in results:
                im_array = result.plot()
                im = Image.fromarray(im_array[..., ::-1])
                im.save(
                    "D:/Niru/Coding/Projects/Important/1/Secureye-React-Django-ML/backend/media/results.jpg"
                )

                boxes = result.boxes.cpu().numpy()
                for box in boxes:
                    detected_class = result.names[int(box.cls[0])]
                    detected_classes.append(detected_class)

            predicted_image = PredictedImage.objects.create()

            with open(
                "D:/Niru/Coding/Projects/Important/1/Secureye-React-Django-ML/backend/media/results.jpg",
                "rb",
            ) as file:
                content = file.read()
                predicted_image.image.save("predicted_image.jpg", ContentFile(content))

            predicted_image.save()

            image.predicted_image = predicted_image
            image.save()

            return JsonResponse(
                {"classes": detected_classes, "image_url": predicted_image.image.url}
            )
        else:
            return JsonResponse({"error": "Invalid form data"}, status=400)


    return JsonResponse({"classes": detected_classes, "image_url": predicted_image.image.url})
