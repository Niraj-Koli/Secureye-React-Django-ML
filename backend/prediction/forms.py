from django import forms
from .models import ObjectDetection


class ObjectDetectionForm(forms.ModelForm):
    class Meta:
        model = ObjectDetection
        fields = ["image"]
