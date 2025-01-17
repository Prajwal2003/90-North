from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Message
from django.contrib.auth.models import User


@login_required
def chat_home(request):
    users = User.objects.exclude(id=request.user.id)
    return render(request, 'chat/home.html', {'users': users})


@login_required
def chat_with_user(request, user_id):
    other_user = User.objects.get(id=user_id)
    messages = Message.objects.filter(
        sender__in=[request.user, other_user],
        receiver__in=[request.user, other_user]
    ).order_by('timestamp')

    if request.method == 'POST':
        content = request.POST['content']
        Message.objects.create(sender=request.user, receiver=other_user, content=content)
        return redirect('chat_with_user', user_id=user_id)

    return render(request, 'chat/chat.html', {'other_user': other_user, 'messages': messages})
