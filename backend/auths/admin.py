from django.contrib import admin
from .models import LogInModel,SignUpModel
# Register your models here.
class LoginAdmin(admin.ModelAdmin):
    pass 

admin.site.register(LogInModel,LoginAdmin)