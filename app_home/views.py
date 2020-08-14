from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from django.shortcuts import get_object_or_404

# Create your views here.
class IndexPageView(TemplateView):
    """The home page for the black history site"""
    template_name = 'index.html'    