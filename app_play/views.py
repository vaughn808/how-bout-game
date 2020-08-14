from django.http import HttpResponse

def play(request):
    return HttpResponse("Hello, world. You're at the play page.")