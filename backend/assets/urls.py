from django.urls import path
import views

app_name = "assets"


urlpatterns = [
    path("/", views.get_all_assets, name="all-assets")
]
