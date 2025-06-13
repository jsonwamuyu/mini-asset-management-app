from django.urls import path
from . import views

app_name = "assets"


urlpatterns = [
    path("/", views.get_all_assets, name="all-assets")
]
