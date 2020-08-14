"""Defines URL patterns for chess application"""

from django.urls import path
from django.views.generic import TemplateView
from .views import IndexPageView

urlpatterns = [
    path('', IndexPageView.as_view(), name='index'),
]