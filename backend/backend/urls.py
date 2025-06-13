from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse


def homepage(request):
    # return render(request, "homepage.html")
    return HttpResponse(request, "Homepage")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("",homepage,name="homepage"),
    path("assets/", include("assets.urls", namespace="assets"))
]
