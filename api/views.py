from pprint import pprint

import requests
from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render

API_KEY = settings.API_KEY
SEARCH = "https://api.themoviedb.org/3/search/movies"


def search(request):
    # Data is delivered as it is - this view makes no changes to the data.

    query = request.GET.get("q")
    r = requests.get(f"{SEARCH}?api_key={API_KEY}&query={query}")
    return JsonResponse(r.json(), safe=False)
