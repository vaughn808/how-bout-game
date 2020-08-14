from django.http import HttpResponse

def train(request):
    return HttpResponse("Hello, world. You're at the train page.")