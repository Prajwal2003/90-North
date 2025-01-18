from django.shortcuts import render

def room(request, room_name):
    return render(request, '/Users/starkz/PycharmProjects/90-North/Task 2/chat_project/chat/templetes/chat/room.html', {'room_name': room_name})
