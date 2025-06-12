from django.shortcuts import render
from .models import Asset

def get_all_assets(request):
    assets = Asset.objects.all()
    return render(request, 'assets/assets.html', {"assets":assets})

