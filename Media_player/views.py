from http.client import HTTPResponse
from telnetlib import STATUS
from django.shortcuts import render
from django.core.paginator import Paginator
from .models import song
from django.http import JsonResponse
# Create your views here.

def media_func(request):
    paginator = Paginator(song.objects.all(), 1)
    page_number = request.GET.get('page')
    var_control = request.GET.get('control')
    page_obj = paginator.get_page(page_number)
    if var_control == '1':
        if page_obj.has_previous():
            prev_num = page_obj.previous_page_number()
            prev_pag= paginator.get_page(prev_num)
            for pre in prev_pag:
                data1 = {
            'prev_num': prev_num,
            'prev_title': pre.title,
            'prev_artist' : pre.artist,
            'prev_audio' : pre.audio_file.url,
         }
            return JsonResponse(data1)
        else: last_page = paginator.get_page(paginator.num_pages)
        for last in last_page:
            data1 = {
                'prev_num': paginator.num_pages,
                'prev_title': last.title,
                'prev_artist' : last.artist,
                'prev_audio' : last.audio_file.url,
        }
            return JsonResponse(data1)
    else:
        if page_obj.has_next():
            next_num= page_obj.next_page_number()
            next_pag= paginator.get_page(next_num)
            for nex in next_pag:
             data2 = {
             'next_num' : next_num,
             'next_title': nex.title,
             'next_artist': nex.artist,
             'next_audio' : nex.audio_file.url
     }
            return JsonResponse(data2)

        else: first_page_num = 1
        first_page = paginator.get_page(first_page_num)
        for first in first_page: 
            data2 = {
            'next_num' : first_page_num,
            'next_title': first.title,
            'next_artist': first.artist,
            'next_audio' : first.audio_file.url
        }
        return JsonResponse(data2)


def index(request):
    if request.is_ajax():
        return media_func(request)
    try:
        start_page = 1 
        paginator =  Paginator(song.objects.all(), 1, allow_empty_first_page=False)
        page_start_obj =  paginator.get_page(start_page)
        for item in page_start_obj:
                title = item.title
                artist = item.artist
                audio = item.audio_file.url
        context = {
                'title' : title,
                'artist' : artist,
                'audio' : audio,
                's_page' : start_page, 
                }
        return render (request, "template.html", context)
    except:
        return render (request, "template.html")

