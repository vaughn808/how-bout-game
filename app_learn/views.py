from django.http import HttpResponse


def learn(request):
    return HttpResponse("Hello, world. You're at the learn page.")