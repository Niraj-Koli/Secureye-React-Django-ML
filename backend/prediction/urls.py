from django.contrib import admin
from django.urls import path
import prediction.views as views

urlpatterns = [
    path("prediction/", views.yolov8_prediction, name="yolov8_prediction"),
]
